## Web API

웹 브라우저에서 제공하는 기능들을 말한다.
그런데 중요한 것은 이러한 요청들의 처리가 JavaScript 엔진의 쓰레드와는 다른 쓰레드들에서 이뤄진다는 점을 기억하자

JavaScript 엔진의 Stack에서 실행된 **비동기 함수가** 요청하는 **비동기 작업**에 대한 정보와 콜백 함수를 웹 API를 통해 **브라우저**에게 넘기면,
브라우저는 이러한 요청들을 **별도의 쓰레드에 위임**하게 되는 것이다.

그러면 그 쓰레드는 해당 요청이 **완료되는 순간** 전달받았던 콜백 함수를
JavaScript 엔진의 **Task Queue에 집어넣는다. **

- Web API는 브라우저에서 지원하는 API이다.

- DOM 이벤트, AJAX, setTimeout 등 비동기 작업들을 수행할 수 있는 API를 제공해서 HTTP 요청을 보내거나 DOM 이벤트를 듣거나, 실행을 지연시키는 작업을 수행한다.

- 크롬 브라우저 콘솔에 window를 입력하면 브라우저에 내장된 객체를 확인할 수 있는데 이것이 Web API이다.

- Web API를 이용해 백그라운드에서 비동기적으로 작업을 처리하고, 해당 작업을 마치면 콜 스택에 작업이 완료되었음을 알려주어 그 작업을 수행한다.

<img src="https://images.velog.io/images/elinapark/post/7bc55ba2-7642-4b87-b3d7-c4ff7db05b1e/%EB%9F%B0%ED%83%80%EC%9E%85.png">

JavaScript는 하나의 작업을 차례대로 처리하는 단일 쓰레드 프로그래밍 언어이므로
한 번에 하나의 명령문만 처리할 수 있다.

하지만, API에서 데이터를 요청하는 것과 같은 작업은
요청되는 데이터의 크기, 네트워크 연결 속도 및 기타요인에 따라 불확실한 시간이 걸릴 수 있다.

API 호출이 동기식으로 수행된 경우, 브라우저는 해당 작업이 완료될 때까지 사용자는 아무런 액션을 취할 수 없다. (=== 차단)

차단 동작을 방지하기 위해 브라우저 환경에는 JavaScript가 엑세스할 수 있는 비동기식 Web API가 많이 있다. (다른 작업과 병렬하게 실행될 수 있다.)

비동기식 Web API는 비동기 작업이 처리되는 동안 사용자가 브라우저에서 다른 작업을 계속 사용할 수 있도록 하기 때문에 유용하다.
<br/>

### Task Queue

JavaScript 엔진 자체에 포함되어 있다.
Task Queue는 웹 API를 처리하고 있던 쓰레드로부터 전달받은 콜백 함수들을
FIFO 구조로 저장하고 있는 일종의 큐(Queue)이다.

Task Queue는 콜백 함수를 의미하기 때문에 콜백 큐(Callback Queue)라고 부르기도 한다.
Task Queue에 저장된 콜백 함수들은 Stack이 비는 순간 Stack에 순서대로 푸시된다.
이러한 원리로 비동기 작업이 완료된 이후 콜백 함수가 실행되는 것이다.

만약 비동기 작업이 완료되어 Task Queue에 콜백 함수가 들어가더라도
**Stack이 비어있지 않다면 해당 콜백 함수가 바로 실행되지 못한다는 특징**이 있다.

- Web API에서 비동기 작업이 실행된 후 호출되는 콜백 함수가 대기하는 공간이다.

- 콜백 함수들은 쌓인 순서대로 실행되지 않고 우선순위에 따라 실행된다.

- Microtask Queue, Animation Frames 등 여러 개의 큐로 이루어져 있다.
  <br/>

### JavaScript 런타임 환경

자바스크립트 엔진은 싱글 스레드로 동작하기 때문에 비동기 작업을 지원하지 않는다.
따라서 비동기 처리를 위해서는 자바스크립트 엔진에 추가적인 요소를 구성하는데,
이를 자바스크립트 런타임이라 부른다.

대표적인 자바스크립트 런타임 환경에는 브라우저와 Node.js가 있다.
<br/>

### Event loop

> http://latentflip.com/loupe

Event loop는 JavaScript 엔진 자체에 포함되어 있다.
이벤트 루프는 매 순간 Stack이 비어있는지 확인을 해서 Stack이 비어있다면 Task Queue에 콜백 함수가 들어올 때까지 기다렸다가 첫 번째로 들어오는 콜백 함수를 Stack에 쌓는 역할을 한다.

```
while (queue.waitForMessage()) {
    queue.processNextMessage();
}
```

만약 스택이 비어있지 않다면 일반적인 방식으로 스택에서 함수의 호출을 처리하게 된다.
결국 이벤트 루프는 이름 그대로 **같은 작업을 무한히 반복하는 무한 루프**이다.
참고로 이렇게 매 순간 태스크 큐와 스택을 확인하는 작업을 틱(Tick)이라고 부른다.

- 끊임없이 콜 스택과 태스크 큐(task queue) 모니터링을 담당한다.

- 콜 스택이 비어있을 경우, 태스크 큐에 쌓여있는 작업들을 콜 스택에 전달하여 해당 작업이 처리되도록 전달한다.

- Web API가 일을 먼저 처리해도 콜 스택에 처리할 작업이 있으면 이벤트 루프는 태스크 큐의 작업을 콜 스택에 전달하지 않는다.

```
function first() {
  console.log(1)
}

function second() {
  console.log(2)
}

function third() {
  console.log(3)
}

first()
second()
third()

실행 결과
// 1
// 2
// 3
```

<br/>

### 비동기식 Web API 사용하기

```
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}

first()
second()
third()

실행 결과
// 1
// 3
// 2
```

JavaScript는 한 번에 하나의 명령문만 실행할 수 있으므로
특정 명령문을 언제 실행할 지 알려주는 이벤트 루프가 필요하다

```
function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 0)
}

function third() {
  console.log(3)
}

first()
second(third)

실행 결과
// 1
// 2
// 3
```

`1` 을 출력하고, 타이머가 완료된 후(0) `2` 를 인쇄하고 바로 `3` 인쇄

### 파멸의 피라미드

```
function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
      }, 500)
    }, 2000)
  }, 1000)
}

실행 결과
// 1
// 2
// 3
```

<br/>

### asynchronousRequest

```
function asynchronousRequest(args, callback) {
  if (!args) {
    return callback(new Error("삐빅삐빅! 에러발생! 에러를 던진다!"));
  } else {
    return setTimeout(
      () =>
        callback(null, { body: args + " " + Math.floor(Math.random() * 10) }),
      500
    );
  }
}

function callbackHell() {
  asynchronousRequest("First", function first(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(response.body);
    asynchronousRequest("Second", function second(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(response.body);

      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error);
          return;
        }
        console.log(response.body);
      });
    });
  });
}

callbackHell();
```

<img src="https://images.velog.io/images/elinapark/post/da97be4f-741e-4aee-b8e5-6af73b6ed6f0/11.png">

```
First 5
VM583:23 Second 9
VM583:26 Error: 삐빅삐빅! 에러발생! 에러를 던진다!
at asynchronousRequest (<anonymous>:3:21)
at second (<anonymous>:24:7)
at <anonymous>:5:29
```
