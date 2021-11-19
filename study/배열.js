// 배열인지 아닌지 확인하기 위해서는 Array.isArray() 
// 배열은 참조형 자료형이기 때문에 arr = [], arr !== [] 이다
// 길이에서 1을 뺀 값이 마지막 요소이다 length - 1
// 빈 배열인지 확인하기 위해서는 arr.length === 0
// 배열 안에서 더하는 함수를 만드는 방법은 arr.reduce((a, b) => (a + b))
// split 으로 정한 기준에 따라 끊고, 원하는 개수만큼 반환할 수 있다. 
// str.split(' ', str.length) 
// 문자열을 공백으로 끊고, 처음부터 문자열의 길이만큼의 개수를 문자열로 반환한다
// const newObject = [...object] 기존 object를 복제하여 할당 할 수 있다. 
// 숫자로 이루어진 배열의 요소 중 가장 큰 값을 구하기 위해서는  arr.reduce((a, b) => Math.max(a, b)) 또는 Math.max(...arr) 
// for of 로 간단하게 반복문 구현이 가능하다
// arr.slice(start, end(미포함)) 기존 배열을 복제하여 새로운 배열로 반환한다
// arr.slice() 배열을 그대로 복제해온다
// arr.slice(1) 인 경우 첫번째 요소를 제외한 배열을 만들 수 있다
// arr.slice(0, arr.length -1) 마지막 요소를 제외한 배열을 만들 수 있다
// arr.concat(anotherArr) 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
// push, pop, unshift, shift 는 기존 배열 내에서 요소를 추가/삭제 할 때 사용한다
// arr.join('') 배열을 또는 배열의 특정요소를 string 타입으로 반환한다


function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [0, 1]; // 0번째 피보나치 수는 0이고, 1번째 피보나치는 1이다.

    if (!num) {
        return [0]
    }
    
    for (let i=2; i<=num; i++) { 
      // 2번째 피보나치 수부터는! 반복문으로 구하자.
      result.push(result[i-2] + result[i-1]); // n-2번째 피보나치 수와 n-1번째 피보나치 수를 합한 결과다.
    }
    return result
}
