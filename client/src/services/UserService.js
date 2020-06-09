const baseURL = 'http://localhost:3000/api/users/';

export default {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addUser(user) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateUser(user) {
    return fetch(baseURL + user._id, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  },

  deleteUser(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};
