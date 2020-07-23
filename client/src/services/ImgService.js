const baseURL = 'http://localhost:3000/api/img/';

export default {
    getImg() {
      return fetch(baseURL)
        .then(res => res.json());
    },
  
    addImg(img) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(img),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },
  
    updateImg(Img) {
      return fetch(baseURL + Img._id, {
        method: 'PUT',
        body: JSON.stringify(Img),
        headers: { 
          'Content-Type': 'application/json' 
        }
      })
        .then(res => res.json());
    },
  
    deleteImg(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      });
    }
  };



