function solution(array, commands) {
    const answer = [];
    for(let i=0; i<commands.length; i++) { 
        // 총 배열의 원소만큼 반복문 돌리기
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        // i번째 원소부터 j번째 원소까지 자르기
        slicedArray.sort((a,b) => a - b);
        // 원소 정렬하기
        answer.push(slicedArray[commands[i][2] - 1]);
        // 배열에 추가하기
    }
    return answer;
}

// sort() 는 compareFunction을 받는 method 기 때문에,
// 유니코드 코드 포인트에 따라 정렬된다
// 따라서, 오름차순 순서로 숫자를 비교하기 위해서는 아래의 조건으로 사용해야 한다.
// Array.sort((a,b) => a - b)