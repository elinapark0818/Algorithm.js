import { useEffect, useState } from "react";
import "./styles.css";
import { getProverbs } from "./storageUtil";

// 장점 : 클라이언트가 필터링 구현을 생각하지 않아도 된다
// 단점 : 빈번한 HTTP 요청이 발생해서, 서버가 필터링을 처리해야 하기 때문에 서버의 부담이 생긴다
export default function App() {
  const [proverbs, setProverbs] = useState([]);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("언제 effect 함수가 불릴까요?");
    // 외부에서 필터링된 데이터 목록을 불러온다
    const result = getProverbs(filter);
    setProverbs(result);
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
    </div>
  );
}

function Proverb({ saying }) {
  return <li>{saying}</li>;
}
