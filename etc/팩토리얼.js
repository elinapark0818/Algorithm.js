const factorial = (() => {
  let save = {};
  // * act()를 factorial에 담았다.
  const fact = (number) => {
    if (number > 0) {
      // * saved 에는 지속적으로 fact()에 number를 하나씩 줄인 값이 들어간다
      let saved = save[number - 1] || fact(number - 1);
      let result = number * saved;
      // * 최종적으로 saved에는 factorial(num-1)이 들어있다.
      save[number] = result;
      console.log(saved, result);
      return result;
    } else {
      return 1;
    }
  };
  return fact;
})();
