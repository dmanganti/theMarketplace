/* This is where my request is for User */
const endPoint = 'http://localhost:4000/api/user';
const registerUser = 'http://localhost:4000/api/user/register'
const loginUser = 'http://localhost:4000/api/user/login';
const updateUserInfo = 'http://localhost:4000/api/user/update'


class UserModel {
  static all = () => {
    return fetch(endPoint)
    .then(response => response.json())
    .catch(err => console.log('Could not get user\n', err));
  };

  static register = (user) => {
    return fetch(registerUser, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(err => console.log('Could not register user', err))
  }

  static login = (user) => {
    return fetch(loginUser, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err => console.log('Could not login', err))
  }

  static update = (user) => {
    return fetch(updateUserInfo, {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .catch(err => console.log('Could not update user info', err))
  }
};

export default UserModel;
