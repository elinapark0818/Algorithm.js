Math.random();

// Math.random() : 0과 1사이의 실수를 리턴한다.(1 미포함
console.log(Math.random());

// Math.floor(Math.random())
// 소수점을 다 떼버리기 때문에 결과는 0이다.
console.log(Math.floor(Math.random()));

// 0 부터 9 까지의 랜덤 숫자 출력하기
console.log(Math.floor(Math.random() * 10));

// 0 부터 99 까지의 랜덤 숫자 출력하기
console.log(Math.floor(Math.random() * 100));

// 0 부터 100 까지의 랜덤 숫자 출력하기
console.log(Math.floor(Math.random() * 101));

// min 부터 max 까지의 랜덤 숫자 출력하는 함수 (0~100)
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

random(0, 100);
