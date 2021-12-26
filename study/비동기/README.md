## JavaScript의 비동기

특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고, 다음 코드를 먼저 실행하는 것

<br/>

### setTimeout()

Web API 의 한 종류로, 코드를 바로 실행하지 않고, 지정한 시간만큼 기다렸다가 로직을 실행한다.

```
const delay = (wait, callback) => {
  setTimeout(callback, wait)
}
```

```
setTimeout(() => {
  console.log('3초 뒤에 실행된 결과')
}, 3000)
```

<img src="https://user-images.githubusercontent.com/74189121/147409948-e4fd115a-dad9-4968-9522-b937fb1b68de.png">

<br/>

---

## 콜백지옥을 해결하는 방법 (Promise)

JavaScript 비동기 처리에 사용되는 객체이다.

<img src="https://user-images.githubusercontent.com/74189121/147410232-5ed9ce3c-4540-4461-b207-c432a8428093.png">

### Promise States

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

  ```
  new Promise((resolve, reject) => {

  })
  ```

- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과값을 반환해준 상태

  ```
  function getData() {
    return new Promise((resolve, reject) => {
      const data = 'A'
      resolve(data)
    })
  }

  getData().then((resolve) => {
    console.log(resolve)
  })
  ```

  <img src="https://user-images.githubusercontent.com/74189121/147410135-0230c7a1-6371-4ddf-b447-cd478deb5e8c.png">

- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

  ```
  function getData() {
    return new Promise((resolve, reject) => {
      reject(new Error("Request is failed"));
    });
  }

  getData().then().catch((err) => {
    console.log(err)
  });
  ```

  <img src="https://user-images.githubusercontent.com/74189121/147410204-c89fc4e1-48fd-401e-9485-1d8531f3bb37.png">

---

### Promise Chaining

여러개의 프로미스를 연결하는 것

```

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
})
.then((result) => {
  console.log(result);
  return result + 10;
})
.then((result) => {
  console.log(result);
  return result + 20;
})
.then((result) => {
  console.log(result);
});

```

  <img src="https://user-images.githubusercontent.com/74189121/147410323-4b9e9cb6-095c-4932-94d2-c060a6e2d21a.png">

### reject 의 경우, catch를 사용하도록 하자.

- catch를 안쓴 경우

  ```
  function getData() {
    return new Promise((resolve, reject) => {
      resolve('이행했다. resolve!');
      // reject는 안썼지롱
    });
  }

  getData().then((result) => {
    <!-- '이행했다. resolve!'가 콘솔로그로 출력된다 -->
    console.log(result);
    <!-- 에러던지기 -->
    throw new Error("에러메시지 던지기!");
  }, function(err) {
    console.log('then error : ', err);
  });
  ```

  <img src="https://user-images.githubusercontent.com/74189121/147410606-0feb103a-2338-4801-95ff-b439b88adc6b.png">

- catch를 사용한 경우

  ```
  function getData() {
    return new Promise((resolve, reject) => {
      resolve('이행했다. resolve!');
      // reject는 안썼지롱
    });
  }

  getData().then(function(result) {
    <!-- '이행했다. resolve!'가 콘솔로그로 출력된다 -->
    console.log(result);
    <!-- 에러던지기 -->
    throw new Error("에러메시지 던지기!");
  }).catch(function(err) {
    console.log('then error : ', err);
  });
  ```

  <img src="https://user-images.githubusercontent.com/74189121/147410620-f06451c1-7d1e-454a-98c1-95b2f0413423.png">

<b>더 많은 예외 처리 상황을 위해 가급적 catch()를 사용하자!</b>
