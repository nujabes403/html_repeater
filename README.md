# h_repeater

## 특징
- `HTML Repeater`는 Angular.js의 `ng-repeat`에서 영감을 얻어서, 스스로 제작해 본 코드입니다.
- `HTML Repeater`는 HTML 코드에서, 배열에 담겨있는 여러 객체들의 값을 각각 나타내야 할 때, 일일이 객체의수만큼 HTML 코드를 짜지 않아도 되게 해줍니다.

## 사용 예
Inline-style:
![alt text](http://res.cloudinary.com/dxmiqvbcr/image/upload/v1474589966/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2016-09-23_09.17.32_n0199x.png "HTML Screen")

Inline-style:
![alt text](http://res.cloudinary.com/dxmiqvbcr/image/upload/v1474589966/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2016-09-23_09.18.52_acgkbr.png "indexhtml Screen")
## 사용법
```
var animals = [
    {name:'dolphin',sound:'삐---',age:5},
    {name:'elephant',sound:'뿌우',age:8},
    {name:'lion',sound:'으르렁',age:20},
    {name:'tiger',sound:'어흥',age:9},
];
```

위와 같은 배열에 담긴 각각의 객체들을 HTML로 나타내기 위해서 .
```
<ul repeater="item in animals">
    <li>이름 : {{item.name}}</li>
    <li>나이 : {{item.age}}</li>
    <li>{{item.name}}은(는) '{{item.sound}}' 소리를 냅니다.</li>
</ul>
```
이처럼 간단하게, 부모노드에 `repeater`라는 `attribute를` 주고,

값으로 `"(배열의 각 객체를 지칭할 별명) in (대상배열)"`을 준 후에,

`{{ }}` 기호 안에 {{ 객체.프로퍼티 }} 이런 식으로 접근 할 수 있습니다.

위의 코드를 예로 보면,

부모노드의 innerHTML(부모노드 태그의 내용부분)에 해당 객체를 'item' 이라는 이름으로 가리킬 수 있습니다.  

따라서 'item.name' 'item.age' 'item.sound' 이렇게 각각의 객체에 있는 값에 쉽게 접근할 수 있습니다.
