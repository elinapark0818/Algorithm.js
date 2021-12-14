작은 조각으로 쪼개어 푸는 것은 분할 정복 알고리즘

### memoization

이전에 계산된 결과를 캐싱하여 함수의 성능을 높이려는 프로그래밍 기술

1. 메모이제이션은 이전 함수 호출의 결과를 캐싱하여 잠재적으로 성능을 향상시킬 수 있다.

2. 메모이제된 함수는 입력 인수로 인덱싱되는 캐시를 저장합니다. 캐시에 인수가 있으면 캐시된 값이 반환된다.
   그렇지 않으면 함수가 실행되고 새로 계산된 값이 캐시에 추가됩니다.

3. 인덱스로 사용하기 전에 객체 인수를 문자열화해야 합니다.

4. 참조 투명 기능에 메모이제이션을 자동으로 적용할 수 있습니다.

5. 메모이제이션은 자주 호출되지 않거나 빠르게 실행되는 기능에는 적합하지 않을 수 있습니다.

### memoization 특징

- 클로저
- 고차함수

### memoization 도움이 되는 경우

1. 비싼 함수 호출, 즉 무거운 계산을 수행하는 함수
2. 캐시된 값이 아무것도 하지 않는 것처럼 제한적이면서 매우 반복적인 입력 범위를 가진 함수
3. 반복 입력 값이 있는 재귀 함수
4. 특정 입력으로 호출 될 때마다 동일한 출력을 반환하는 함수

### 피보나치 수열을 구하는 함수에 memoization 적용하기

```
const fibonacci = (function() {
  const memo = {};

  function f(n) {
    const value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();
```

### memoization 함수형 접근

```
function memoizer(fun){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
          return cache[n]
        } else {
          let result = fun(n)
          cache[n] = result
          return result
        }
    }
}
```

### 동적 계획법(DP)과 memoization을 적용한 피보나치

```
function fibMemo(n, memo = []) {
    if(memo[n] !== undefined) return memo[n];

    if(n <= 2) return 1;

    let res = fibMemo(n-1, memo) + fibMemo(n-2, memo);

    memo[n] = res;

    return res;
}
```

### DP와 반복문 배열을 적용한 피보나치

```
function fibTab(n) {
    if(n <= 2) return 1;
    let fibNum = [0, 1, 1];

    for(let i = 3; i <= n; i++) {
        fibNum[i] = fibNum[i-1] + fibNum[i-2];
    }
    return fibNum[n];
}
```
