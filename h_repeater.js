var reg_ = /{{[\w\s \[ \] \( \) \. \+ \- \* \\ \!]*}}/g;
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
    target.innerHTML = ReplaceWithEval(target.innerHTML);
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
