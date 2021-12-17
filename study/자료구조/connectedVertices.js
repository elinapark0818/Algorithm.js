function connectedVertices(edges) {
  let result = [];
  for (let edge of edges) {
    let li = edge;
    let flag = false;

    for (let el of result) {
      if (el.includes(edge[0]) || el.includes(edge[1])) {
        flag = true;
        if (el.includes(edge[0])) {
          el.push(edge[1]);
        } else {
          el.push(edge[0]);
        }
      }
    }
    if (flag === false) {
      result.push(li);
    }
  }

  let combine = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let nextArr = arr[i + 1] || [];
      let flag = false;

      for (let j = 0; j < nextArr.length; j++) {
        if (arr[i].includes(nextArr[j])) {
          flag = true;
        }
      }

      // 포함되어 있다면
      if (flag) {
        //서로 포함관계인 두 요소를 합치고
        result.push(arr[i].concat(nextArr));
        //합쳐졌으니 자리를 옮겨준다
        arr[i + 1] = arr[i + 2];
        //포함이 있는지 다시 확인.
        // 있다면 다시 포함
        // 없으면 그대로
        result = combine(result);
      }
      // 포함된게 아니라면
      else {
        result.push(arr[i]);
        if (i === arr.length - 1 && nextArr.length >= 1) {
          result.push(nextArr);
        }
      }
    }
    return result;
  };

  let answer = combine(result);
  let tempArr = answer.slice();

  for (let el of tempArr) {
    if (el === undefined) {
      answer.pop();
    }
  }

  return answer.length;
}
