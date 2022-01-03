import React, { useRef } from "react";

const Focus = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleInput = (event) => {
    console.log(event.key, event);
    if (event.key === "Enter") {
      if (event.target === firstRef.current) {
        secondRef.current.focus();
        event.target.value = "";
      } else if (event.target === secondRef.current) {
        thirdRef.current.focus();
        event.target.value = "";
      } else if (event.target === thirdRef.current) {
        firstRef.current.focus();
        event.target.value = "";
      } else {
        return;
      }
    }
  };

  return (
    <div>
      <h1>타자연습</h1>
      <h3>각 단어를 바르게 입력하고 엔터를 누르세요.</h3>
      <div>
        <label>hello </label>
        <input ref={firstRef} onKeyUp={handleInput} />
      </div>
      <div>
        <label>world </label>
        <input ref={secondRef} onKeyUp={handleInput} />
      </div>
      <div>
        <label>codestates </label>
        <input ref={thirdRef} onKeyUp={handleInput} />
      </div>
    </div>
  );
};

export default Focus;
