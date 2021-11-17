// 맨 처음 생각한 방법, replace 남발하기 + 정규식 활용하기 

function solution(s) {
    // s에 zero~nine (이)가 포함되어 있다면, 
    // 숫자로 바꿔준다
        s = s.replace(/zero/g,'0')
        s = s.replace(/one/g,'1')
        s = s.replace(/two/g,'2')
        s = s.replace(/three/g,'3')
        s = s.replace(/four/g,'4')
        s = s.replace(/five/g,'5')
        s = s.replace(/six/g,'6')
        s = s.replace(/seven/g,'7')
        s = s.replace(/eight/g,'8')
        s = s.replace(/nine/g,'9')
        s = Number(s)
    return s;
}

// 다른 풀이
// 영단어로 된 숫자들로 구성된 배열을 만든다
// 배열의 길이만큼 반복해서
// 새로운 배열 array 에 영단어로 된 숫자를 빼고 숫자로만 이루어진 문자열이 배열에 넣는다
// join을 사용해서 array 배열에 새로운 문자열이 넣어진다
// number 타입으로 변환해서 리턴한다


function solution(s) {
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;

    for(let i=0; i< nums.length; i++) {
        let array = answer.split(nums[i]);
        answer = array.join(i);
    }
    return Number(answer);
}