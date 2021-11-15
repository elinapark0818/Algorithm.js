// 내가 푼 문제 & 수도코드
function solution(new_id) {
    //     1. 영문자를 소문자로 바꾼다  toLowerCase()
    //     2. 영문자와 '_' (\w), '-', '.' 를 대응해서 문자열 전체에서 해당 조건을 제외한 모든 문자($#^ 등)를 제거한다  /[^\w\.\-]/g, ''
    //     3. '.'가 2개 이상이면 '.'으로 바꾼다  /[\.]{2,}/g, '.'  {2,} = 2개이상 
    //     4. 문자열의 처음과 끝이 '.'일 경우 제거한다  /^\.|\.$/g, ''
    //     5. 문자열이 ''일 경우 'a'로 바꾼다  /^$/, 'a'
    //     6. 문자열의 길이가 16이상이라면(굳이 조건을 안걸어도 될 것 같다), index 0부터 15까지로 자른 다음 .slice(0, 15), 마지막 문자가 '.'이라면 제거한다  /\.$/, '' 
    //     7. 문자열의 길이가 2이하라면 목표 문자열의 길이를 3으로 하고, 길이가 3이될때까지 마지막 문자를 끝에서부터 반복해서 할당한다    padEnd(3, new_id[new_id.length - 1])
    new_id = new_id
                .toLowerCase()
                .replace(/[^\w\.\-]/g, '')
                .replace(/[\.]{2,}/g, '.')
                .replace(/^\./, '')
                .replace(/\.$/, '')
                .replace(/^$/, 'a')
                .slice(0, 15).replace(/\.$/, '')
    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    }
    return new_id;
}

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
string.toLowerCase();
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 정규표현식을 사용해서 알바벳 소문자, 숫자, '_'를 바꾼다. replace() 사용
string.toLowerCase().replace(/[^\w\.\-]/g,'');
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
string.toLowerCase().replace(/[^\w\.\-]/g,'').replace(/[\.]{2,}/g,'.');
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
string.toLowerCase().replace(/[^\w\.\-]/g,'').replace(/[\.]{2,}/g,'.').replace(/^\./,'').replace(/\.$/,'');
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
if (!new_id) { new_id = 'a'; }
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
if (new_id.length >=16) { new_id = new_id.slice(0, 15).replace(/\.$/,''); }
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다. 
// padEnd() 목표 문자열의 길이를 구할 수 있다.
if (new_id.length <= 2) { new_id = new_id.padEnd(3, new_id[new_id.length - 1]); }


// padEnd() : 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환한다. 채워넣기는 문자열의 끝부터 적용된다.
const str = "Hi, I an elina";  // 문자열의 길이가 14
console.log(str.padEnd(20, '-'));   
// Hi, I an elina------ 문자열의 길이가 20이면서 남은 공간이 뒤부터 '-'로 채워졌다.
console.log(str.padEnd(5));
//  목표 문자열의 길이가 기존 길이보다 작을 경우 기존 문자열이 출력된다.
// Hi, I an elina   기존 문자열이 출력되었다.


// 다른 풀이 : 정규식과 삼항연산자를 활용한 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1. new_id 에 있는 영문자를 소문자로 치환한다
        .replace(/[^\w-_.]/g, '') // 2. 영문자와 숫자 '-'를 대응해서(\w) 전역을 조회하고(\g), ''로 바꾼다?
        .replace(/\.+/g, '.') // 3. 문자 그대로의 '.'을 대응해서 '.'으로 바꾼다?
        .replace(/^\.|\.$/g, '') // 4. '.'이 처음으로 시작할 때 또는 '.'이 전역의 마지막으로 끝날 때를 대응해서 ''로 바꾼다?
        .replace(/^$/, 'a') // 5. 빈 문자열이라면 'a'로 바꾼다
        .slice(0, 15).replace(/\.$/, ''); // 6. 문자열을 index 0 ~ 15 전 까지 자르고, '.' 과 마지막에 있는 ','를 ''로 바꾼다?
    const len = answer.length;  // 문자열의 길이를 변수 len에 할당한다
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); 
    // len이 2보다 크다면 answer 를 리턴하고, 그렇지 않을 경우 answer의 마지막 문자열을 길이가 3이 되게끔 반복한다
}

// repeat() : 문자열을 주어진 횟수만큼 반복해 붙힌 새로운 문자열을 반환한다
// 반복 횟수는 양의 정수여야 한다
// 반복 횟수는 무한대보다 작아야 하고 최대 문자열 크기를 넘어서는 안된다
const str = "Hey~!";
console.log(str.repeat(3));  // Hey~!Hey~!Hey~!

// charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환한다
const str = 'LOVE';
console.log(str.charAt());   // L
console.log(str.charAt(0));  // L
console.log(str.charAt(1));  // O
console.log(str.charAt(2));  // V
console.log(str.charAt(3));  // E

// 문자열의 마지막 인덱스 = str.length-1

const str = 'HELLO';
console.log(str.charAt(str.length-2));  // L