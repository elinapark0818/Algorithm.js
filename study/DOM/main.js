let buttons = document.querySelectorAll("button");

let left = buttons[0];
let right = buttons[1];

left.onclick = handleClick;
right.onclick = handleClick;

function handleClick() {
  console.log(event);
  console.log(event.target);
  console.log(event.target.textContent);

  let currentBtn = event.target.textContent;
  console.log(currentBtn + "을 클릭하셨습니다.");
}
