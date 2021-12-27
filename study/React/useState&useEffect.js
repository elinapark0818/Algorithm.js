import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const proverbs = [
    "좌절감으로 배움을 늦추지 마라",
    "Stay hungry, Stay foolish",
    "Memento Mori",
    "Carpe diem",
    "배움에는 끝이 없다",
  ];
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx(idx === proverbs.length - 1 ? 0 : idx + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>명언 제조</button>
      <Proverb saying={proverbs[idx]} />
    </div>
  );
}

function Proverb({ saying }) {
  useEffect(() => {
    document.title = saying;
  });
  return (
    <div>
      <h3>오늘의 명언</h3>
      <div>{saying}</div>
    </div>
  );
}
