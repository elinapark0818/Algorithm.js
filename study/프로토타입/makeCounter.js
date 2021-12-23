// todo: 클로저 모듈 패턴으로 구현한 makeCounter

function makeCounter() {
  return {
    value: 0,
    increase: function () {
      // ? 메소드를 호출할 경우,
      // ? this는 makeCounter 함수가 리턴하는 익명의 객체이다.
      this.value++;
    },

    decrease: function () {
      this.value--;
    },

    getValue: function () {
      return this.value;
    },
  };
}

let counter1 = makeCounter(); // value: 0
counter1.increase(); // +1
counter1.getValue(); // 1

let counter2 = makeCounter(); // value: 0
counter2.decrease(); // -1
counter2.decrease(); // -1
counter2.getValue(); // -2
