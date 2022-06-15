const express = require('express');
const getTimeRemaining = require('./countdown.js');
// import {getTimeRemaining} from './countdown.js';

const app = express();
const port = process.env.port || 3000;

app.use(express.static('front-end'));

app.get('/timeRemaining', (req, res) => {
    res.json(getTimeRemaining());
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});