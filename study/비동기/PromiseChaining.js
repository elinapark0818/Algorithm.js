function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am A`);
    }, 100);
  });
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am B`);
    }, 200);
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
    }, 400);
  });
}

a()
  .then((data) => {
    console.log(data);
    return b();
  })
  .then((data) => {
    console.log(data);
    return c();
  })
  .then((data) => {
    console.log(data);
    return d();
  })
  .then((data) => {
    console.log(data);
  });
