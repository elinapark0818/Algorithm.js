import React, { useState } from "react";
import "./styles.css";

const currentUser = "오잉";

function Twittler() {
  const [tweets, setTweets] = useState([
    {
      uuid: 1,
      writer: "김코딩",
      date: "2020-10-10",
      content: "안녕 리액트",
    },
    {
      uuid: 2,
      writer: "박해커",
      date: "2020-10-12",
      content: "좋아 코드스테이츠!",
    },
  ]);

  const addNewTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  }; // 이 상태 변경 함수가 NewTweetForm에 의해 실행되어야 합니다.

  return (
    <div>
      <div>작성자: {currentUser}</div>
      {/* 버튼을 클릭하면 새로운 트윗이 추가된다 */}
      <NewTweetForm onButtonClick={addNewTweet} />
      <ul id="tweets">
        {tweets.map((t) => (
          <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
            {t.content}
          </SingleTweet>
        ))}
      </ul>
    </div>
  );
}

// 새로운 트윗을 추가하는 로직
// onButtonClick 이 발생하면 실행되도록
function NewTweetForm({ onButtonClick }) {
  const [newTweetContent, setNewTweetContent] = useState("");

  // 입력된 값으로 변경되도록
  const onTextChange = (e) => {
    setNewTweetContent(e.target.value);
  };

  // 새글 쓰기를 누르면 등록되도록 전송하기
  const onClickSubmit = () => {
    let newTweet = {
      // 랜덤한 uuid 값을 갖고
      uuid: Math.floor(Math.random() * 10000),
      // 작성자는 currentUser
      writer: currentUser,
      // 날짜는 현재 날짜인데 YYYY.MM.DD 까지 나오도록 substring
      date: new Date().toISOString().substring(0, 10),
      // 입력된 내용이 content 가 된다
      content: newTweetContent,
    };
    // ToDo: 여기서 newTweet이 addNewTweet에 전달되어야 합니다.
    // 새로운 트윗을 onButtonClick 에 담아서 실행하기!
    onButtonClick(newTweet);
  };

  return (
    <div id="writing-area">
      <textarea id="new-tweet-content" onChange={onTextChange}></textarea>
      <button id="submit-new-tweet" onClick={onClickSubmit}>
        새 글 쓰기
      </button>
    </div>
  );
}

function SingleTweet({ writer, date, children }) {
  return (
    <li className="tweet">
      <div className="writer">{writer}</div>
      <div className="date">{date}</div>
      <div>{children}</div>
    </li>
  );
}

export default Twittler;
