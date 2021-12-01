const Delay = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time);
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => Delay(cur));
}, Promise.resolve());

function Abong() {
  const names = [
    "탄지로",
    "무이치로",
    "하나코",
    "무이치로",
    "하나코",
    "하나코",
  ];
  const count = names.reduce(function (n, name) {
    name in n ? n[name]++ : (n[name] = 1);
    return n;
  }, {});

  count; // {탄지로: 1, 무이치로: 2, 하나코: 3}
}
