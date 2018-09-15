function range(start, end, step) {
    var arr = [];

    if (start < end) {
        for (var i = start; i < end; i += step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i > end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));

//push메소드를 사용하면 배열 마지막 칸에 원소가 추가된다.