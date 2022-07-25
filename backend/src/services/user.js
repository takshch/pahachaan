const User = require('../models/user');

const doesUserNameExists = async (username) => {
  const user = await User.find({ username }).exec();
  console.log(user);
};

const register = async ({ username, email, password }) => {
  const user = await User.create({ username, email, password });
  return user;
};

module.exports = {
  doesUserNameExists,
  register,
};