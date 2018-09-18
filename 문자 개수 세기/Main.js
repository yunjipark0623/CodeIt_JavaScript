// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;
    var res = word.toUpperCase();
    for (var i = 0; i < res.length; i++) {
        if (res[i] === ch) {
            count++;
        }
    }

    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    var count = 0;
    var res = word.toUpperCase();
    for (var i = 0; i < res.length; i++) {
        if (res[i] === 'A') {
            count++;
        }
    }

    return count;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));


/*
결과값
2
0
3
*/

/*
코드잇 정답
function countCharacter(word, ch) {
    var count = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === ch.toUpperCase()) {
            count++;
        }
    }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    return countCharacter(word, 'A');
}
*/