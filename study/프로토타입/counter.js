// todo: Singleton 패턴으로 구현한 counter

let counter = {
  value: 0,

  increase: function () {
    this.value++;
  },

  decrease: function () {
    this.value--;
  },

  getValue: function () {
    return this.value;
  },
};

counter.increase(); // +1
counter.increase(); // +1
counter.increase(); // +1
counter.decrease(); // -1

counter.getValue(); // 2
