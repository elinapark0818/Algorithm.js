// Promise

const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
};

a().then((data) => {
  console.log(data);
});

b().then((data) => {
  console.log(data);
});

c().then((data) => {
  console.log(data);
});

d().then((data) => {
  console.log(data);
});
