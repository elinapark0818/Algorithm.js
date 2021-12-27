import { useEffect, useState } from "react";
import "./styles.css";
import { getProverbs } from "./storageUtil";

export default function App() {
  // 명언 목록
  const [proverbs, setProverbs] = useState([]);
  // 필터링할 문자열
  const [filter, setFilter] = useState("");
  // 카운트
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("언제 effect 함수가 불릴까요?");
    // filter 가 변할때(필터 안에 값이 입력될 때) effect 함수가 실행된다
    const result = getProverbs(filter);
    setProverbs(result);
    //  effect의 종속성 배열에는 filter만 있다
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // 아무리 카운트가 올라도 effect 함수는 실행되지 않는다.
  // 왜냐하면, effect 함수의 종속성 배열에 없기 때문이다
  const handleCounterClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      필터
      <input type="text" value={filter} onChange={handleChange} />
      <ul>
        {proverbs.map((prvb, i) => (
          <Proverb saying={prvb} key={i} />
        ))}
      </ul>
      <button onClick={handleCounterClick}>카운터 값: {count}</button>
    </div>
  );
}

function Proverb({ saying }) {
  return <li>{saying}</li>;
}
