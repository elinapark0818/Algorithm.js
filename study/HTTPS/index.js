// * ngrok 사용전 서버 만들기

const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    app.use("/", (req, res) => {
      res.send("Congrats! You made https server now :)");
    })
  )
  .listen(3001);

// * Hashing
// * 1. 모든 값에 대해 해시값을 계산하는데 오래걸리지 않아야한다.
// * 2. 최대한 해시 값을 피해야 하며, 모든 값은 고유한 해시값을 가진다.
// * 3. 아주 작은 단위의 변경이라도 완전히 다른 해시 값을 가져야 한다.

// * Hashing 기본 예제

// ? 넘긴 숫자만큼 위치가 바뀐 알파벳 반환
const shiftBy = (content, offset) => {
  return content
    .split("")
    .map((letter) => {
      return Spring.fromCharCode(letter.charCodeAt() + offset);
    })
    .join("");
};

shiftBy("a", 2); // 'c'
shiftBy("bicycle", 2); // 'dkezeng'
shiftBy("dkezeng", -2); // 'bicycle'

// ---

// * Salt
// * : 암호화해야 하는 값에 대해 어떤 '별도의 값'을 추가하여 결과를 변형하는 것

// * 1. 암호화 해놓는다면 해시된 결과는 늘 동일하다.
// ? 해시된 값과 원래 값을 테이블(레인보우 테이블)로 만들어서 decoding 해버리는 경우도 생긴다

// * 2. 원본값에 임의로 약속된 '별도의 문자열'을 추가하여 해시를 진행한다면
// ? 기존 해시값과 전혀 다른 해시값이 반환되어 알고리즘이 노출되더라도 원본값을 보호할 수 있도록 하는 안전장치가 된다

// * 3. 기존 : (암호화 하려는 값) => (Hash 값)
// ? Salt 사용 : (암호화 하려는 값) + (Salt 용 값) => (Hash 값)
