const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const axios = require('axios');
const port = 3006;

const app = express();

app.use('/', express.static('public'));
app.use('/:gameId', express.static('public'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// write code to handle getting data
let overview = 'http:localhost:3000'; // Josh
let reviews = 'http:localhost:3001'; // me
let image = 'http:localhost:3002'; // Bryan
let aboutGame = 'http:localhost:8081'; // Justin
// THIS DOESN'T EXIST !!! let topReviews = 'http:localhost:3004'; // I didn't set this (Stephen did)

app.use('/api/:service', (req, res) => {
  let service = req.params.service;
  console.log(`request for ${service}`);
  if (service === 'overview') {
    axios.get(`${overview}/1/dist/bundle.js`)
      .then((response) => {
        // console.log(response.data);
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'reviews') {
    axios.get(`${reviews}/1/dist/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'image') {
    axios.get(`${image}/1/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'aboutGame') {
    axios.get(`${aboutGame}/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  } else if (service === 'topReviews') {
    axios.get(`${topReviews}/1/bundle.js`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log(`error in request for ${service}: ${err}`);
      })
  }
})


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});