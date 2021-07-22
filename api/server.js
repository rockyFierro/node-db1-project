const express = require("express");
const accountsRouter = require('./accounts/accounts-router');
const server = express();

server.use('/api/accounts', accountsRouter);

server.get('/', (req,res)=>{
  res.status(200).json({
    api: 'up',
  });
});
server.use(express.json());

module.exports = server;
