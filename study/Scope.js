// 스코프(Scope, 유효범위)
// 스코프는 참조 대상 식별자를 찾아내기 위한 규칙이다

const str = "Global Elina";

function foo() {
  const str = "Local Elina";
  console.log(str);
}

foo(); // Local Elina
console.log(str); // Global Elina

// 위 예제에서 전역에 선언된 변수 str은 어디에든 참조할 수 있다.
// 하지만, 함수 foo() 내에 선언된 변수 str은 함수 내부에서만 참조할 수 있고, 함수 외부에서는 참조할 수 없다.
// 스코프는 식별자 이름의 충돌을 방지한다.

// 전역 스코프 (Global Scope)
// 지역 스코프 (Local Scope of Function-level scope)

// 전역 변수 (Global Variable)
// 지역 변수 (Local Variable)

// 변수는 선언 위치(전역 or 지역)에 의해 스코프를 가진다.
// 즉, 전역에서 선언된 변수는 전역 스코프를 갖고, 지역에서 선언된 변수는 지역 스코프를 갖는다.

// 전역 스코프를 갖는 전역 변수는 코드 어디에서든지 참조할 수 있다.
// 지역 스코프를 갖는 지역 변수는 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

// 블럭 스코프(Block-level scope)
// 코드 블럭({})내에서 유효한 스코프를 의미한다.
// 유효하다는 것은 "참조(접근) 할 수 있다"라는 뜻이다.

// 함수 스코프(Function-level scope)
// 함수의 코드 블럭({})내에서 선언된 변수는 함수 코드 블럭내에서만 유효하다
// 함수 외부에서는 유효하지 않다.(참조(접근)할 수 없다.)

// let 을 사용하면, 블록 스코프를 사용할 수 있다.

// 전역 변수를 자주 사용하면 변수 이름이 중복될 수 있고,
// 의도하지 않은 재할당으로 상태변화가 발생하여
// 코드를 예측하기 어렵게 만들 수 있으니, 사용을 자제하는 게 좋다.

// 비 블럭 스코프(Non Block-level scope)
// 함수 밖에서 선언 된 변수는 코드 블럭내에서 선언되었다 할 지라도 모두 전역 스코프를 갖는다.
if (true) {
  var num = 5;
}
console.log(num);

// 함수 스코프(Function-level scope)
// JavaScript는 함수 스코프를 사용한다.
// 즉, 함수 내에서 선언된 매개변수와 변수는 함수외부에서는 유효하지 않다.
// 따라서, 변수 b는 지역변수이다.
const a = 10;

(function () {
  const b = 20;
})();

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined

// 전역 변수 c와 지역 변수 c가 중복 선언되었다.
// 전역 영역에서는 전역 변수만 참조 가능하고,
// 함수 내 지역 영역에서는 전역과 지역 변수 모두 참조할 수 있다.
// 식별자의 이름이 동일한 경우 지역변수를 우선 참조한다.
const c = "Global";

function foo() {
  const c = "Local";
  console.log(c);
}

foo(); // Local
console.log(c); // Global

// 내부 함수
// 내부 함수는 자신을 포함하고 있는 외부 함수의 변수를 참조(접근)할 수 있다.

const d = "Global";

function outter() {
  // 내부함수를 포함하는 외부 함수
  const d = "Local";
  console.log(d);

  function inner() {
    // 내부 함수
    console.log(d); // Local
  }
  inner();
}

outter(); // Local
console.log(d); // Global

// 함수(지역) 영역에서 전역 변수를 참조할 수 있기 때문에 전역 변수의 값을 변경할 수 있다.
var e = 50;

function include() {
  e = 100;
  console.log(e);
}

include(); // 100
console.log(e); // 100

// 내부 함수의 경우, 전역 변수는 물론 상위 함수에서 선언한 변수에 접근과 변경이 가능하다.
const f = 10;

function outter() {
  const f = 50;
  console.log(f); // 50

  function inner() {
    const f = 200;
    console.log(f); // 200
  }
  inner();
}

outter(); // 200
console.log(f); // 10

// 중첩 스코프
// 가장 인접한 지역을 우선하여 참조한다.
const foo = function () {
  const a = 5,
    b = 10;
  const bar = function () {
    const b = 20,
      c = 50;
    // 이 시점에서 a = 5, b = 20, c = 50
    a += b + c;
    // 이 시점에서 a = 75, b = 20, c = 50
  };
  // 이 시점에서 a = 5, b = 10, c = not defined
  bar();
  // 이 시점에서 a = 75, b = 10
};

// 렉시컬 스코프 (Lexical Scope)
// 렉시컬 스코프는 함수를 어디서 호출하는지 가 아니라 어디에 선언하였는지에 따라 결정된다.
// JavaScript는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정된다.
// 함수를 어디에서 호출하였는지는 스코프 결정에 아무 영향을 주지 않는다.

const lexical = 5;

function foo() {
  const lexical = 50;
  bar();
}

// 함수 bar는 전역에 선언되었다. 따라서 함수 bar의 상위 스코프는 전역 스코프다.
function bar() {
  console.log(lexical);
}

foo(); // 5
bar(); // 5

// 암묵적 전역 = 선언되지 않은 식별자에 값이 할당 된 경우 전역 변수처럼 동작한다.
// num2는 선언하지 않은 식별자다. 하지만, 선언된 변수처럼 동작한다. 
// 이는 선언하지 않은 식별자에 값을 할당하면, 전역 객체의 property가 되기 때문이다.
// JavaScript는 'num2 = 20'을 'window.num2 = 20'으로 해석하여 property를 동적으로 생성한다.
// 결국 num2는 객체의 property가 되어 마치 전역 변수처럼 동작한다.
// 하지만, num2는 단지 전역 객체의 property로 추가되었을 뿐 변수가 아니다.
// 따라서 변수 호이스팅이 발생하지 않는다.

console.log(num1);
console.log(num2);

var num1 = 10;

function foo() {
  num2 = 20;  // 선언되지 않은 변수 num에 20이 할당되었다.
  console.log(num1 + num2);
}

foo(); // 30

// property 에 추가된 num2는 delete 연산자로 삭제할 수 있다.
// 전역 변수인 num1은 delete로 삭제할 수 없다.

console.log(window.num1); // 10
console.log(window.num2); // 20

delete num1;  // 전역 변수는 삭제되지 않는다.
delete num2;  // property는 삭제된다.

console.log(window.num1); // 10
console.log(window.num2); // 삭제되었다. undefined

// 전역 변수를 최소한으로 사용하는 방법

// 1. 전역변수 객체를 이용하기
const DATA = {};

DATA.base = {
  object: { a: 1, b: 2, c: 3 },
  array: [ 100, 200, 300 ],
  string: 'STR',
  number: 500,
  boolean: true
}
console.log(DATA.base.boolean);

// 2. 즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)를 이용하기
// 즉시 실행되고 이후 전역에서 바로 사라진다.
(function () {
  const DATA = {};

  DATA.base = {
    string: 'STR',
    number: 500,
    boolean: true
  };
  console.log(DATA.base.string);  // STR
}());

console.log(DATA.base.string);  // ReferenceError: DATA is not defined