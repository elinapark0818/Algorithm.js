
Table teams {
  id INT PK
  name varchar
}

Table members {
  id INT PK
  name varchar
  age INT
  team_id INT
}

Ref: "teams"."id" < "members"."team_id"

-- 데이터베이스 생성

CREATE DATABASE Hoo

-- 테이블 생성

CREATE TABLE teams (
  id INT NOT NULL,
  primary key(id)
);

CREATE TABLE members (
  id INT NOT NULL,
  primary key(id)
  name varchar(255),
  age INT NOT NULL,
  team_id INT NOT NULL
);


-- 테이블 열(column) 추가

ALTER TABLE teams
ADD team_id INT NOT NULL

-- 테이블 열(column) 추가 디폴트 값 설정
ALTER TABLE 테이블명 
ADD 추가할컬럼명 컬럼타입 DEFAULT 디폴트값;

ALTER TABLE 테이블명 
ADD COLUMN 추가할컬럼명 컬럼타입 DEFAULT 디폴트값 컬럼위치;

-- 테이블 열(column) 이름 변경

ALTER TABLE teams
RENAME COLUMN team_id TO teamId

-- 테이블 열(column) 삭제
-- ? 이게 왜 안될까 mysql 에서 해보자
-- ! 터미널에서는 된다.

ALTER TABLE teams
DROP COLUMN teamId


-- 테이블 컬럼 순서 변경
ALTER TABLE 테이블명 MODIFY 순서변경할컬럼명 컬럼타입 AFTER 앞에오는컬럼명;

-- 테이블에 값 추가하기 (teams)
INSERT INTO teams (id, name) value(1,'A');
INSERT INTO teams (id, name) value(2,'B');

-- 테이블에 값 추가하기 (members)

-- todo: 팀A id=1, name='hoomin', age=30, team_id=1
INSERT INTO members (id, name, age, team_id) value(1, 'hoomin', 30, 1);
INSERT INTO members (id, name, age, team_id) value(2, 'elina', 17, 1);
INSERT INTO members (id, name, age, team_id) value(3, 'yoonji', 24, 1);
INSERT INTO members (id, name, age, team_id) value(4, 'ming', 23, 1);
INSERT INTO members (id, name, age, team_id) value(5, 'jelly', 13, 1);

-- ? 한번에 입력하기
INSERT INTO members (id, name,age, team_id) 
  VALUES
    (21, 'lala', 5, 1),
    (22, 'lulu', 4, 2),
    (23, 'momo', 7, NULL),
    (24, 'titi', 6, 2);

-- ? PK 값 자동생성으로 바꾸자 ===> AUTO_INCREMENT;

-- todo: 팀B
INSERT INTO members (id, name, age, team_id) value(6, 'kein', 30, 2);
INSERT INTO members (id, name, age, team_id) value(7, 'venom', 21, 2);
INSERT INTO members (id, name, age, team_id) value(8, 'zico', 27, 2);
INSERT INTO members (id, name, age, team_id) value(9, 'cherry', 15, 2);
INSERT INTO members (id, name, age, team_id) value(10, 'alley', 25, 2);
INSERT INTO members (id, name, age, team_id) value(11, 'peter', 40, 2);
INSERT INTO members (id, name, age, team_id) value(12, 'lisa', 19, 2);

-- todo: 팀 없는 사람
INSERT INTO members (id, name, age) value(13, 'oop', 16);
INSERT INTO members (id, name, age) value(14, 'xoxo', 22);
INSERT INTO members (id, name, age) value(15, 'coco', 33);
INSERT INTO members (id, name, age) value(16, 'hoomin', 11);
INSERT INTO members (id, name, age, team_id) value(25, 'hoomin', 33, 2);

-- Table 컬럼 타입 변경하기
ALTER TABLE members MODIFY team_id INT;

ALTER TABLE members MODIFY id INT AUTO_INCREMENT;
ALTER TABLE teams MODIFY id INT AUTO_INCREMENT;

ALTER TABLE members MODIFY age TINYINT UNSIGNED;
ALTER TABLE members MODIFY team_id TINYINT DEFAULT 0;

-- * COMPLETE
-- todo: 이름이 hoomin 인 사람 조회하기
SELECT * FROM members
WHERE name='hoomin';

-- * COMPLETE
-- todo: 이름이 hoomin인 사람이름과, 팀 이름 조회하기
SELECT members.name, teams.name FROM members
INNER JOIN teams 
ON members.team_id=teams.id AND members.name='hoomin'

-- * COMPLETE
--  todo: 팀이 있는 사람만 조회
SELECT members.name, teams.name FROM members
INNER JOIN teams 
ON members.team_id=teams.id;

-- * COMPLETE
-- todo: 팀 이 있는 사람 수 조회하기
SELECT COUNT(teams.name) FROM teams
JOIN members ON members.team_id=teams.id;

-- * COMPLETE
-- todo: 팀 별 사람 수 조회

-- * 집계함수 : SUM, MIN, MAX, COUNT, AVG

SELECT team_id, COUNT(team_id) team_members FROM members
GROUP BY team_id 
ORDER BY team_members DESC;

-- 좀 더 깔끔하게
SELECT team_id 팀ID, COUNT(*) 인원수 FROM members
WHERE team_id IN (1, 2)
GROUP BY team_id;

-- * SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY 

-- * COMPLETE
-- todo: 팀 별 사람 이름 쉼표로 분리해서 조회하기

SELECT members.team_id, GROUP_CONCAT(members.name) AS 팀원 FROM members
GROUP BY members.team_id;

-- * COMPLETE
-- todo: 팀 별 사람 이름 쉼표로 분리해서 조회하기 (19세 이상만)
SELECT members.team_id, GROUP_CONCAT(members.name) AS 팀원 FROM members
WHERE members.age > 18
GROUP BY members.team_id;