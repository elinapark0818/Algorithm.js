// * elina

const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  // 오름차순 정렬하기
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  for (let i = 0; i < base.length; i++) {
    if (base[i] === sample[0]) {
      // 같은 숫자를 없애주게 된다.
      sample.shift();
    }
  }
  // base[i]와 sample[i]가 같으면 다 없어지니까 빈 배열이 될거다.
  if (sample.length === 0) {
    return true;
  }
  // sample 에서 없어지지 않은건, base에 없는 요소를 갖고 있다는 의미니까 false
  return false;
};

// * OverFlowBIN

const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  if (sample[0] > base[base.length - 1] || base[0] > sample[sample.length - 1])
    return false;

  let result = true;
  for (let i = 0; i < sample.length; i++) {
    for (let n = i; n < base.length; n++) {
      if (sample[i] === base[n]) {
        result = true;
        break;
      }
      result = false;
    }
  }

  return result;
};

// * happy5happy5

const isSubsetOf = function (base, sample) {
  let baseArr = [...base];
  let sampleArr = [...sample];

  baseArr.sort((a, b) => a - b);
  sampleArr.sort((a, b) => a - b);

  let idx = 0;
  let checker;

  for (let i = 0; i < sampleArr.length; i++) {
    checker = baseArr.indexOf(sampleArr[i], idx);
    if (checker === -1) {
      return false;
    } else {
      idx = checker;
    }
  }
  return true;
  //base 와 sample 크기가 각 7만이고 부분집합이 맞다면 28만줄만 읽으면 완성되는 코딩 내 노트북을 무시하지마라

  // return sample.every(x=>base.includes(x))
  // 속도 상관없이 라이브러리 이용한 간단한 코딩

  // let baseArr=[...base]
  // baseArr.sort((a,b)=>a-b)
  // let sampleArr=[...sample]
  // sampleArr.sort((a,b)=>a-b)
  // let checker=[]
  //   for(i=0;i<sample.length;i++){
  //   if(   baseArr.indexOf(sample[i]) !==-1   ){
  //     checker.push(true)
  //     baseArr.splice( baseArr.indexOf(sample[i]),1)
  //   }else return false
  //   }
  //   if(checker.length===sampleArr.length)return true
  //   else return false
  //  처음부터 끝까지 정직하게 모두 검색하면서 완료된 인덱스 삭제
};
