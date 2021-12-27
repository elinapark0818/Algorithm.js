function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am A`);
    }, 500);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am B`);
    }, 400);
  });
}

function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am C`);
    }, 300);
  });
}

function d() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am D`);
    }, 200);
  });
}

// Promise 인데, 동기적인 것처럼 작성된 것.(일반 함수를 실행하는 것처럼 보인다)
// 코드 가독성이 높아진다
const result = async () => {
  const one = await a();
  console.log(one);

  const two = await b();
  console.log(two);

  const three = await c();
  console.log(three);

  const four = await d();
  console.log(four);
};

result();
