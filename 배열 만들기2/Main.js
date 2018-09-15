var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

// 내 정답 //

function restoreArray(arr) {
    var returnArr = [];//바로 잡은 배열을 이 변수에 다시 넣어준다.
    
    var tmp = 0;
    for (var i = 0; i < arr.length; i++) {
        
        var end = arr[i].length - 1;
        tmp = arr[i][0];
        arr[i][0] = arr[i][end];
        arr[i][end] = tmp;
    }

    var v = 0;
    for (var i = 0; i < arr.length; i++) {
        returnArr.length += arr[i].length;
        for (var e = 0; e < arr[i].length; e++) {
            returnArr[v] = arr[i][e];
            v++;
        }
    }

    return returnArr;
}

// 코드잇 정답 //

/*
function restoreArray(arr) {
    var returnArr = [];
    var idx = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            returnArr[idx] = arr[i][j];
            idx++;
        }
    }
    return returnArr;
}
*/

console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));

//배열 안에 있는 배열의 숫자들의 크기 순대로 바로 잡아주기
//2중 배열이 아닌 하나의 배열로 통합한다.
/* 
결과값
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 3, 5, 4, 6, 7, 10, 9, 8 ]
*/

