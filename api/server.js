const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const plantsRouter = require('../plants/plants-router.js');

const server = express();

server.get('/', async (req, res) => {
    try {
      const shoutouts = await db('shoutouts');
      const messageOfTheDay = process.env.MOTD || 'Hello World!';
      res.status(200).json({ motd: messageOfTheDay, shoutouts });
    } catch (error) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve' });
    }
  });

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/plants', plantsRouter);

module.exports = server;  