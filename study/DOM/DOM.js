console.log(document.body);
console.dir(document.body);
console.dir(document.body.children);
document.body.children;
console.dir(document.body.childElementCount);
console.dir(document.body.children[1]);

let newsContents = document.body.children[1];
console.dir(newsContents);
console.dir(newsContents.parentElement);

// querySelectorAll() 유사 배열(Array-like Object), 배열처럼 반복문(for) 사용 가능
const oneTweet = document.querySelectorAll(".tweet");

// 옛날 방식
// const getOneTweet = document.getElementById("container");
// const queryOneTweet = document.querySelector("#container");
// console.log(getOneTweet === queryOneTweet); // true

// DOM 객체를 선택해서 조회하기
const container = document.querySelector("#container");
// 새로운 DOM 객체 만들기
const tweetDiv = document.createElement("div");
// 기존 DOM 객체에 붙이기
container.append(tweetDiv);
// textContent 로 객체 안에 문자열 입력하기
tweetDiv.textContent = "tweetDiv";
// classList 로 객체에게 클래스 부여하기
tweetDiv.classList.add("tweet");

// setAttribute 로 객체에게 클래스 부여하기
const oneDiv = document.createElement("div");
container.append(oneDiv);
oneDiv.setAttribute("class", "tweet");
oneDiv.textContent = "oneDiv";

// remove() 로 엘리먼트 삭제하기
tweetDiv.remove();

// innerHTML 로 빈 문자열을 할당해서 엘리먼트 지우기
// 보안 상 문제가 있으니, 다른 방법을 적용하자
// document.querySelector("#container").innerHTML = "";

// 반복문을 사용해서 firstChild가 있다면,
// removeChild()로 첫 번째 자식 엘리먼트 지우기
// h2 까지 다 지워진다.
// while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }

// 반복문을 사용해서 자식 엘리먼트가 1개보다 많다면
// 마지막 자식 엘리먼트 지우기
// while (container.children.length > 1) {
//   container.removeChild(container.lastChild);
// }

// div 의 클래스가 모두 tweet 이다
// 클래스에 해당하는 요소를 모두 조회한다
// 해당 요소를 지운다
const tweets = document.querySelectorAll(".tweet");

// forEach 로 tweet 클래스를 가진 엘리먼트 지우기
// tweets.forEach((tweet) => {
//   tweet.remove();
// });

// 반복문 for of 로 tweets에 해당하는 tweet 모두 지우기
// for (let tweet of tweets) {
//   tweet.remove();
// }

const paragraph = document.querySelector("p");

// NodeList 가 콘솔에 출력된다.
// HTMLElement 와 Text 가 있다.
//  p 태그 안에 자식노드로 있는 b 태그(HTMLElement)와 텍스트 노드가 있다고 나타낸다
console.dir(paragraph.childNodes);

// HTML Collection 이 콘솔에 출력된다.
// HTML element 만 나타낸다.
// p 태그 안에 있는 element 만 나타내므로 b 태그만(HTMLElement) 나타낸다
console.dir(paragraph.children);
