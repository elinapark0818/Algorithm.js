
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

// ---

function convertScoreToGradeWithPlusAndMinus(score) {

    if (score > 100 || score < 0) {
        return 'INVALID SCORE';
    } else if (score === 100) {
        return 'A+';
    }

    let grade;
    let sign = '';

    let tensDigit = Math.floor(score / 10);
    let digit = score % 10;

    if (tensDigit < 60) {
        grade = 'F';
    } else if (tensDigit >= 90){
        grade = 'A';
    } else if (tensDigit >= 80){
        grade = 'B';
    } else if (tensDigit >= 70){
        grade = 'C';
    } else if (tensDigit >= 60){
        grade = 'D';
    }

    if (digit > 0 && digit <= 3) {
        sign = '-'
    } else if (digit >= 8) {
        sign = '+'
    }
    return grade + sign
}

//  내가 푼 방법
function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    
    let grade;

    if (score === 100) {
        return 'A+';
    }
    else if (score > 100 || score < 0) {
        return 'INVALID SCORE'
    }
    else if (score >= 90) {
        grade = 'A';
    }
    else if (score >= 80) {
        grade = 'B';
    }
    else if (score >= 70) {
        grade = 'C';
    }
    else if (score >= 60) {
        grade = 'D'
    }
    else if (score < 60) {
        return 'F';
    }

    let digit = score % 10
    let sign = ''

    if (digit >= 0 && digit <= 2) {
        sign = '-';
    }
    else if (digit >= 8) {
        sign = '+'
    }
    return grade + sign
    }

function isPythagorean(side1, side2, side3) {
    // TODO: 여기에 코드를 작성합니다.
    let side1Pow = Math.pow(side1, 2);
    let side2Pow = side2 * side2;
    let side3Pow = side3 ** 2;
    
    let case1 = side1Pow === side2Pow + side3Pow;
    let case2 = side2Pow === side1Pow + side3Pow;
    let case3 = side3Pow === side1Pow + side2Pow;
    
    if (case1 || case2 || case3 === true) {
        return true
    }
    else {
        return false
    }
    }

function or(expression1, expression2) {
    // TODO: 여기에 코드를 작성합니다.
    // [ture, false] [true, false]
    // 4가지 경우의 수 [true, true] [true, false] [false, ture] [false, false]
    
    // true, false -> return true
    if (expression1 === !expression2 && !expression1 === expression2) {
        return true
    }
    // false, true -> return true
    else if (expression1 !== expression2 && !expression1 !== !expression2) {
        return true
    }
    // true, true -> return true
    else if (expression1 === expression2 && !expression1 === !expression2) {
        return true
    }
    // false, false -> return false
    else if (!expression1 === !expression2 && expression1 === expression2){
        return false
    }
}

function or(expression1, expression2) {
  // TODO: 여기에 코드를 작성합니다.
  // [ture, false] [true, false]
  // 4가지 경우의 수 [true, true] [true, false] [false, ture] [false, false]

  if (expression1 && !expression2) {
    return true
  }
  else if (!expression1 && expression2) {
    return true
  }
  else if (expression1) {
    return true
  }
  else if (!expression1){
    return false
  }
}



  function or(expression1, expression2) {

    //  3개의 true, 1개의 false
    // true : [true, true] [true, false] [false true]
    // 1개의 false : [false false]
    if (!expression1) {
      if (!expression2){ // false, false
        return false
      } else if (expression2) { // false, true
        return true
      }
    }
    else {
      return true
    }
  }