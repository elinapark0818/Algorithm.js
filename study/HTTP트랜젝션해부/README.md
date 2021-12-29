모든 node 웹서버 앱은 createServer를 써서 웹서버 객체를 만들어야 한다

## http.createServer([options][,requestlistener])

```js
const http = require("http");

const PORT = 5000;

const ip = "localhost";
```

createServer 가 반환한 server 객체는 EventEmitter 이다.
EventEmitter 에서 server 객체를 생성하고 리스너를 추가한다

```js
const server = http.createServer();
server.on("request", (request, response) => {
  // 여기에 작업
});
```

> 축약문법 사용

```js
const http = require("http");

const server = http.createServer((request, response) => {
  // 여기에 작업
});
```

### EventEmitter

모든 이벤트를 발생시키는 객체(object)는 EventEmitter의 인스턴스
즉, EventEmitter 는 인스턴스를 생성하는 클래스이다.

이 객체들은 하나 이상의 함수를 특정 event에 붙여서 실행될 수 있게 허락하는 .on() 함수를 가지고 있다.

이 객체들이 이벤트를 발생(emit)시키면 그 특정 event에 붙어있는 하나 이상의 함수들을 전부 비동기적으로 호출시킨다.
호출된 함수들로 인해 발생한 어떠한 리턴 값은 다 무시되고 버려진다.

```js
const EventEmitter = require("events");

// EventEmitter 클래스를 상속받는 MyEmitter 자식 클래스 생성
class MyEmitter extends EventEmitter {}

// MyEmitter 클래스를 통해 인스턴스 생성
const myEmit = new MyEmitter();

// 인스턴스에 .on('특정 이벤트의 이름', 이벤트에 붙는 함수) 함수 적용
myEmit.on("event", () => {
  console.log("특정 이벤트가 실행되는 것을 허락한다!");
});

// 이벤트에 붙는 함수 실행
myEmit.emit("event");
```

서버는 HTTP 요청마다 createServer에 전달된 함수가 한 번씩 호출된다.
HTTP 요청이 서버에 오면 node가 트랜잭션을 다루려고 request, response 객체를 전달하며 요청 핸들러 함수를 호출한다.
요청을 실제로 처리하려면 listen 메소드가 server 객체에서 호출되어야 한다.
(대부분은 서버가 사용하고자 하는 포트 번호를 listen에 전달하기만 하면 된다.)

```js
const {method, url} = request;

const {headers} = request;
const userAgent = headers['user-agent]
```

method는 일반적인 HTTP 메소드/동사 가 되고
url은 전체 URL에서 서버, 프로토콜,포트를 제외한 것으로 세번째 슬래시 이후 나머지 전부가 된다

request에 headers 라는 전용 객체가 있고,
클라이언트가 어떻게 헤더를 설정했는지에 관계없이 모든 헤더는 소문자로! 표현된다.

### 요청 바디

```js
let body = [];
request
  .on("data", (chunk) => {
    body.push(chunk);
  })
  .on("end", () => {
    body = Buffer.concat(body).toString();
  });
```

POST, PUT 요청을 받을 때, 요청 바디는 중요하다.
핸들러에 전달된 request 객체는 ReadableStream 인터페이스를 구현하고 있는데,
이 스트림의 'data'와 'end' 이벤트에 eventListener를 등록해서 데이터를 받을 수 있다.

각 'data' 이벤트에서 발생시킨 chunk는 Buffer이다.
chunk는 문자열 데이터이기 때문에 'data'를 배열에 담고
end 이벤트에서 이어붙인 다음 문자열로 만드는 것이 가장 좋다.

```js
(응답 헤더작성) response 객체의 메소드 : writeHead(statusCode, object)
(응답 바디작성) response 객체의 메소드 : end([data], [encoding])
```

```js
const defaultCorsHeader = {
  // todo : 어떠한 origin이라도 공유를 허락한다.
  "Access-Control-Allow-Origin": "*",
  // todo : 서버는 요청 메소드로 'GET, POST, PUT, DELETE, OPTIONS' 만 허락하겠다.
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  // todo : 요청 헤더를 포함 preflight 요청 응답에 사용되는 헤더로
  // ? 실제 요청 때 사용할 수 있는 HTTP 헤더의 목록을 나열한다.
  // ? => POST, PUT 같은 요청은 preflight로 먼저 서버로 보내고
  // ? => 서버의 응답에 따라 실제 요청 때 어떤 헤더를 사용할 수 있는지 그 목록을 나열해서 보내준다
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  // todo : 브라우저에서 보낸 preflight 에 대한 응답을 캐시할 수 있는 시간(초)
  "Access-Control-Max-Age": 10,
};
```
