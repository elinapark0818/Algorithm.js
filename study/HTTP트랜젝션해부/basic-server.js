const http = require("http");

const PORT = 4999;

const ip = "localhost";

const server = http.createServer((request, response) => {
  // todo : GET을 제외한 HTTP 메소드의 경우 OPTIONS preflight
  // 메소드가 OPTIONS 일때 CORS 처리
  if (request.method === "OPTIONS") {
    // todo :
    // ? (응답 헤더작성) response 객체의 메소드 : writeHead(statusCode, object)
    // ? (응답 바디작성) response 객체의 메소드 : end([data], [encoding])
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }
  // 메소드가 POST 일 때
  if (request.method === "POST") {
    // url이 /upper 일 때
    if (request.url === "/upper") {
      let data = "";
      // todo : request 객체의 메소드
      // ? emitter.on(eventName, listener)
      // ? => 'data' 이벤트를 생성하고, listener 콜백함수
      // ! chunk = Buffer : 데이터를 전송할 때 임시로 보관하는 메모리 영역
      // ! => 브라우저에서 받은 JSON 파일을 임시로 저장하는 보관소
      request.on("data", (chunk) => {
        data = data + chunk;
      });
      // todo : response 객체의 메소드
      // ? writeHead(statusCode, object)
      // ? end([data], [encoding])
      request.on("end", () => {
        // ? : data에 저장된 문자열을 대문자로 변환
        data = data.toUpperCase();
        // ? 서버가 다시 브라우저에게 요청에 대한 응답을 보낸다
        response.writeHead(200, defaultCorsHeader);
        // ? : App.js 파일로 다시 돌아간다
        response.end(data);
      });
    } else if (method.url === "/lower") {
      let data = "";
      request.on("data", (chunk) => {
        data = data + chunk;
      });
      request.on("end", () => {
        // ? : data에 저장된 문자열을 소문자로 변환
        data = data.toLowerCase();
        // ? 서버가 다시 브라우저에게 요청에 대한 응답을 보낸다
        response.writeHead(200, defaultCorsHeader);
        // ? : App.js 파일로 다시 돌아간다
        response.end(data);
      });
    }
  }
  // todo : 그 외의 경우 전부 404 에러 bad request 처리
  else {
    request.on("error", (err) => {
      response.writeHead(404, defaultCorsHeader);
      console.error(err, "bad request");
    });
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

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
