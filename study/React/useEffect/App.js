import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Elina");

  useEffect(() => {
    console.log("렌더링 될때마다 실행되는 함수");
  });

  useEffect(() => {
    console.log("처음 한 번만 실행되는 함수");
  }, []);

  useEffect(() => {
    console.log("카운트 값이 업데이트 될 때만 실행되는 함수");
  }, [count]);

  useEffect(() => {
    console.log("이름이 바뀌었을 때만 실행되는 함수");
  }, [name]);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleChangeName = () => {
    setName("윤정이");
  };
  return (
    <div>
      <button onClick={handleAddCount}>카운트증가</button>
      <button onClick={handleChangeName}>이름 바꾸기</button>
      <h1>{count}</h1>
      <h1>{name}</h1>
    </div>
  );
}
