# MVC design pattern 수도코드

```jsx
// endpoint =>  http://myapp.com/users/profile/1

// routes 분기

users/profile/:id = Users.getProfile(id)

// controllers

class Users {
  function getProfile(id) {
    profile = this.UserModel.getProfile(id)

    renderView('users/profile', profile)
  }

  // models

  class UserModel{
    function getProfile(id) {
      data = this.db.get(`SELECT * FROM user WHERE id = id`)
      return data
    }
  }

// views
        // users
                // profile
                <h1>{{profile.name}}</h1>
                <ul>
                  <li>Email: {{profile.email}}</li>
                  <li>Phone: {{profile.phone}}</li>
                </ul>
}
```
