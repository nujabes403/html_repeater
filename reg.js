var reg_ = /{{[\w\s \[ \] \( \) \. \+ \- \* \\ \!]*}}/g;
var animals = [
    {name:'dolphin',sound:'----',age:5},
    {name:'elephant',sound:'성큼성큼',age:8},
    {name:'lion',sound:'어흥',age:20},
    {name:'tiger',sound:'야호',age:9},
    {name:'penguin',sound:'뒤뚱뒤뚱',age:2}
];
document.getElementsByAttribute = Element.prototype.getElementsByAttribute = function(attr) {
    var nodeList = this.getElementsByTagName('*');
    var nodeArray = [];
    for (var i = 0, elem; elem = nodeList[i]; i++) {
        if ( elem.getAttribute(attr) ) nodeArray.push(elem);
    }
    return nodeArray;
}
document.addEventListener("DOMContentLoaded", function(e) {
    var repeaterArr = document.getElementsByAttribute('repeater');
    repeaterArr.map(function(node){
        InjectRepeaterItem(node);
        //v00 Repeater
        // var repeaterAttrs = node.getAttribute('repeater').split(',');
        // RepeatDOM(window[repeaterAttrs[0]],repeaterAttrs[1],repeaterAttrs[2],node);
        // v01 Repeater
        //...
    });
    parseBrackets(document.body);
 });
 function EvalWithContext(evaluatee, context) {
     return function() { return eval(evaluatee); }.call(context);
 }
function ReplaceWithEval(htmlText){
    htmlText = htmlText.replace(reg_,function(item){
        var target = item.replace('{{','').replace('}}','');
        return (function(){
            return EvalWithContext(target,window);
        }());
    });
    return htmlText;
}
function parseBrackets(target){
    var htmlBodyText = target.innerHTML;
    var replacedText = ReplaceWithEval(htmlBodyText);
    target.innerHTML = replacedText;
}
function InjectRepeaterItem(targetNode){
    var attrs = targetNode.getAttribute('repeater').split(' in ');
    var itemName = attrs[0];
    var targetArr = attrs[1];
    if(window[targetArr]){
        var copyCount = 0;
        var copiedHTML = targetNode.innerHTML;
        window[targetArr].map(function(item){
            window[itemName] = item;
            parseBrackets(targetNode);
            if(copyCount < window[targetArr].length-1){
                targetNode.innerHTML += copiedHTML;
                copyCount++;
            }
        });
        }
    }

// function RepeatDOM(targetArr,key,elemTag,elemParent){
//     if(targetArr){
//         targetArr.map(function(item){
//             var newEl = document.createElement(elemTag);
//             newEl.innerHTML = item[key];
//             elemParent.appendChild(newEl);
//         });
//     }
// }
