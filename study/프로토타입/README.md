# Prototype(프로토타입)

JavaScript는 프로토타입 기반 언어이다.
프로토타입은 원형 객체를 의미한다.

모든 객체들이 메소드와 속성들을 상속받기 위한 <b>템플릿</b>으로써 프로토타입 객체를 가진다는 의미이다.

## Object prototype

JavaScript에서는 객체를 상속하기 위해 프로토타입 방식을 사용한다.

- 프로토타입 체인이 동작하는 방식
- 이미 존재하는 생성자에게 메소드를 추가하기 위해 프로토타입 속성을 사용하는 방법

## Prototype chain(프로토타입 체인)

프로토타입 객체도 또 다시 상위 프로토타입 객체로부터 메소드와 속성을 상속받을 수 있고, 그 상위 프로토타입 객체도 마찬가지이다.

상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자인 prototype이라는 속성에 정의되어 있다.

## \_\_proto\_\_

JavaScript에서는 객체 인스턴스와 프로토타입 간에 연결이 구성되며,
이 연결을 따라 프로토타입 체인을 <b>타고 올라가며 속성과 메소드를 탐색</b>한다.

- 객체의 prototype 함수 : 개별 객체의 속성
- 생성자의 prototype 속성 : 생성자의 속성

<b>Object.getPrototypeOf(new Foobar()) 의 반환 값 === Foobar.prototype </b>

### 객체의 prototype 함수

`Object.getPrototypeOf(obj)` 또는
`deprecated 된 __proto__ 속성`으로 접근할 수 있다

### 예제

```
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const elina = new Person('Park', 'Elina', 30)

console.log(elina)
```

> 실행 결과 : 새로운 인스턴스 프로토타입 객체(elina)가 생성되었다

<img src="https://user-images.githubusercontent.com/74189121/147251383-4d135683-e578-4734-a13e-1cf915b70085.png">

1. 브라우저는 우선 elina 객체가 valueOf() 메소드를 가지고 있는지 체크한다
2. 없으므로, 프로토타입 객체(Person() 생성자의 프로토타입)에 valueOf() 메소드가 있는지 체크한다
3. 여전히 없으므로 Person() 생성자의 프로토타입 객체의 프로토타입(Object() 생성자의 프로토타입)에 메소드를 가지고 있는지 체크한다
4. 있다! 호출한다. -끝-

```
elina.valueOf(); // Person {firstName: 'Park', lastName: 'Elina', age: 30}
```

- 객체의 프로토타입 객체에 접근하기

```
elina.__proto__
```

> 실행결과 : elina의 상위 프로토타입 객체에 접근할 수 있다

<img src="https://user-images.githubusercontent.com/74189121/147252850-f3c77714-ce01-41b4-b5f0-788f8e36e963.png">

```
elina.__proto__.__proto__
```

> 실행결과 : 생성자의 프로토타입 객체의 프로토타입에서 valueOf() 메소드를 찾았다

<img src="https://user-images.githubusercontent.com/74189121/147252936-85f39c38-04fb-4c4c-9f82-a0f01f2da036.png">

---

### 프로토타입 속성 : 상속받는 멤버들이 정의된 곳

상속받는 멤버들은 prototype 속성(sub-namespace)에 정의되어 있다

즉, `Object.`로 시작하는게 아니라 `Object.prototype.`으로 시작하는 것들이다.

prototype 속성도 하나의 객체이고,
프로토타입 체인을 통해 상속하고자 하는 속성과 메소드를 담아두는 버킷으로 주로 사용되는 객체이다.

```
elina.prototype  // undefined
```

```
Person.prototype
```

> 실행결과 : Object.prototype. 관련 메소드들을 확인할 수 있다

<img src="https://user-images.githubusercontent.com/74189121/147253922-7a629fe9-ed8e-483c-b082-51356b4263f5.png">

Object 를 상속받은 객체에서 사용가능한 수 많은 메소드들이 Object의 prototype 속성에 정의되어 있다

### 생성자 속성

모든 생성자 함수는 constructor 속성을 지닌 객체를 프로토타입 객체로 가지고 있다.

constructor 속성은 원본 생성자 함수 자신을 가리키고 있다.

```
elina.constructor : 생성자 함수를 가리킨다
```

> 실행결과

<img src="https://user-images.githubusercontent.com/74189121/147254173-5375c1dd-eabd-4394-89e6-421122453501.png">

- constructor 로 접근해서 새로운 프로토타입 객체 생성하기

명시적인 생성자 함수를 예측할 수 없는 상황에서 인스턴스를 생성해야 한다면 유용하게 사용할 수 있는 방법이다.

```
const hoo = new elina.constructor('Lee', 'hoo', 29)
hoo.firstName
hoo.lastName
hoo.age
```

> 실행결과 : 새로운 인스턴스 프로토타입 객체가 생성되었다

<img src="https://user-images.githubusercontent.com/74189121/147254903-b371a342-6a42-47ab-a956-ecada87c507c.png">

### 프로토타입 수정하기

prototype 에 새 메소드를 추가하는 순간 동일한 생성자로 생성된 모든 객체에서 추가된 메소드를 <b>바로!!</b> 사용할 수 있다.

```
Person.prototype.farewell = function() {
  alert(this.firstName + '사요나라')
}

elina.farewell()
```

> 실행결과 : 생성자 함수에 추가한 메소드가 실행되어 알럿 발생

<img src="https://user-images.githubusercontent.com/74189121/147255405-a85d557c-8076-476d-8880-10788f53db0e.png">

### 정리

1. 생성자 정의
2. 프로토타입 객체 생성
3. 프로토타입 객체에 새로운 메소드 추가

프로토타입 객체는 모든 인스턴스에서 공유하기 때문에
정의하는 즉시 별도의 갱신 과정없이 접근이 가능하다

프로토타입에 상수를 정의하는 것은 가능하지만, 일반적으로 생성자에 정의하는 것이 좋다

- 속성은 생성자에게 정의하자
- 메소드는 프로토타입에서 정의하자
