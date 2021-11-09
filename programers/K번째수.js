// 임의의 배열 array
// [i, j, k] 를 원소로 가진 2차원 배열 commands
// commands의 모든 원소에 대해 array의 i번째 숫자부터 j번째 숫자까지 자르고
// 정렬했을 때, k번째 있는 숫자를 구하시오

function solution(array, commands) {
    const answer = [];
    for(let i=0; i<commands.length; i++) { 
        // commands의 원소 개수만큼 반복문 돌리기
        let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        // i번째 원소부터 j번째 원소까지 자르기
        slicedArray.sort((a,b) => a - b);
        // 자른 배열의 원소 정렬하기 (+compareFunction)
        answer.push(slicedArray[commands[i][2] - 1]);
        // 배열에 추가하기
    }
    return answer;
}

// sort() 는 compareFunction을 받는 method 기 때문에,
// 유니코드 코드 포인트에 따라 정렬된다
// 따라서, 오름차순 순서로 숫자를 비교하기 위해서는 아래의 조건으로 사용해야 한다.
// Array.sort((a,b) => a - b)

// 풀어서 코드를 작성하면 아래처럼 된다.
// function arraySort(a, b) {
//      return a - b;
// }

// Another solution 좀 더 직관적이다.

function solution(array, commands) {
    const answer = [];
    
    // 원소 i, j, k 선언하고 0을 할당한다
    let i = 0;
    let j = 0;
    let k = 0;
    
    // commands의 원소 개수만큼 반복문 돌리기
    for (let c=0; c<commands.length; c++) {

        // i를 commands 배열의 첫 번째 원소로 할당한다        
        i = commands[c][0];
        // j를 commands 배열의 두 번째 원소로 할당한다
        j = commands[c][1];
        // k를 commands 배열의 세 번째 원소로 할당한다
        k = commands[c][2];
        
        // i번째 원소부터 j번째 원소까지 자른다
        let sliced = array.slice(i-1, j);

        // 배열을 정렬한다
        let sorted = sliced.sort((a, b) => a - b);

        // k번째 원소를 호출(?) 한다
        answer.push(sorted[k-1])
    }
    return answer;
}

// Another solution

function solution(array, commands) {
    return commands.map(command => {
        const [i, j, k] = command;
        const newArray = array
            .filter((value, filterIndex) => filterIndex >= i-1 && filterIndex <= j-1)
            .sort((a,b) => a - b)
        return newArray[k-1]
    })
}

// Array.prototype.sort()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort