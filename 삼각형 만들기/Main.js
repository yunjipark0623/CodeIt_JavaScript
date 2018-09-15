function printTriangle(height) {
    var result = '';
    for (var i = 1; i <= height; i++) {
        result += "*";
        console.log(result);
    }
}

// 테스트 코드
console.log('높이: 5');
printTriangle(5);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 1');
printTriangle(1);