const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');

const validateUserData = require('../users/validate-user-data.js');

const secrets = require('../config/secret.js');

router.post('/register', validateUserData, (req, res) => {
  const userData = req.body;
  const hash = bcrypt.hashSync(userData.password, 10);

  userData.password = hash;

  Users.addUser(userData)
    .then(user => {
      res.status(201).json({message: 'user successfully created'});
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
  const {username, password} = req.body;

  Users.getUserBy({username})
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({message: `welcome, ${user.username}!`, token});
    } else {
      console.log(res)
      res.status(404).json({ errorMessage: 'invalid credentials' });
    }
    
  })
});

function generateToken(user) {
  const payload = {
      id: user.id,
      username: user.username
  };
  const options = {
      expiresIn: '2h'
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;