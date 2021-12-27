## React

### props

컴포넌트를 불러올 때 key 가 없으면 에러메시지가 뜬다.
key를 인덱스로 설정했더니, 1부터 인덱스가 매겨졌다.
key 값을 설정해야 기존 값을 그대로 두고 원하는 곳에 내용을 삽입하거나, 삭제할 수 있다

```
function ArrList2() {
  const arr = [
    {
      id: 4,
      num: "1",
      text: "하나",
    },
    {
      id: 5,
      num: "2",
      text: "둘",
    },
    {
      id: 6,
      num: "3",
      text: "셋",
    },
    {
      id: 7,
      num: "4",
      text: "넷",
    },
  ];
  return (
    <div>
      {arr.map((i, index) => (
        // key 가 없으면 에러메시지가 뜬다.
        // key를 인덱스로 설정했더니, 1부터 인덱스가 매겨졌다.
        // key 값을 설정해야 기존 값을 그대로 두고 원하는 곳에 내용을 삽입하거나, 삭제할 수 있다
        <Num i={i} key={index} />
      ))}
    </div>
  );
}

function Num({ i }) {
  return (
    <div>
      <b>{i.num}</b>
      <br />
      <span>{i.text}</span>
    </div>
  );
}

export default ArrList2;
```

---

### useState

변경될 값을 설정할 때는 useState를 사용하자
useState 의 변수를 변경할 때 기존 변수값을 변경하면 안된다!
스프레드 문법을 사용하자

```
import React, { useState } from "react";

function Inputs() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  // 비구조화 할당을 통해 값을 추출한다
  const { id, password } = inputs;

  const onChange = (event) => {
    // 입력될 값(value)과 name을 event.target 에서 추출해 와서
    const { value, name } = event.target;
    // 기존의 객체를 수정하면 안된다.
    // 새로운 객체를 스프레드 문법으로 작성하고,
    // 변화를 준 것을 갱신될 함수에 넣어줘야 한다.
    setInputs({
      // 기존에 있던 input 객체를 복사해서 가져온 뒤
      ...inputs,
      // 새로 작성되는 값을 name 키를 가진 value 로 설정한다
      [name]: value,
    });
    // console.log(event.target.value); // 잘 가져오는 지 확인차 콘솔로그
  };

  const onReset = () => {
    setInputs({
      name: "",
      password: "",
    });
  };
  return (
    <div>
      <input
        name="id"
        placeholder="아이디"
        // input에 value 가 undefined 일 경우 처리를 해주자.
        value={id || ""}
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        // input에 value 가 undefined 일 경우 처리를 해주자.
        value={password || ""}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>아이디 : </b>
        {id}
        <br />
        <b>비밀번호 : </b>
        {password}
      </div>
    </div>
  );
}

export default Inputs;

```

## useEffect

1. 화면이 처음 떴을때 실행.
   - deps에 [] 빈배열을 넣을 떄.
   - life cycle중 componentDidmount처럼 실행
2. 화면이 사라질때 실행(clean up함수).
   - componentWillUnmount처럼 실행
3. deps에 넣은 파라미터값이 업데이트 됬을때 실행.
   - componentDidUpdate처럼 실행.

### 생명주기

- mount

1. props 로 받은 값을 컴포넌트의 로컬상태로 설정
2. 외부 API 요청(REST API 등)
3. 라이브러리 사용
4. setInterval 를 통한 반복작업 또는 setTimeout을 통한 작업 예약

- unmount

1. setInterval, setTimeout 을 사용하여 등록한 작업들 clear (=== clearInterval, clearTimeout)
2. 라이브러리 인스턴스 제거

---

## useRef

useRef 로 관리하는 변수는 값이 바뀌어도, 컴포넌트가 리렌더링되지 않는다.
useRef 로 관리하고 있는 변수는 설정 후 바로 조회할 수 있다!

```
import React, { useRef, useState } from "react";

function InputsUseRef() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const nameInput = useRef();
  const nickNameInput = useRef();

  const { name, nickName } = inputs;

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="별명"
        onChange={onChange}
        value={nickName}
        ref={nickNameInput}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickName})
      </div>
    </div>
  );
}

export default InputsUseRef;
```
