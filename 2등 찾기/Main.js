// function getSecondBiggestNumber(arr) {
//     var second;
//     for (var e = 0; e < 2; e++) {
//         for(var i = 0; i < arr.length-1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 var tmp;
    
//                 arr[i] = tmp;
//                 arr[i + 1] = arr[i];
//                 tmp = arr[i + 1];

//                 second = arr[i];
//             }
//         }
//     } 
//     return second;
// }

function getSecondBiggestNumber(arr) {
    var first = arr[0];
    var second = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] >= first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));
