# CodeIt_JavaScript 필기 노트

## 180915   
### 배열

var brands = ['Apple', 'Coca - Cola', 'Starbucks'];  
var iPad = [800, 'black', true] -> iPad라는 변수에 숫자형 800, 색깔을 나타내는 black이라는 문자열, 재고가 있는지를 나타내는 논리형 true를 한꺼번에 저장할 수 있다. 반면에 자바는 배열에 한가지 자료형만 담을 수 있지만 JS는 좀 더 느슨하다.  
brands[1] = "Coca - Cola"  

var text1 = 'Hello'
Console.log(text1[0]);
Console.log(text1[1]); 하면 H, e라고 나온다.  
문자열도 배열처럼 받아들인다.(문자열은 immutable(변경할 수 없는), 배열은 mutable(변경 가능한))  

객체는 배열보다 더 직관적이다.  
var person = {  
  name = 'Nelly',
  age = 23,
  nationality = 'Korea'
};  
-> name, age, nationality는 property이고 Nelly, 23, Korea는 value이다.  
Console.log(person["age"]); = Console.log(person.age);

### 함수

fuction logTask(task) {
  Console.log(task + " : 완료");
  Console.log("-");
}
logTask("보고서 작성"); -> 보고서 작성이 logTask함수의 task파라미터로 들어간다.  
함수를 써주면 반복이 적다. 수정에 용이해서 유지보수가 쉽다.

### for of문

for(var i = 0; i < 3; i++) {
  Console.log(brands[i]);
}  
이랑  
for(value of brands) {
  Console.log(value);
}  
value는 임의의 변수 이름이다 -> 굉장히 직관적이다.

### for문 while문 차이점

for문 : 반복횟수 예측 가능할 때  
while문 : 반복횟수 예측 불가능할 때

## 180917

### JQuery

<a onclick = "document.getElementById('photo').src = 'images/seoul.png';">하면 더 간결해진다.  
document는 현재 페이지라는 뜻 getElementById('photo')는 photo라는 id를 가진 요소를 가지고 오라는 뜻  
이것을 함수로 빼주면,  
<a onclick = "clickseoul">  
<script>  
  function clickseoul() {
    document.getElementById('photo').src = 'images/seoul.png';
  }  
</script>  
  
### JQuery 사용하는 법

구글에서 JQuery cdn을 거쳐 제일 최신버전 minified를 누르면 나오는 소스를 html파일에 복붙한다.

### 사진 첨부하는 방법

<a onclick = clickseoul();> Seoul </a>  
function clickseoul() {
  document.getElementById('photo').src = 'images/seoul.png';
}  
이것을 JQuery로 바꾸면,  
function clickseoul() {
  $('photo').attr('src', 'images.seoul.png');
}  

$('#seoul').css('font-weight', 'bold'); -> JQuery로 폰트 굵기 바꿔주는 것  
HTML소스는 간결해야 한다.  
<a> Seoul </a>  
<script>  
  $('#seoul').on('click', clickseoul);  
</script>    
로 바꿀 수 있다. 여기서 clickseoul()이 아니라 함수명만 적어준다.

