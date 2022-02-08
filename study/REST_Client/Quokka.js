const a = 1;
const user = {
  name: "Elina",
  nickname: "우오아아아",
  age: 30,
};

console.log(user);

const ageAfterNYear = (userAge, n) => {
  return userAge + n;
};

console.log(ageAfterNYear(user.age, a));
