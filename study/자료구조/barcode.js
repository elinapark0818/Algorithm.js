function barcode(len) {
  //len만큼 문자열에 숫자를 추가한다.
  //len이 2이면 '1'+'1' 해보고 check돌려서 true가 나오면 '1'+'2'를 해본다
  //len이 3이면 '11' '12' '121'
  //len이 4이면 '11' '12' '121' '1211' '1212' '1213
  let visited = {};
  let result = "";
  result = makeCode(result, len, visited);
  console.log(visited);
  return result;
}
function makeCode(code, len, visited, i = 1) {
  if (code.length < len) {
    if (i > 3) {
      let lastNum = code.slice(-1);
      code = makeCode(code.slice(0, -1), len, visited, Number(lastNum) + 1);
    }
    for (; i <= 3; i++) {
      code += String(i);
      if (check(code, visited)) {
        //만들수 없는 바코드
        code = code.slice(0, -1); //마지막꺼를 다시 뺌
        if (i === 3) {
          //3까지 시도를 해봤지만 전부 안됐음
          let lastNum = code.slice(-1);
          code = makeCode(code.slice(0, -1), len, visited, Number(lastNum) + 1);
        }
      } else {
        //만들수 있는 바코드
        break;
      }
    }
    return makeCode(code, len, visited, 1);
  }
  return code;
}
function check(str, visited) {
  //let str = String(num)
  if (visited[str] === undefined) {
    let reversed = str.split("").reverse().join("");
    let halfLength = Math.floor(reversed.length / 2);
    for (let i = 1; i <= halfLength; i++) {
      if (reversed.slice(0, i) === reversed.slice(i, i + i)) {
        visited[str] = true;
        return true; //같은게 있다
      }
    }
    visited[str] = false;
    return false;
  } else {
    //방문 했던 곳
    return visited[str];
  }
}
