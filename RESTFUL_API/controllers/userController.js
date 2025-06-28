const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  res.json(User.getAllUsers());
};

exports.getUser = (req, res) => {
  const user = User.getUserById(Number(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

exports.createUser = (req, res) => {
  const newUser = User.createUser(req.body);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const updatedUser = User.updateUser(Number(req.params.id), req.body);
  updatedUser
    ? res.json(updatedUser)
    : res.status(404).json({ message: 'User not found' });
};

exports.deleteUser = (req, res) => {
  const deletedUser = User.deleteUser(Number(req.params.id));
  deletedUser
    ? res.json({ message: 'User deleted', user: deletedUser })
    : res.status(404).json({ message: 'User not found' });
};
