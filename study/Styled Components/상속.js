import styled from "styled-components";
import React from "react";

const Thing = styled.div`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.apple {
    background: orange; // <Thing> tagged with an additional CSS class ".apple"
  }

  .banana & {
    border: 1px solid; // <Thing> inside another element labeled ".banana"
  }

  .blueberry {
    background-color: yellow; // an element labeled ".blueberry" inside <Thing> without ampersand(&)
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
