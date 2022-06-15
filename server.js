const express = require('express');
const getTimeRemaining = require('./countdown.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('front-end'));

getTimeRemaining(); //initialize the time remainng when the server starts as first call returns 14 days as of now

app.get('/timeRemaining', (req, res) => {
    res.json(getTimeRemaining());
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});