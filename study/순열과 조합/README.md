# 순열(nPr)과 조합(nCr)

## 1. 순열이 되기 위한 조건

    1. 대상 : 서로 다른 n개
    2. 개수 : r개
    3. 중복 : X
    4. 순서의 구분 : O

### 다중for문 순열

```jsx
function forLoop() {
  let result = [];
  let lookup = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (i === j || j === k || k == i) {
          continue;
        }
        result.push([lookup[i], lookup[j], lookup[k]]);
      }
    }
  }
  return result;
}
```

### 재귀 순열

```jsx
let result = [];

function recLoop(lookup = [1, 2, 3], num = lookup.length, bucket = []) {
  if (num === 0) {
    result.push(bucket);
  }
  for (let i = 0; i < lookup.length; i++) {
    let newArr = [...lookup];
    recLoop(newArr, num - 1, bucket.concat(newArr.splice(i, 1)));
  }
}

recLoop();
console.log(result);
```

## 2. 조합이 되기 위한 조건

    1. 대상 : 서로 다른 n개
    2. 개수 : r개
    3. 중복 : X
    4. 순서의 구분 : X

```jsx
// 3C2
function forLoop() {
  let result = [];
  let lookUp = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      result.push([lookUp[i], lookUp[i]]);
    }
  }
  return result;
}
```

### 조합 재귀

```jsx
// 3 개 중 2를 뽑아서 조합을 재귀로 만들기
let result = [];

function recLoop(lookup = [1, 2, 3]) {
  if (lookup.length === 2) {
    return result.push(lookup);
  }
  for (let i = 0; i < lookup.length; i++) {
    let newArr = [...lookup];
    newArr.splice(i, 1);
    recLoop(newArr);
  }
}

recLoop(2);
console.log(result);
```

## 3. 중복 순열이 되기 위한 조건

    1. 대상 : 서로 다른 n개
    2. 개수 : r개
    3. 중복 : O
    4. 순서의 구분 : O

### 다중for문 중복순열

```jsx
function forLoop() {
  let result = [];
  let lookup = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    let pick1 = lookup[i];
    for (let j = 0; j < 3; j++) {
      let pick2 = lookup[j];
      for (let k = 0; k < 3; k++) {
        let pick3 = lookup[k];
        result.push([pick1, pick2, pick3]);
      }
    }
  }
  return result;
}
```

### 재귀 중복순열

```jsx
let result = [];
function recLoop(lookup = [1, 2, 3], bucket = []) {
  if (bucket.length === 3) {
    return result.push(bucket);
  }
  for (let i = 0; i < lookup.length; i++) {
    recLoop(lookup, bucket.concat(lookup[i]));
  }
}

recLoop();
```
