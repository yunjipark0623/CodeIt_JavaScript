var birthdayData = [//문자열 원소들로 이루어진 배열이다.
    '20010309전소미',
    '19960828김세정',
    '19991112최유정',
    '19960209김청하',
    '19990719김소혜',
    '19981216주결경',
    '19971201정채연',
    '19991204김도연',
    '19991204강미나',
    '19951218임나영',
    '19990803유연정'
  ];
  
function printMinors(arr) {
    //17년 기준 98년생까지는 성인, 99년생부터는 미성년자
    console.log("미성년자 명단:");
    var year = [];
    for(var i = 0; i < arr.length; i++) {
        year[i] = Number(arr[i].substring(0, 4));
        if (year[i] > 1998) {
            console.log(arr[i]);
        }
    } 
}
  
// 테스트 코드
printMinors(birthdayData);

/*
결과값

미성년자 명단:
20010309전소미
19991112최유정
19990719김소혜
19991204김도연
19991204강미나
19990803유연정
*/

/*
코드잇 정답

var birthdayData = [
  '20010309전소미',
  '19960828김세정',
  '19991112최유정',
  '19960209김청하',
  '19990719김소혜',
  '19981216주결경',
  '19971201정채연',
  '19991204김도연',
  '19991204강미나',
  '19951218임나영',
  '19990803유연정'
];

function printMinors(arr) {
    console.log("미성년자 명단:");

    for(var i = 0; i < arr.length; i++){
        if(Number(arr[i].substr(0, 4)) > 1998){
            console.log(arr[i]);
        }
    }
}

// 테스트 코드
printMinors(birthdayData);

*/

