// // let longestPalindrome = function (str) {
// //   // TODO: 여기에 코드를 작성합니다.
// //   // const LPD = [];
// //   // let arr = str.split(" ").map(el => [el])

// //   // for (let i=0; i<arr.length; i++) {
// //   //   for (let j=i; j<=i; j++) {
// //   //     if (arr[i][j] === arr[i][arr.length - j]) {
// //   //       LPD.push(arr[i])
// //   //     }
// //   //   }
// //   // }
// //   // let result = LPD.filter(e => {Math.max(e.length)})
// //   for (let i=str; i>=1; i--) {
// //     for (let j=0; j<=str.length; j++) {
// //       const isPalin = longestPalindrome(str.slice(j, i+j))
// //       if (isPalin) return i
// //     }
// //   }
// //   return 1
// // };

// // const isPalindrome = (s) => {
// //   const half = Math.floor(s.length/2);

// //   for(let i=0; i<half; i++){
// //     if(s[i] !== s[s.length-1-i]) return false;
// //   }
// //   return true;
// // }

// let longestPalindrome = function (str) {
//   let len = str.length;

//   let answer = -1;
//   for (let i = 0; i < len; i++) {
//     if (answer > -1) {
//       break;
//       }
//     for (let t = 0; t <= i; t++) {
//       if (
//         str[t] === str[len - i + t - 1] &&
//         is_palindrome(str.slice(t, len - i + t))
//       ) {
//         answer = len - i;
//         break;
//       }
//     }
//   }
//   return answer;
// };

// function is_palindrome(str) {
//   let trueCheck = true;

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//       trueCheck = false;
//       break;
//     }
//   }
//   return trueCheck;
// }

// *
// *
// *

let longestPalindrome = function (str) {
  let answer = 1;
  const len = str.length;
  const dp = new Array(len).fill().map((_) => new Array(len).fill(false));

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === str[i + 1]) {
      dp[i][i + 1] = true;
      answer = 2;
    }
  }

  for (let i = 3; i <= len; i++) {
    for (let start = 0; start <= len - i; start++) {
      const end = start + i - 1;
      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        answer = Math.max(answer, i);
      }
    }
  }
  return answer;
};

// * 실행시간 초과
let longestPalindrome = function (str) {
  if (str === str.split("").reverse().join("")) {
    return str.length;
  } else {
    let A = longestPalindrome(str.substring(0, str.length - 1));
    let B = longestPalindrome(str.substring(1, str.length));
    return Math.max(A, B);
  }
};

// * 효율성 통과못함

let longestPalindrome = function (str) {
  let len = str.length;
  let answer = -1;

  if (len < 2) {
    return len;
  }

  for (let i = 0; i < len; i++) {
    if (answer > -1) {
      break;
    }
    for (let j = 0; j <= i; j++) {
      if (
        str[j] === str[len - i + j - 1] &&
        is_palindrome(str.slice(j, len - i + j))
      ) {
        answer = len - i;
        break;
      }
    }
  }
  return answer;
};

function is_palindrome(str) {
  let trueCheck = true;

  for (let i = 1; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      trueCheck = false;
      break;
    }
  }
  return trueCheck;
}
