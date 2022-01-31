## instagram Schema Design

1. 게시물(Post) 작성 기능
   인스타그램에서는 여러 개의 사진(A)을 올릴 수 있습니다. 사진을 업로드할 때, 사진을 설명하는 간단한 글(C)이 올라갑니다.

2. 게시물에 댓글 달기 및 좋아요 기능
   게시물이 업로드되면 다른 사용자는 이 게시물에 댓글(E)을 달 수 있고, 좋아요(B) 를 눌러 관심을 표할 수 있습니다.

3. 해시태그 기능
   게시물에 #감성 #맛집 등의 해시태그(D)를 남길 수 있으며, 이 해시태그를 누르면 이 해시태그가 사용된 모든 게시물을 한 데 모아 볼 수 있습니다.

4. follow 기능
   인스타그램에서 친구 관계는 팔로워(follower)와 팔로잉(following)으로 나뉩니다. 김코딩이 최해커를 following 하면, 최해커의 피드가 김코딩의 홈 화면에 나타납니다. 최해커의 입장에서는 김코딩이 follower로 추가됩니다.

<img src="https://user-images.githubusercontent.com/74189121/151799591-f61ab1ff-8a69-4a45-8dac-ad76feca5b7f.png">

### 필요한 기능

- 팔로우 여부?
- 해시태그
- 포스트

### 필요한 테이블은 뭐뭐뭐 일까?

- 사용자
- 팔로워
- 게시글(posts) 들
- 게시글(post) 댓글(comments)
- 게시글(post) 좋아요(likes) 여부?
- 게시글(post) 해시태그(hashtags) 들
- 해시태그(hashtags)

```sql

Table follow_follower {
  id INT
  userId INT
  followId INT
}

Table users {
  id INT PK
  username varchar
}

Ref: "users"."id" < "follow_follower"."userId"

Ref: "users"."id" < "follow_follower"."followId"


Table post_comments {
  id INT PK
  comment varchar
  created_at timestamp
  userId INT
  postId INT
}

Table posts {
  id INT PK
  image text
  created_at timestamp
  total_likes INT
  total_comments INT
  userId INT
}

Table post_likes {
  id INT PK
  created_at timestamp
  userId INT
  postId INT
}

Ref: "users"."id" < "post_comments"."userId"

Ref: "users"."id" < "posts"."userId"

Ref: "users"."id" < "post_likes"."userId"


Table post_hashtags {
  id INT PK
  hashtagId INT
  postId INT
}

Table hashtags {
  id INT PK
  name varchar
}


Ref: "posts"."id" < "post_comments"."postId"

Ref: "posts"."id" < "post_likes"."postId"

Ref: "posts"."id" < "post_hashtags"."postId"

Ref: "hashtags"."id" < "post_hashtags"."hashtagId"
```
