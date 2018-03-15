'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// use express middleware to put key-value pairs in the request body into req.body
// you'll learn all about middleware in the next assignment!
app.use(express.json());

// your code here.

// hint: in Postman under Body remember to select JSON instead of Text, and try logging
// req.body to the console to find the key-value pairs submitted from Postman, and 


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
