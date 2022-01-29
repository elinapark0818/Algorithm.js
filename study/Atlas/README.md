# mongoDB

NoSQL 을 사용하기 위해 Atlas Cluster 생성하기

## Create Organization

<img src="https://images.velog.io/images/elinapark/post/7496b759-9ebc-4f62-ad48-4bfee0ec81ef/1_Create_Organization.png">

`Create an Organization` 클릭 후
`MongoDB Atlas` 체크 확인 후 `Next` 클릭

<img src="https://images.velog.io/images/elinapark/post/c7456d4a-97e1-4ec5-bd3c-23f05aa73fd2/2_Create_Organization.png">

_(optional) 권한(Permissions)을 줄 멤버 추가하기_
`Create Organization` 클릭

---

## Create Project

<img src="https://images.velog.io/images/elinapark/post/0e0bb6af-a224-4b05-a688-4423d03be8d8/3_New_Project.png">

`New Project` 클릭

<img src="https://images.velog.io/images/elinapark/post/36d8438a-b4be-430e-8fcb-3b3762772a9f/4_Create_Project.png">

프로젝트 이름 설정 후, `Next` 클릭

<img src="https://images.velog.io/images/elinapark/post/bf2db1a5-9b93-4ea0-a806-2ba2f896182f/5_Create_Project.png">

_(optional) 권한(Permissions)을 줄 멤버 추가하기_
`Create Project` 클릭

---

## Deploy a cloud DB

<img src="https://images.velog.io/images/elinapark/post/394e0b5a-027f-4962-b046-91d1ea5bfdf1/6_Build_a_DB.png">

`Build a DataBase` 클릭

<img src="https://images.velog.io/images/elinapark/post/da64268f-2c02-48dc-8539-025787e8464e/7_Build_a_DB.png">

Shared 체크 `Create` 클릭

<img src="https://images.velog.io/images/elinapark/post/9219bfc8-c628-4ec1-9d6e-e839cd72723e/8_Build_a_DB.png">

무료인 지역 중 가까운 곳 설정

<img src="https://images.velog.io/images/elinapark/post/1626b793-a7f9-441f-9c87-6561ac55a3b5/9_Build_a_DB.png">

Cluster Tier 도 `Free forever` 인지 확인한 뒤
`Create Cluster` 클릭

---

## Security QuickStart

<img src="https://images.velog.io/images/elinapark/post/ce2e081b-a267-4135-add0-629aa99113af/10_QuickStart_Set_Connection.png">

Username & Password 설정 한 뒤
`Create User` 클릭

<img src="https://images.velog.io/images/elinapark/post/af37d573-2295-4ffc-91b9-e1ac6a9a8ff1/11_QuickStart_Set_IP.png">

`Add My Connect IP Address` 클릭

---

<img src="https://images.velog.io/images/elinapark/post/15693bfe-47e3-4170-a119-dce00c895e43/12_Connect.png">

Cluster0 오른쪽에 있는 버튼 `Connect` 클릭

---

<img src="https://images.velog.io/images/elinapark/post/b9787940-d338-4804-93dc-30677a435cc1/13_Connect%20to%20Cluster.png">

Quickstart 를 통해
`Add a connection IP address` 와 `Create a Database User` 설정이 이미 완료되었다.

Security > Database Access 에서 설정된 Username 조회 및 추가
=> `ADD NEW DATABASE USER`
Security > Network Access 에서 설정된 IP 조회 및 추가할 수 있다.
=> `ADD IP ADDRESS`

<img src="https://images.velog.io/images/elinapark/post/2a6821c0-54ab-4ccd-8777-20b4571a742b/14_Connect%20to%20Cluster.png">

`Connect with the MongoDB Shell` 클릭

<img src="https://images.velog.io/images/elinapark/post/1644403f-3afe-4f52-87c4-3b7532c298e5/15_Connect%20to%20Cluster.png">

`mongosh` 설치 후 버전을 확인하자.
`mongo --version`

<img src="https://images.velog.io/images/elinapark/post/203aaa54-80d7-4436-8b06-e8bf88a5c778/16_Connect%20to%20Cluster.png">

설치 후, `I have the MongoDB Shell installed` 클릭 및 명령어 확인

---

<img src="https://images.velog.io/images/elinapark/post/2a4b7a75-17ed-4294-9d81-f6d3675017d1/17_Connect_Complete.png">

터미널(ctrl + alt + t) 열어서 연결 명령어 입력 및 실행
