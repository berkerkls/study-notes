// We are initializing our packages
const express = require('express');
const dotenv = require('dotenv');
// const logger = require("./middleware/middleware.js")
const morgan = require('morgan');

// Route Files
const bootcamp = require('./routes/bootcamps');

// To load the env varianbles we need to do some setting as giving the path to make it know where to look for
dotenv.config({ path: './config/config.env' });

// here we need our port for listen function and we can reach our port from env file just like below.
const PORT = process.env.PORT;

// We are initializing our app
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// for custom middleware that we have created
// app.use(logger)

// Mounting our router with use function in express. First param is the url and second param is the file
app.use('/api/v1/bootcamps', bootcamp);

// and we want it to check this app by using listen function, this function takes port and a function so in below if we run npm run dev console will say on development mode but if we say npm start it will say production mode. you can check package file

app.listen(
  PORT,
  console.log(`Server is running on ${process.env.NODE_ENV} mode on ${PORT}`)
);
