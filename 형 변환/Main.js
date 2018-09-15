// 숫자형과 문자열 재료
var material1 = '3';//문자열
var material2 = 3;//숫자형
var material3 = '4';
var material4 = 10;

// 요리 결과
var result1;
var result2;

// 형 변환을 사용해서 result1에는 문자열 '30'을, result2에는 숫자형 40을 만들어 넣어보세요.
result1 = String(material2 * material4);
result2 = (Number(material1) * 4) + (Number(material3) * 7);

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);