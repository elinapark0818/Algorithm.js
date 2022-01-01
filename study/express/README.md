# Node.js express 프레임워크

## express install

`npm init`

`npm install express`

---

## Hello World 예제

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

- 터미널에서 node 실행하기

  `node app.js`

---

## express Routing

```js
app.METHOD(PATH, HANDLER);
```

- app은 인스턴스
- METHOD 는 HTTP request Method
- HANDLER 는 라우터가 일치할 때 실행되는 함수

```js
// - get
app.get("/", (req, res) => {
  res.send("GET 을 요청합니다!");
});

// - post
app.post("/", (req, res) => {
  res.send("POST 를 요청합니다!");
});

// - put
app.put("/", (req, res) => {
  res.send("PUT 을 요청합니다! ");
});

// - delete
app.delete("/", (req, res) => {
  res.send("DELETE 를 요청합니다!");
});
```

<img src="https://user-images.githubusercontent.com/74189121/147821046-7e66a7d5-4fd5-47ab-b680-6e43f8b15ffc.png">

<img src="https://user-images.githubusercontent.com/74189121/147821063-0d86e52c-caeb-41a7-af69-76fdae514035.png">

<img src="https://user-images.githubusercontent.com/74189121/147821081-736953ca-b041-4e2a-8ce9-ad086f38aff8.png">

## <img src="https://user-images.githubusercontent.com/74189121/147821094-97af6852-70e6-4da3-afc0-4025252634a7.png">

---

## express middleware 로그 출력

```js
const myLogger = (req, res, next) => {
  console.log("무조건 로그를 찍는다");
  next();
};

app.use(myLogger);
```

<img src="https://user-images.githubusercontent.com/74189121/147821542-b7cca9e7-d266-44ff-9ee5-e26a14ff972d.png">

# express middleware 요청시간 출력

```js
const reqTime = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

app.use(reqTime);

app.get("/", (req, res) => {
  const resText = `요청시간: ${req.reqTime}`;
  res.send(resText);
});
```

<img src="https://user-images.githubusercontent.com/74189121/147821801-64db886f-49a3-4cb5-b0e1-5e28a0a00437.png">

# express middleware 요청 마다 로그 출력

```js
app.use("/", (req, res, next) => {
  console.log("요청이 들어올때마다 실행되는 로그");
  next;
});
```

<img src="https://user-images.githubusercontent.com/74189121/147822546-783f84c9-db12-461c-9642-a3dde98353d8.png">
