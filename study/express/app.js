const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const jsonParser = express.json({
  strict: false,
});

app.use(jsonParser);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// lower
app.post("/lower", jsonParser, (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.json(req.body.toLowerCase());
});

// upper
app.post("/upper", jsonParser, (req, res) => {
  console.log(req.body);
  res.json(req.body.toUpperCase());
});

// - error
// app.use((req, res, next) => {
//   console.error(stack);
//   res.status(404).send("클라이언트 에러 발생! 404");
// });

// app.use((err, req, res, next) => {
//   console.error(err, stack);
//   res.status(500).send("서버에러 발생! http code: 500");
// });

app.listen(port, () => {
  console.log(`시작하면 출력되는 로그 http://localhost:${port}`);
});
