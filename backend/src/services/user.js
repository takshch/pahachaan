const User = require('../models/user');

const doesUserNameExists = async (username) => {
  const user = await User.findOne({ username }).exec();
  console.log(user);
};

const register = async ({ username, email, password }) => {
  const user = await User.create({ username, email, password });
  return user;
};

const findUser = async ({ username, email, password }) => {
  let user;

  if (email) {
    user = await User.findOne({ email, password }).exec();
  } else if (username) {
    user = await User.findOne({ username, password }).exec();
  }

  return user;
};

module.exports = {
  doesUserNameExists,
  register,
  findUser
};