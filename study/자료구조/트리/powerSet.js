//

function powerSet(arr) {
  //check표시 해줄 배열
  let check = new Array(arr.length).fill(0);
  //모든 부분집합이 담길 배열이다.
  let powerSetArr = [];
  const dfs = (depth) => {
    //check에 1인 index와 같은 index에 있는 arr만 filter해서 넣어준다.
    if (depth === check.length) {
      powerSetArr.push(arr.filter((v, idx) => check[idx]));
    } else {
      //포함되는 경우
      check[depth] = 1;
      dfs(depth + 1);
      //포함되지 않는 경우
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return powerSetArr;
}
