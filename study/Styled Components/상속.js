import styled from "styled-components";
import React from "react";

const Thing = styled.div`
  color: blue; // 기본 컴포넌트(<Thing>)의 color는 blue

  &:hover {
    color: red; // 기본 컴포넌트(<Thing>) hover 시 color 가 red
  }

  & ~ & {
    background: tomato; // <Thing> 과 붙어있는 컴포넌트(<Thing>)의 배경색깔을 tomato
  }

  & + & {
    background: lime; // <Thing> 다음에 오는 컴포넌트(<Thing>)의 배경색깔을 lime
  }

  &.apple {
    background: orange; // className이 apple 인 컴포넌트(<Thing>)의 배경색깔을 orange
  }

  .banana & {
    border: 1px solid; // 부모 엘리먼트의 className이 banana인 컴포넌트(<Thing>) 은 border를 갖는다
  }

  .blueberry {
    background-color: yellow; // & 를 적용하지 않은 경우 스타일이 중첩되지 않는다.
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <Thing>기본 Thing Styled-Component입니다.</Thing>
      <Thing>
        Thing Styled-Component와 붙어 있는 Thing Styled-Component입니다. (& + &)
      </Thing>
      <Thing className="apple">
        Thing Styled-Component에 apple 클래스를 적용한 예제입니다. (&.apple)
      </Thing>
      <div>기본 div 태그입니다.</div>
      <Thing>Thing Styled-Component의 형제 컴포넌트입니다. (& ~ &)</Thing>
      <div className="banana">
        <Thing>
          banana 클래스를 가진 엘리먼트를 부모로 가진 Thing
          Styled-Component입니다. (.banana &)
        </Thing>
      </div>
      <Thing>
        <span className="blueberry">
          ampersand(&)를 사용하지 않은 예제입니다.
        </span>
      </Thing>
    </React.Fragment>
  );
}
