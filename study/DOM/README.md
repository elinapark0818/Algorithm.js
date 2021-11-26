## 목록

- 개념 설명
- DOM 구조
- DOM 프로퍼티

---

<br/>

### DOM

유효한 웹페이지에 대한 인터페이스 이다.

DOM을 통해 웹페이지HTML를 조작할 수 있다.
DOM은 HTML의 구조와 내용을 객체 모델로 바꿔서 다양한 프로그램에서 쉽게 사용할 수 있도록 도와준다.

<br/>

### CSSOM

HTML 또는 XML로 작성된 문서에 적용할 스타일을 작성하기 위한 스타일 시트 언어이다.

<br/>

### node

DOM API 에 존재하는 모든 것들을 포괄하는 이름이 node 이다.

node 밑에 element가 있다

<br/>

### element(one specific type of node)

모든 element는 HTMLElement의 자식이다.
HTMLElement의 property를 똑같이 가지고 있다.

element 밑에 HTMLElement가 있다

<br/>

### NodeList

node 의 property 들을 말한다.
읽기 전용의 유사 배열 객체이다.

<br/>

### HTML Collection

element 만 담을 수 있다.
읽기 전용의 유사 배열 객체이다.

<br/>

### Critical Rendering Path

브라우저가 HTML 을 파싱해서 화면에 띄워주는 과정을 말한다.

1. HTML, CSS 를 파싱하여 브라우저 화면에 어떤 것을 보이게 할지 정한다

   - 이 과정에서 렌더트리(Render tree)가 만들어진다.
   - 렌더트리가 만들어지기 위해서는 CSSOM과 DOM이 필요하다

2. 브라우저가 렌더링한다

<br/>

---

<br/>

## DOM 의 구조

```
<html>
  <head>  // html의 node
    <title> head의 leaf <title>
  <head>
  <body>  // html의 node
    <h1> body의 leaf </h1>
    <div> body의 leaf </div>
  </body>
</html>
```

DOM 은 root 에서부터 여러 node 들이 뻗어 나오는 tree라고 생각할 수 있다.

때문에 DOM 의 객체구조는 node tree 라고 불린다.

<!-- ! DOM 은 원본 HTML 이 아니다. -->
<!-- ! 브라우저에 보여지는 것은 렌더트리 이다 -->

---

<br/>

## DOM 의 property

node 에 있는 DOM property 와
element 에 있는 DOM property 를 구분할 줄 알아야 한다.

- node 또는 NodeList

```
node.parentNode
node.firstChild
node.lastChild
node.ChildNodes
```

- element 또는 HTML Collection

```
node.parentElement
node.children
```
