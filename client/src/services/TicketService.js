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

  updateTickets(ticket) {
    return fetch(baseURL + ticket._id, {
      method: 'PUT',
      body: JSON.stringify(ticket),
      headers: { 
        'Content-Type': 'application/json' 
      }
    })
      .then(res => res.json());
  },

  deleteTickets(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};
