// 내가 해석한 문제 수도코드
//     아이디의 길이는 3<= 아이디의길이 <=15
//     아이디는 알파벳 소문자만 사용할 수 있다.
//     아이디에 알파벳 대문자가 있다면 해당 문자를 출력하면서 소문자로 바꿔야 한다
//     사용가능한 기호는 '-', '_', '.'
//     '.'는 연속해서 사용할 수 없다
//     '.'는 처음과 끝에 사용할 수 없다
//     먼저, 반복문으로 new_id의 길이를 확인한다

// function solution(new_id) {
//     var answer = '';
//     const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let toLower = ''
//     for (let i=0; i<new_id.length; i++) {
//         if (upper.includes(new_id[i]) ) {
//             toLower += new_id[i]
//             new_id[i] = new_id[i].toLowerCase()

//             for (let j=0; j<new_id; j++) {
//                 if (toLower.length >= 1) {
//                     toLower += new_id[j]
//                     new_id[i] = new_id[i].toLowerCase()
//                 }
//             }
//         } return `대문자 '${toLower[0]}'와 '${toLower[1]}'이 소문자 '${new_id[i]}'와 '${new_id[i]}'로 바뀌었습니다.`;
//     }
//     return answer;
// }

// 뭔가 풀리지 않아서, 풀이를 찾아보았다

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
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다. padEnd()
if (new_id.length <= 2) { new_id = new_id.padEnd(3, new_id[new_id.length - 1]); }

function solution(new_id) {
    new_id = new_id
        .toLowerCase()  // 1. new_id 에 있는 영문자를 소문자로 치환한다
        .replace(/[^\w\.\-]/g, '')  // 2. 영문자와 숫자 '-'와 '.'를 대응해서(\w) 전역을 조회하고(\g), ''로 바꾼다?
        .replace(/[\.]{2,}/g, '.')  // 3. '.'으로 시작하는 것이 2개일 때를 대응해서 '.'으로 바꾼다
        .replace(/^\./, '')     // 4. '.'을 제외하고 대응 했을 때 ','를 ''으로 바꾼다?
        .replace(/\.$/, '');    // 5. '.'을 대응하고, 마지막이 ','일때를 대응해서  ''으로 바꾼다
    if (!new_id) {
        new_id = "a";   // 6. new_id가 빈 문자열이라면 'a'를 할당한다
    }
    if (new_id.length >= 16) {  // 7. new_id의 길이가 16이상이라면
        new_id = new_id
            .slice(0, 15)   // 8. index 0~ 15까지 자르고
            .replace(/\.$/, '');    // 9. '.'과 마지막이 ','인 것을 ''으로 바꾼다
    }
    if (new_id.length <= 2) {   // new_id의 길이가 2이하라면
        new_id = new_id.padEnd(3, new_id[new_id.length - 1]);   //3이 될때까지 반복한다?
    }
    return new_id;
}

// 다른 풀이 : 정규식과 삼항연산자를 활용한 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1. new_id 에 있는 영문자를 소문자로 치환한다
        .replace(/[^\w-_.]/g, '') // 2. 영문자와 숫자 '-'를 대응해서(\w) 전역을 조회하고(\g), ''로 바꾼다?
        .replace(/\.+/g, '.') // 3. 문자 그대로의 '.'을 대응해서 '.'으로 바꾼다?
        .replace(/^\.|\.$/g, '') // 4. '.'이 처음으로 시작할 때 또는 '.'이 전역의 마지막으로 끝날 때를 대응해서 ''로 바꾼다?
        .replace(/^$/, 'a') // 5. 처음과 끝을 제외한 나머지 문자들을 대응해서 'a'로 바꾼다
        .slice(0, 15).replace(/\.$/, ''); // 6. 문자열을 index 0 ~ 15 전 까지 자르고, '.' 과 마지막에 있는 ','를 ''로 바꾼다?
    const len = answer.length;  // 문자열의 길이를 변수 len에 할당한다
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); 
    // len이 2보다 크다면, (answer와 len의 길이보다 1작은 값을 유니코드로 바꾼 값이 3에서 len값을 뺀 값이 될때까지 반복해서) answer에 더한다
}


// 정규식을 활용할 줄 안다면 쉽게 풀 수 있는 문제다.
// 나는 정규식을 잘 모른다

// 정규식이란? 정규식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴이다.
// 정규식을 만드는 방법은 2가지이다.
// 첫 번째 : '/'로 감싸서 사용한다.
const str = /ab+c/;
// 두 번째 : RegExp()로 호출한다
const str = new RegExp('ab+c');

// 정규식 패턴 작성하기
// 정규식 패턴은 단순 문자와 특수 문자의 조합으로 구성될 수 있다.

// \ : 백슬래시(\) 다음에 오는 문자는 특별하지 않고 문자를 있는 그대로 해석한다
// /문자*/ : 0개 이상의 '문자' 에 대응된다
// /문자\*/ : '문자*' 에 대응된다

// ^ : 입력의 시작 부분에 대응한다
// 예를들어 /^A/는 'Aa'에 있는 A와는 대응되지만, 'aA'에 있는 A와는 대응되지 않는다

// $ : 입력의 끝 부분에 대응한다
// 예를들어 /t$/는 'Tt'에 있는 t와는 대응되지만, 'tT'에 있는 T와는 대응되지 않는다

// * : 0회 이상 연속으로 반복되는 부분에 대응된다. {0,}와 같은 의미다
// 예를 들어 /ab*/ 는 'abbb'와 대응된다. 'aaccc' 에서는 'a'에 대응된다

// + : 1회 이상 연속으로 반복되는 부분에 대응된다
// 예를 들어 /a+/는 'a'에 대응되고, 'aaab' 에서는 'aaa'에만 대응된다

// ? : 0 또는 1회 등장하는 부분과 대응된다. {0, 1}과 같은 의미
// 예를들어 /e?le?/ 는 'angel'에서 'el'과 대응된다
// 예를들어 /e?le?/ 는 'angle'에서 'le'과 대응된다
// 예를들어 /e?/ 는 'lee'에서 'e'와 대응된다

// . : 개행 문자(줄바꿈)을 제외한 모든 단일 문자와 대응된다
// 예를들어 /.n/ 는 ' n, an, on, n '에서 'an'과 'on'에 대응되지만, ' n', ' n '에는 되응되지 않는다

// | : 또는 

// [:alnum:] : 영문자와 숫자를 뜻한다. [A-Za-z0-9]

// \w : 영문자와 숫자 그리고 밑줄 문자를 뜻한다. [A-Za-z0-9_]

// \W : 영문자와 숫자 그리고 밑줄 문자를 제외한 문자를 뜻한다. [^A-Za-z0-9_]

// [:alpha:] : 영문자를 뜻한다. [A-Za-z]

// [:upper:] : 알파벳 대문자를 뜻한다. [A-Z]

// [:lower:] : 알파벳 소문자를 뜻한다. [a-z]

// \d : 숫자를 뜻한다. [0-9]

// \D : 숫자를 제외한 문자를 뜻한다. [^0-9]

// [:blank:] : 공백과 탭 문자를 뜻한다. [\t]

// \b : 단어 사이의 경계를 뜻한다. [(?<=\W)(?=\w)|(?<=\w)(?=\W)]

