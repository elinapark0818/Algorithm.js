function solution(participant, completion) {
    const total = participant.length; // 참가자 수를 토탈로 선언
    let answer = ''; // 완주하지 못한 참가자를 넣을 변수 선언

    participant.sort(); // 참가자 배열을 정렬한다
    completion.sort(); // 완주자 배열을 정렬한다

    for(let i=0; i<total; i++) {
        if(participant[i] !== completion[i]) { // 참가자와 완주자를 비교했을 때, 없으면 미완주자
            answer = participant[i]; // 미완주자를 토탈에 넣는다
            return answer;
        }
    }
}

//  sort() : 배열을 정렬한다

const numberArr = [5,3,2,1,6,9,0];

numberArr.sort();
console.log(numberArr); // [0, 1, 2, 3, 5, 6, 9]

const stringArr = ['alice', 'zflip', 'frank', 'cylon']
stringArr.sort();
console.log(stringArr); // ['alice', 'cylon', 'frank', 'zflip']

