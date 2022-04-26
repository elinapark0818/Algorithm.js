### 이벤트 루프

이벤트루프는 자바스크립트 엔진 자체에 포함되어 있습니다.
자바스크립트 엔진은 Memory Heap 과 Call Stack 으로 구성되어 있다.
자바스크립트는 단일 스레드 프로그래밍 언어입니다.
한번에 하나씩 일처리를 진행한다는 뜻입니다.

Memory Heap : 메모리 할당이 일어나는 곳 (사용한 변수, 함수 등등)
Call Stack : 코드가 실행될 때 쌓이는 곳. stack 형태로 쌓임
Stack(스택) : 자료구조 중 하나, 선입후출(LIFO, Last In First Out)의 룰을 따른다.

Event Loop는 Call Stack과 Callback Queue의 상태를 체크하여,
Call Stack이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 밀어넣는다.
이러한 반복적인 행동을 틱(tick) 이라 부른다.

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

// 어떤 순서로 콘솔에 찍히는가?
script start
script end
promise1
promise2
setTimeout
```

### Microtask Queue

Event Loop는 우선적으로 Microtask Queue를 확인한다.
만약 Microtask Queue에 콜백이 있다면, 이를 먼저 Call Stack에 담는다.
그리고 Microtask Queue에 더이상 처리해야할 콜백이 없다면,
Task Queue에 확인 후 처리한다.

Promise의 then()의 콜백 은 Task Queue가 아닌 Microtask Queue에 담긴다.
따라서 위 코드에서는 우선순위가 높은 Microtask Queue부터 처리되므로,
Promise의 then() 콜백이 다 실행되고, setTimeout 콜백이 실행되는 거다.

### Animation Frames

requestAnimationFrame API가 실행되면 콜백이 Animation Frames으로 담긴다.
(setTimeout이 실행되면 타이머 완료 후 콜백이 Task Queue에 담기는 것 처럼...)

```js
console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function() {
  console.log("promise1");
}).then(function() {
  console.log("promise2");
});

requestAnimationFrame(function() {
    console.log("requestAnimationFrame");
})
console.log("script end");

// 콘솔 찍히는 순서
script start
script end
promise1
promise2
requestAnimationFrame
setTimeout
```

Microtask Queue > Animation Frames > Task Queue 순으로 실행된다. (크롬 기준)

### 정리

- 코드가 실행되면 `Call Stack`에 쌓이고, LIFO 순서로 실행됨
- 비동기 함수가 실행된다면, `Web API`가 호출된다.
- Web API는 비동기함수의 콜백함수를 `Callback Queue`에 넣음
- Promise는 `Microtask Queue`로, Timeout은 Task Queue에 넣음
- RequestAnimationFrame은 `Animation Frame`로 콜백함수를 넣는당
- Event Loop는 Call Stack이 빈 상태가 되면 콜백을 `Call Stack`으로 이동
- 콜백 이동 우선순위는 `Microtask Queue` > `Animation Frames` > `Task Queue` 이다.

이벤트루프를 설명하기 위해 마이크로태스크 큐와 애니메이션 프레임까지...질문해주셔서
다시 한번 깊이있게 검색해보았다!

> 참조: https://velog.io/@thms200/
