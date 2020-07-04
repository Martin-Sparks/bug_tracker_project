const baseURL = 'http://localhost:3000/api/projects/';

export default {
  getProjects() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addProject(project) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(project),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateProject(project) {
    return fetch(baseURL + project._id, {
      method: 'PUT',
      body: JSON.stringify(project),
      headers: { 
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  },

  deleteProject(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};
