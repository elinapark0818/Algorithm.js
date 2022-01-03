import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#008cba" : "white")};
  color: ${(props) => (props.primary ? "white" : "#008cba")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #008cba;
  border-radius: 3px;
`;

const Green = styled(Button)`
  color: green;
  border-color: green;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "red"};
  border: none;
  border-radius: 3px;
  text-align: center;
`;

export default function StyledComponents() {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!!!</Title>

        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Green>Green</Green>
      </Wrapper>
      {/* inputColor 정의된게 없다면 기본값 color가 적용된다 */}
      <Input defaultValue="김코딩" type="text" />
      <Input defaultValue="박해커" type="text" inputColor="blue" />
    </div>
  );
}
