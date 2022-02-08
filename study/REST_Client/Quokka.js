const a = 1;
const user = {
  name: "John",
  surname: "doe",
  age: 30,
};

console.log(user);

const ageAfterNYear = (userAge, n) => {
  return userAge + n;
};

console.log(ageAfterNYear(user.age, a));
