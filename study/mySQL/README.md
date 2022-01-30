## SQL 기본문법

- SELECT
  - WHERE
  - AND
  - OR
  - NOT

### 특정 값과 동일한 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 = "특정 값"
```

### 특정 값을 제외한 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 <> "특정 값"
```

### 특정 값과 비슷한 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 LIKE "%특정 값의 일부%"
```

### 특정 값의 리스트의 값들과 일치하는 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 IN ("특정 값", "특정 값")
```

- NULL VALUES

### 특정 값이 NULL 인 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 IS NULL
```

### 특정 값이 NULL이 아닌 데이터 찾기

```sql
SELECT 특성 FROM 테이블_이름 WHERE 특성 IS NOT NULL
```

- ORDER BY
  - DESC

### 오름차순 정렬하기

```sql
SELECT * FROM 테이블_이름 ORDER BY 특성
```

### 내림차순 정렬하기

```sql
SELECT * FROM 테이블_이름 ORDER BY 특성 DESC
```

- LIMIT

### 데이터를 특정 개수만큼만 출력하기(10개까지 출력)

```sql
SELECT * FROM 테이블_이름 LIMIT 10
```

- DISTINCT

### 특성을 기준으로 유니크한 값 조회하기

```sql
SELECT DISTINCT 특성 FROM 테이블_이름
```

### 2개이상의 특성의 유니크한 조합 값 조회하기

```sql
SELECT DISTINCT 특성_1, 특성_2, 특성_3 FROM 테이블_이름
```

- UPDATE

### 특정 값에 해당하는 값 변경하기

```sql
UPDATE 테이블_이름 SET 변경할_특성="변경할_내용" WHERE 특성='특정값'
```

- DELETE

### 특정 값에 해당하는 값 지우기

```sql
DELETE FROM 테이블_이름 WHERE 특성='특정값'
```

- COUNT

### 특성에 해당하는 값의 개수 출력하기

```sql
SELECT COUNT(특성_A) FROM 테이블_이름
```

- LIKE
- WILDCARDS

### 특정문자열로 시작하는 특정값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '특정문자열%'
```

### 특정문자열로 끝나는 특정값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '%특정문자열'
```

### 특정문자열이 포함된 특정값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '%특정문자열%'
```

### 특정문자열에 해당하는 특정값 조회하기(London)

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE 'L_n__n'
```

### 특정 문자열이 "A" 또는 "B" 또는 "C" 로 시작하는 특정 값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '[ABC]%'
```

### 특정 문자열이 "A" 또는 "B" 또는 "C" 로 시작하지 않는 특정 값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '[!ABC]%'
```

### 특정 문자열이 "A", "B" 또는 "C" 로 시작하는 특정 값 조회하기

```sql
SELECT * FROM 테이블_이름 WHERE 특정값 LIKE '[A-C]%'
```

- ALIASES

### 특성 이름 별칭으로 표기하기

```sql
SELECT 특성_1 AS 별칭 FROM 테이블_이름
```

- JOIN
  - LEFT JOIN
  - RIGHT JOIN

### 2개이상의 테이블의 서로 공통된 부분을 기준으로 연결하기

```sql
SELECT * FROM 테이블_1 JOIN 테이블_2 ON 테이블_1.특성_A = 테이블_2.특성_B
```

### 2개이상의 테이블의 서로 공통된 부분을 기준으로 연결하되, 왼쪽 테이블의 값은 전부 가져오기 (테이블\_1의 데이터는 전부 출력한다)

```sql
SELECT * FROM 테이블_1 LEFT JOIN 테이블_2 ON 테이블_1.특성_A = 테이블_2.특성_B
```

### 2개이상의 테이블의 서로 공통된 부분을 기준으로 연결하되, 오른쪽 테이블의 값은 전부 가져오기 (테이블\_2의 데이터는 전부 출력한다)

```sql
SELECT * FROM 테이블_1 RIGHT JOIN 테이블_2 ON 테이블_1.특성_A = 테이블_2.특성_B
```

- GROUP BY

### 특정 값을 묶어서 특성으로 조회하기

```sql
SELECT 특성_A FROM 테이블_이름 GROUP BY 특성_A_그룹_이름
```
