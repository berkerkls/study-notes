// We are initializing our packages
const express = require('express');
const dotenv = require('dotenv');

// To load the env varianbles we need to do some setting as giving the path to make it know where to look for
dotenv.config({ path: './config/config.env' });

// here we need our port for listen function and we can reach our port from env file just like below.
const PORT = process.env.PORT;

// We are initializing our app
const app = express();
// with express we use http methods as function just like below. first param is url and second one is function that takes req and res
app.get('/api/v1/bootcamps', (req, res) => {
  // by sendStatus func we can set our status by default but I prefer to use status and json func successively.
  res.status(200).json({ isSuccess: true, msg: 'Show all bootcamps' });
});

//  Below we wrote another get method but from this method we can reach specific bootcamp by sending id and in message we reached that id from request parameters.
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ isSuccess: true, msg: 'Create a new bootcamp' });
});

//  Below we wrote put method and from this method we can update specific bootcamp by sending id and in message we reached that id from request parameters.
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Update bootcamp ${req.params.id}` });
});

// and we want it to check this app by using listen function, this function takes port and a function so in below if we run npm run dev console will say on development mode but if we say npm start it will say production mode. you can check package file

app.listen(
  PORT,
  console.log(`Server is running on ${process.env.NODE_ENV} mode on ${PORT}`)
);
