'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const User = require('../models').users;

const signup = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const data = {
      userName,
      userEmail,
      userPassword: await bcrypt.hash(userPassword, 10)
    };

    const user = await User.create(data);

    if (user) {
      res.status(201).json(user)
    }
  }

  catch (e) {
    console.log(e);
  }
}

const login = async (req, res) => {
  const basicHeader = req.headers.authorization.split(' ');
  // console.log(basicHeader)
  const encodedValue = basicHeader.pop();
  // console.log(encodedValue)

  const decodedValue = base64.decode(encodedValue);
  console.log(decodedValue)
  const [userEmail, userPassword] = decodedValue.split(':');

  const user = await User.findOne({
    where: {
      userEmail: userEmail
    }
  });

  if (user) {
    const isSame = await bcrypt.compare(userPassword, user.userPassword);

    if (isSame) {
      return res.status(200).json(user)
    } else {
      return res.status(401).send('You are not authorized');
    }
  } else {
    return res.status(401).send('You are not authorized');
  }
}

const allUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}

module.exports = {
  signup,
  allUsers,
  login,
}