class Stack {
  //stack constructor를 생성합니다.
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    // ? size는 constructor 의 top을 의미한다.
    return this.top;
  }

  push(element) {
    // ? storage = { 1: 'element', 2: 'element', 3: 'element' ...} 이런식으로 추가가 된다.
    this.storage[this.top] = element;
    // ? push 되었다면, 사이즈가 1씩 증가한다.
    this.top += 1;
  }

  pop() {
    // ! top 이 0보다 작거나 같다면 아무 일도 일어나지 않게
    if (this.size() <= 0) {
      return;
    }
    // ! pop 은 마지막 요소를 제거하는 거니까
    // ! pop 할 엘리먼트 전까지의 요소를 저장해두고
    const result = this.storage[this.top - 1];
    // ! pop 한다
    delete this.storage[this.top - 1];
    // ! pop이 될 때마다 사이즈가 줄어드니까 1씩 빼기
    this.top -= 1;

    return result;
  }
}
