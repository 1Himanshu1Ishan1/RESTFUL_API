let users = [];
let idCounter = 1;

module.exports = {
  getAllUsers: () => users,

  getUserById: (id) => users.find(user => user.id === id),

  createUser: (data) => {
    const newUser = { id: idCounter++, ...data };
    users.push(newUser);
    return newUser;
  },

  updateUser: (id, data) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      return users[index];
    }
    return null;
  },

  deleteUser: (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }
};
