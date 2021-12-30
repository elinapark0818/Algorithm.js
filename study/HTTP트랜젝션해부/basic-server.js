const http = require("http");

const PORT = 4999;

const ip = "localhost";

const server = http.createServer();
server.on("request", (request, response) => {
  // todo : GET을 제외한 HTTP 메소드의 경우 OPTIONS preflight
  if (request.method === "OPTIONS") {
    // ! CORS 처리해주면서 성공코드를 응답헤더에 작성한다
    response.writeHead(200, defaultCorsHeader);
    // ? 응답 바디 작성
    response.end();
  }
  // todo : 요청 메소드가 POST 일때
  if (request.method === "POST") {
    let body = [];
    request
      .on("data", (chunk) => {
        // ! chunk : 데이터를 쪼개놓은 거. 임시 저장소 Buffer 담겨 있다.
        console.log(chunk); // <Buffer 22 66 64 22> 라고 터미널에 뜨더라
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        // todo : 대문자로 응답 하기
        if (request.url === "/upper") {
          // ? 응답헤더 성공코드 작성하면서 CORS 처리
          response.writeHead(200, defaultCorsHeader);
          // ? 응답바디 대문자로 변환해서 작성하기
          response.end(body.toUpperCase());
        }
        // todo : 소문자로 응답 하기
        else if (request.url === "/lower") {
          // ? 응답헤더 성공코드 작성하면서 CORS 처리
          response.writeHead(200, defaultCorsHeader);
          // ? 응답바디 소문자로 변환해서 작성하기
          response.end(body.toLowerCase());
        }
      });
  }
  // todo : 그 외의 경우 전부 404 에러 bad request 처리
  else {
    // ? 에러로 처리할건데,
    request.on("error", (err) => {
      // ? 일단, CORS 처리해서 응답 헤더 작성하고
      response.writeHead(404, defaultCorsHeader);
      // ? console.error 로 "bad request" 에러로 출력시키기
      console.error(err, "bad request");
    });
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  // todo : 어떠한 origin이라도 공유를 허락한다.
  // ! todo : Advanced
  // ? 1. npm install serve
  // ? 2. npx serve client (새로운 터미널창에서 클라이언트 서버를 연다)
  // ? 3. nodemon 설치하고(npm i nodemon --save), package.json 에서 "start": "nodemon server/basic-server.js",
  // ? 4. "Access-Control-Allow-Origin": "http://localhost:3000", 으로 설정 (기본 포트번호가 5050이다.)
  // ? 5. npm run start
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
