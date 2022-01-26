## mysql 연결하기

1. config 와 mysql을 연결해야 한다.
2. `.env` 에 mysql 비밀번호를 저장하기

`DATABASE_SPRINT_PASSWORD={mysql password}`

3. config > config.js 에서 `password: process.env.DATABASE_SPRINT_PASSWORD,` 로 처리되고 있는 걸 알 수 있다.

4. db > index.js 에서 config를 불러오고 mysql과 연결되어 있음을 알 수 있다.

```jsx
const mysql = require("mysql");
const dotenv = require("dotenv");
const config = require("../config/config");
dotenv.config();

const connection = mysql.createConnection(
  config[process.env.NODE_ENV || "development"]
);

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
```

---

## mysql 에서 cmarket_test 의 구조를 알아보자

1. 터미널에서 `mysql -u root -p` mysql 접속
2. `USE cmarket_test` 데이터베이스 사용하기 실행
3. `SHOW tables` 테이블들을 확인하자

   - items, order_items, orders, users 테이블이 있음을 확인할 수 있다.

4. 각 테이블의 구조를 확인하자

   - `DESCRIBE {table name}`

5. 각 테이블의 Field 및 PK를 체크해두자.

---

## express 라우터

- 각 테이블들을 확인했을 때, item과 관련된 테이블(items, order_items)과 order 관련된 테이블(orders, users)이 있는 걸 알 수 있었다.

1. route > item.js 에서 items 라우터는 get 요청에 대해서만 작성되어 있다.

- items 와 controller를 연결하기 위해서는 아래와 같이 되어 있다.

```js
router.get("/", controller.items.get);
```

2. controllers > index.js 를 확인해보니

   `items` 와 `orders` 에 대한 request 작성이 필요하더라

3. routes > orders.js 파일을 새로 만들자 (새로운 라우터 생성)

   - controllers를 불러오고
   - 라우터를 controller와 연결하면서 get, post 요청이 실행되게 작성하자

```jsx
const router = require("express").Router();
const controller = require("./../controllers");

router.get("/:userId/orders", controller.orders.get);
router.post("/:userId/orders", controller.orders.post);

module.exports = router;
```

4. routes > index.js 를 확인해보니 itemsRouter를 불러와서 사용하고 있더라

   - 새로 작성한 ordersRouter도 동일하게 불러와서 사용하자

```js
const express = require("express");
const router = express.Router();
const itemsRouter = require("./items");
// * 새로만든 userRouter 불러오기
const usersRouter = require("./users");

// TODO: Endpoint에 따라 적절한 Router로 연결해야 합니다.
router.use("/items", itemsRouter);
router.use("/users", usersRouter);

module.exports = router;
```

## controllers 작성하기

1. `items` 에 대해 작성되어 있는 req 컨트롤러를 살펴보자

```js
items: {
    get: (req, res) => {
      models.items.get((err, result) => {
        if (err) {
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
```

2. `orders`의 GET req 컨트롤러 도 동일하게 작성하면 되겠구나 싶은데

   - `const userID = req.params.userId` 가 확인된다.
     userId를 활용해야 할 것 같다

```js
get: (req, res) => {
      const userId = req.params.userId;
      // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
      models.orders.get(userId, (err, data) => {
        if (err) {
          res.status(500).send(`서버에러입니다. orders.get`);
        } else {
          res.status(200).json(data);
        }
      });
    },
```

3. `orders`는 post 요청에 대한 컨트롤러도 작성해야 한다

   - `const userId = req.params.userId;`
   - `const { orders, totalPrice } = req.body;`

4. userId, orders, totalPrice 를 이용해서 post 요청을 작성해야 한다.

- 요청하는 orders 가 없다면 클라이언트 에러

```js
if (!userId || !orders || !totalPrice) {
  return res.status(400).send(`클라이언트 에러`);
}
```

- models.order.post 요청이니까 성공하면 `201` 실패하면 `500` 서버에러

```js
models.orders.post(userId, orders, totalPrice, (err, data) => {
        if (err) {
          res.status(500).send(`서버 에러`);
        } else {
          res.status(201).json(data);
        }
      }
```

## models 작성하기

1. 쿼리문을 어디에 작성할까요?

   - 정답 : mysql

2. mysql이 연결되어 있는 곳은 어디일까요?

   - 정답 : db > index.js

3. 쿼리를 작성하기 위해서는 `쿼리문`과 `QueryFunction`을 작성해서 콜백함수를 실행해야 한다

4. `QueryFunction` 을 작성하는 방법

   - 정답 : db.query(쿼리문,(error, result) => { callback(error, result)})

### items - GET

```js
get: (callback) => {
  const queryString = `SELECT * FROM items`;
  db.query(queryString, (error, data) => {
    callback(error, data);
  });
};
```

### orders - GET

1. controllers > index.js 에서 작성해두었던
   `const userId = req.params.userId;`

2. 쿼리문을 작성해 봅시다.

   ```js
   const queryString = `SELECT orders.id, orders.created_at, orders.total_price,
                         order_items.order_quantity,
                         items.image, items.name, items.price FROM orders
                       INNER JOIN order_items ON orders.id = order_items.order_id
                       INNER JOIN items ON order_items.item_id = items.id
                       WHERE orders.user_id = ${userId}`;
   ```

3. `QueryFunction` 작성해야 겠지요?

   ```js
   db.query(queryString, (error, result) => {
     callback(error, result);
   });
   ```

### orders - POST

1. controller 에서 userId, orders, totalPrice 를 선언 및 구조분해할당 해두었습니다.

```js
post: (userId, orders, totalPrice, callback) => {
  // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
  let insert = `INSERT INTO orders (user_id, total_price) VALUES (${userId}, ${totalPrice})`;
  db.query(insert, (err, data) => {
    if (data) {
      const sql = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;
      const params = orders.map((obj) => [
        data.insertId,
        obj.itemId,
        obj.quantity,
      ]);
      db.query(sql, [params], (err, data) => {
        console.log(params);
        callback(err, data);
      });
    } else {
      callback(err, data);
    }
  });
};
```
