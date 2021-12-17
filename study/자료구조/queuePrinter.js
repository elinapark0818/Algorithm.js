// bufferSize : 작업 공간의 크기
// capacities : 작업 공간의 용량
// documents : 인쇄할 목록을 담은 배열

```예시 documents = [7, 4, 5, 6]  capacities = 10, bufferSize = 2
[#, #]
앞 요소(#)를 빼고, 7 을 추가, documents에 있는 7 삭제
time 1 , list 추가 [#, 7]
앞 요소(#)를 빼고 4를 넣으면 용량을 초과하니 대체값(#) 추가
time 2 , 앞으로 이동 [7, #]
앞 요소 처리(출력=프린트)하고, bufferSize 맞추기 위한 대체값(#) 추가
documents에 있는 4 삭제
time 3 , list 추가 [#, 4]
앞 요소(#) 빼고 5 추가
documents에 있는 5 삭제
time 4 , 앞으로 이동 list 추가 [4, 5]
앞 요소(4) 처리(출력=프린트)하고, 6을 추가하면 용량을 초과하니 bufferSize 맞추기 위한 대체값(#) 추가
time 5 , 앞으로 이동 [5, #]
앞 요소(5) 처리(출력=프린트)하고, 6 추가
documents에 있는 6 삭제
time 6 , list 추가 [#, 6]
앞 요소 처리, bufferSize 맞추기 위한 대체값(#) 추가
time 7 , 앞으로 이동 [6, #]
앞 요소(6) 처리(출력=프린트)하기
documents.length === 0
time 8 , 전부 인쇄 끝 [#, #]
```;
function queuePrinter(bufferSize, capacities, documents) {
  // 작업 목록을 담을 배열
  let list = [];
  // 초기값 1
  let time = 1;

  // documents 에 0번째 요소를 뺀 값을 넣자.
  let doc = documents.shift();

  // 남은 작업 공간에 0을 채워줌
  // fill 이 안됨..
  // list.fill(bufferSize.length - 1, 0);
  for (let i = 0; i < bufferSize - 1; i++) {
    list.push(0);
  }

  // 작업목록에 일단 추가를 한다.
  list.push(doc);

  // 타이머 : 1초에서 시작하고
  // 사이즈는 capacities 랑 비교해야 하니까 담아놓자
  let size = doc;

  // 일단
  while (size > 0) {
    size = size - list.pop();
    // documents 맨 앞에 요소를 빼주고, 작업 목록에 넣기
    doc = documents.shift();

    // 요소를 추가해도 최종 용량을 넘어가지 않을 때,
    if (size + doc <= capacities) {
      // 작업 목록 맨 앞에 현재 문서를 추가하고
      list.unshift(doc);
      // 사이즈랑 더한다. ===> 또 추가되더라도 최종용량이랑 비교하기 위해
      size += doc;
    }
    // capacities 보다 크면 앞으로 한 칸 이동한다.
    else {
      // 작업목록 맨 앞에 0을 추가하고
      list.unshift(0);
      // 작업 목록 맨 앞에 현재 문서를 추가하고
      documents.unshift(doc);
    }
    // 1초 증가한다
    time++;
  }
  return time;
}
