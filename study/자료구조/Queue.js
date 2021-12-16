class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    // 최종 길이에서 0번째 인덱스를 제외한 값이 사이즈
    return this.rear - this.front;
  }

  enqueue(element) {
    // 맨 처음에는 추가된 값이 없으니 사이즈가 0
    this.storage[this.rear] = element;
    // 추가되면 사이즈가 1씩 증가
    this.rear++;
  }

  dequeue() {
    // storage 안에 추가된 값이 있다면
    if (this.size() > 0) {
      // 삭제할 요소를 변수에 담고
      let result = this.storage[this.front];
      // storage의 0번째 인덱스를 삭제
      delete this.storage[this.front];
      // 0이 삭제된 다음, 1번째 인덱스를 삭제해야하니, front 에 1씩 증가
      this.front++;
      // 삭제된 요소를 리턴
      return result;
    }
  }
}
