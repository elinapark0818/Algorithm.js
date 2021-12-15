// 이용료 price
// 이용 횟수 count
// N번 이상 이용할 경우 price * N
// 내가 가진 돈 money
// 돈이 부족하지 않다면 0 리턴

// ? 예시 price = 3, money = 20, count = 4
// 1회 이용 시, money - price === 17
// 2회 이용 시, 17(money) - (price * count(2)) === 11
// 3회 이용 시, 11(money) - (price * count(3)) === 2
// ! 4회 이용 시, 2(money) - (price * 4) === -10
// todo 부족한 돈은 10이다. (절대값이 되겠군)

function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  return money >= 0 ? 0 : Math.abs(money);
}

// ? 가우스 공식
function solution(price, money, count) {
  const result = (price * count * (count + 1)) / 2 - money;
  return result > 0 ? result : 0;
}

// ! 가우스 공식(등차수열의 합 공식)
// 가우스가 10살 때, 선생님이 학생들을 조용하게 하기 위해
// 1부터 100까지 더하는 문제를 냈는데,
// 가우스가 순식간에 답을 제출해낸 공식이다.
// ? 1부터 100까지 더한다면 그에 역순인 100부터 1까지를 순서대로 더하고
// ? (1+100,2+99,3+98,4+97 ...)
// ? 그러면 각각 더한 101 이라는 숫자가 100개 나오게 되고
// ! 모두 더하면 10100인데(101이 100개니까),
// ? 실제 더하려고 했던 1부터 100까지의 수에서 한번 더 더해진 모양이 되니
// ? 10100 을 2로 나누면 5050.

// ? 가우스 공식 : n(x + y)/2
// 이 공식에서 n을 다시 x와 y로 구해서 x와 y로만 표현한 공식은
// ? ((y - x) + 1)(x + y) / 2
// todo : x와 y는 x < y 관계이다.
