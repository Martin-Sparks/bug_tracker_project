const baseURL = 'http://localhost:3000/api/bugs/';

export default {
  getTickets() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addTicket(ticket) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(ticket),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updateTicket(ticket) {
    return fetch(baseURL + ticket._id, {
      method: 'PUT',
      body: JSON.stringify(ticket),
      headers: { 
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  },

  deleteTicket(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  },

  searchTicket(query){
    return fetch(baseURL + query)
      .then(res => res.json());
  }

};
