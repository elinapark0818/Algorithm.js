import { useEffect, useState } from "react";
import "./styles.css";
import { getProverbs } from "./storageUtil";
import LoadingIndicator from "./LoadingIndicator";

// AJAX 요청 보내기
// 외부 API 요청에 대한 응답이 느릴 수 있으니, 로딩화면을 구축하자!

export default function App() {
  const [proverbs, setProverbs] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);

  // 로딩 화면 구축! 로딩화면 상태처리
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("언제 effect 함수가 불릴까요?");
    setIsLoading(true);
    // 엔드포인트를 fetch!
    fetch(`http://http://localhost:3000/proverbs?q=${filter}`)
      .then((response) => response.json())
      .then((result) => {
        setProverbs(result);
        setIsLoading(false);
      });
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

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
      {isLoading ? <LoadingIndicator /> : <div>로딩 완료 화면</div>}
    </div>
  );
}

function Proverb({ saying }) {
  return <li>{saying}</li>;
}
