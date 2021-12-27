import { useEffect, useState } from "react";
import "./styles.css";
import { getProverbs } from "./storageUtil";

// 장점 : HTTP 요청 빈도를 줄일 수 있다.
// 단점 : 클라이언트(브라우저)의 메모리 상에 많은 데이터를 갖게 되기 때문에 클라이언트의 부담이 늘어난다
export default function App() {
  const [proverbs, setProverbs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("언제 effect 함수가 불릴까요?");
    // 전체 목록 데이터를 불러온다
    const result = getProverbs();
    setProverbs(result);
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      필터
      <input type="text" value={filter} onChange={handleChange} />
      <ul>
        {proverbs
          // 불러온 목록 데이터에서 검색어를 필터링한다
          .filter((prvb) => {
            return prvb.toLowerCase().includes(filter.toLowerCase());
          })
          .map((prvb, i) => (
            <Proverb saying={prvb} key={i} />
          ))}
      </ul>
    </div>
  );
}

function Proverb({ saying }) {
  return <li>{saying}</li>;
}
