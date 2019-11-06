const express = require('express');
const bodyParser = require('body-parser');
// const compression = require('compression');
// const axios = require('axios');
const cors = require('cors');
const port = 3006;

const app = express();

app.use('/', express.static(__dirname + '/../'));
app.use('/:gameId', express.static('public'));
// app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// write code to handle getting data
// let overview = 'http://ec2-13-57-13-174.us-west-1.compute.amazonaws.com'; // Josh
// let reviews = 'http://ec2-52-53-170-110.us-west-1.compute.amazonaws.com:3001'; // me
// // let image = 'http:localhost:3002'; // Bryan
// let aboutGame = 'http://ec2-18-218-54-252.us-east-2.compute.amazonaws.com:8081'; // Justin

// app.use('/api/:service', (req, res) => {
//   let service = req.params.service;
//   console.log(`request for ${service}`);
//   if (service === 'overview') {
//     axios.get(`${overview}/1/dist/bundle.js`)
//       .then((response) => {
//         // console.log(response.data);
//         res.send(response.data);
//       })
//       .catch((err) => {
//         console.log(`error in request for ${service}: ${err}`);
//       })
//   } else if (service === 'reviews') {
//     axios.get(`${reviews}/1/dist/bundle.js`)
//       .then((response) => {
//         res.send(response.data);
//       })
//       .catch((err) => {
//         console.log(`error in request for ${service}: ${err}`);
//       })
//   // } else if (service === 'image') {
//   //   axios.get(`${image}/1/bundle.js`)
//   //     .then((response) => {
//   //       res.send(response.data);
//   //     })
//   //     .catch((err) => {
//   //       console.log(`error in request for ${service}: ${err}`);
//   //     })
//   } else if (service === 'aboutGame') {
//     axios.get(`${aboutGame}/bundle.js`)
//       .then((response) => {
//         res.send(response.data);
//       })
//       .catch((err) => {
//         console.log(`error in request for ${service}: ${err}`);
//       })
//   } else if (service === 'topReviews') {
//     axios.get(`${topReviews}/1/bundle.js`)
//       .then((response) => {
//         res.send(response.data);
//       })
//       .catch((err) => {
//         console.log(`error in request for ${service}: ${err}`);
//       })
//   }
// })


app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});