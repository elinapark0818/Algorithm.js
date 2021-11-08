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


// object 로 풀기
function solution(participant, completion) {
    const obj = {}
    for (let p of participant) {
        obj[p] = obj[p] ? obj[p] + 1 : 1;
    }
    for (let c of completion) {
        obj[c] -= 1;
    }
    for (let key in obj) {
        if (obj[key] == 1) {
            return key;
        }
    }
}


// fine 와 map 로 풀기
let solution = (participant, completion) => 
    participant.find(name => !completion[name]--, 
        completion.map(name => completion[name] = (completion[name]|0) + 1))



// map, set, get 으로 풀기
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}