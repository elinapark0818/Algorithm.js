
// score 가 100이면 즉시 A+ 가 최종결과다
// score 에서 10의 자리를 얻어낸다
// score 에서 1의 자리를 얻어낸다
// 10의 자리가 6이면 gradeLetter 는 D
// 10의 자리가 7이면 gradeLetter 는 C
// 10의 자리가 8이면 gradeLetter 는 B
// 10의 자리가 9이면 gradeLetter 는 A
// 1의 자리가 0 보다 크거나 동일하고 2보다 작거나 동일하면 기호는 -
// 1의 자리가 3 보다 크거나 동일하고 7보다 작거나 동일하면 기호는 빈 문자열
// 1의 자리가 8 보다 크거나 동일하고 9와 동일하면 기호는 +
// gradeLetter 와 기호를 조합해서 최종 결과를 만든다
// 최종 결과를 리턴한다

function convertScoreToGradeWithPlusAndMinus(score) {
    // score 가 100이면 즉시 A+ 가 최종결과다
    if (score === 100) {
        return 'A+';
    }

    // score 에서 10의 자리를 얻어낸다
    // floor(x: number): number;
    let tensDigit = Math.floor(score / 10);

    // score 에서 1의 자리를 얻어낸다
    let unitsDigit = score % 10;
    
    let gradeLetter;
    // 10의 자리가 6이면 gradeLetter 는 D
    if (tensDigit === 6) {
        gradeLetter = 'D';
    }
    // 10의 자리가 7이면 gradeLetter 는 C
    else if (tensDigit === 7) {
        gradeLetter = 'C'
    }
    // 10의 자리가 8이면 gradeLetter 는 B
    else if (tensDigit === 8) {
        gradeLetter = 'B'
    }
    // 10의 자리가 9이면 gradeLetter 는 A
    else if (tensDigit === 9) {
        gradeLetter = 'A'
    }
    // 1의 자리가 3 보다 크거나 동일하고 7보다 작거나 동일하면 기호는 빈 문자열
    let sign = '';
    // 1의 자리가 0 보다 크거나 동일하고 2보다 작거나 동일하면 기호는 -
    if (unitsDigit >= 0 && unitsDigit <= 2) {
        sign = '-';
    }
    // 1의 자리가 8 보다 크거나 동일하고 9와 동일하면 기호는 +
    else if (unitsDigit >= 8 && unitsDigit <= 9) {
        sign = '+';
    }
    // gradeLetter 와 기호를 조합해서 최종 결과를 만든다
    // 최종 결과를 리턴한다
    return gradeLetter + sign;
}