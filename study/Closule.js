// 클로저(Closure) : 함수와 어휘적 환경의 조합이다. 함수가 생성될 당시의 외부 변수를 기억하고, 생성 이후에도 계속 접근이 가능하다

// 어휘적 환경(Lexical Environment)
// 코드에서 변수를 찾을 때,
// 내부 어휘적 환경에서 찾고 없으면 외부 어휘적 환경에서 찾고
// 외부 어휘적 환경에서도 없으면 전역 어휘적 환경에서 찾는다.

// ! 스크립트 내에서 선언한 변수들이 어휘적 환경에 등록된다

// 함수 선언문은 변수와 다르게 바로 초기화된다. (= addTen() 사용 가능)

// 이 행에서 변수 a는 선언과 할당된 값이 없기 때문에 사용 불가, addTen 이라는 function은 사용 가능
let a; // 변수 a가 선언되었지만 할당된 값이 없기 때문에 undefined로 사용 가능, addTen 이라는 function은 사용 가능
a = 10; // 변수 a가 선언도 되고 할당된 값이 있으니 a: 10 으로 사용 가능, addTen 이라는 function은 사용 가능 (= 전역 어휘적 환경)

function addTen(b) {
  console.log(a + b);
}
addTen(10); // 함수가 실행될 때, 새로운 어휘적 환경이 만들어진다 (b: 10) (= 내부 어휘적환경)

// 전역 어휘적 환경에서는 a: 1 과 addTen: function 이 담겨있는 공간
// 내부 어휘적 환경에서는 b: 10 이 담겨있는 공간
// 내부 어휘적 환경은 전역 어휘적 환경에 대한 참조를 갖는다.

function makeAdd(x) {
  return function (y) {
    return x + y;
  };
}

const A = makeAdd(5);
console.log(A(5)); // 10  A 함수가 생성된 이후에도 상위함수인 makeAdd의 x에 접근 가능

const B = makeAdd(10);
console.log(B(10)); // 20  B 함수가 생성된 이후에도 상위함수인 makeAdd의 x에 접근 가능
console.log(A(25)); // 30

// 다른 예시

function getCount() {
  // 외부 함수
  let num = 0; // 은닉화! 값이 저장된다. 바꿀 수 없다.

  return function () {
    // 내부 함수
    return num++;
  };
}

let count = getCount();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
