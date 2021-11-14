function solution(lottos, win_nums) {
    let answer = 0;
    let zeroCount = 0;
    let result = [];
    //     lottos 배열의 길이만큼 (6회) 반복문을 돌린다. for (let i=0; i<lottos.length; i++)

    //     lottos[i]가 0이라면, 알 수 없는 숫자. 당첨일수도 있고 아닐수도 있다
    //     lottos[i] 가 0이라면, 임의의 변수에 0의 개수를 할당한다  (let zeroCount = 0)
    for(let i=0; i<lottos.length; i++) {
        if(lottos[i] === 0)
            zeroCount++;
    }
    //     순서에 관계 없이 동일한 숫자가 있는 지 확인한다. (이중반복문을 사용한다)
    //     lottos[i] 에 값이 0이 아닐 때 win_nums[j] 에 포함되어 있다면(lottos[i]===win_nums[j]) 맞춘 숫자(answer)의 개수가 증가한다
    for(let i=0; i<lottos.length; i++) {
        for(let j=0; j<win_nums.length; j++) {
            if (lottos[i] !== 0 && lottos[i] === win_nums[j]) {
                answer++;
                lottos[i] = 0;  //lottos[i] 에 값이 0이 아닐 때 조건을 충족시켜야 win_nums[j]와 비교 가능하기 때문에 0을 할당해준다
                break;
            }
        }
    }
    //     결과값의 0번째는 최고 순위를 할당한다   result[0] = getLank(zeroCount+answer)  알 수 없는 숫자일 때, 당첨이라고 가정하기 위해 당첨된 숫자와 더해준다.
    //     결과값의 1번째는 최저 순위를 할당한다   result[1] = getLank(answer)  당첨된 숫자만 확인한다.
    result[0] = getRank(zeroCount+answer)
    result[1] = getRank(answer)
    return result
}
//     임의의 함수에 아래와 같은 조건을 충족하는 결과를 리턴하게 한다.   function getLank()
//     당첨된 숫자가 6개라면, 1등
//     당첨된 숫자가 5개라면, 2등
//     당첨된 숫자가 4개라면, 3등
//     당첨된 숫자가 3개라면, 4등
//     당첨된 숫자가 2개라면, 5등
//     그 외의 경우는 전부 6등이다.
function getRank(num) {
    if(num === 6)
        return 1;
    else if(num === 5)
        return 2;
    else if(num === 4)
        return 3;
    else if(num === 3)
        return 4;
    else if(num === 2)
        return 5;
    else
        return 6;
}

// filter를 사용한 방법
function solution(lottos, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;

    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);

    return answer;
}