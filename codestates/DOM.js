function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}
function DOM(arr) {
  // 힌트 : ul#container는 주어져 있습니다.
  // ul 태그로 이미 존재한다
  const container = document.querySelector("#container");

  // 배열의 요소를 전부 확인해서
  for (let i = 0; i < arr.length; i++) {
    // li 태그를 만들어주고
    const li = document.createElement("li");

    // 이름은 a 태그로 만들어주고
    const name = document.createElement("a");
    // 클래스를 name으로
    name.classList.add("name");
    // 이름의 내용은 공백을 두고 firstName이랑 lastName을 문자열로 넣어주고
    name.textContent = `${arr[i].firstName} ${arr[i].lastName}`;
    // 이름을 클릭하면 함수가 실행되게 이벤트리스너를 추가
    name.addEventListener("click", handleClick);

    // 나이는 div 태그로 만들어주고
    const age = document.createElement("div");
    // 클래스를 age로
    age.classList.add("age");
    // 배열에 있는 요소에 해당하는 나이를 할당
    age.textContent = arr[i].age;

    // li태그를 이름과 나이 클래스로 지정해서 container(ul)에 추가해주기
    container.append(li);
    li.append(name, age);

    // 핸들링 함수로 클릭되었을 때 printRole함수에 인자로 담아 실행시킨다
    function handleClick() {
      printRole(arr[i]);
    }
  }
}
