'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// use express middleware to parse the request body and add it to the request object
// don't worry, you'll learn all about middleware in the next assignment!
app.use(express.json());



// your code here.


function madlib(body){
  const {adjective1, adjective2, adjective3, adverb, name, noun, place} = body;
  return (
    `There's a ${adjective1} new ${name} in ${place} and everyone's talking. 
     Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. 
  However, ${name} has a secret - ${name}'s a vile vampire.` 
          + `<br /> Will it end with a bite, or with a stake through the ${noun}?`);
  
}
app.post('/', (req, res) => res.send(madlib(req.body)));
// hint: click the Logs button near the top left corner of this page, then try doing
// console.log(req.body) here to show key-value pairs from Postman in the Activity Log

// listen for requests :)
app.listen(process.env.PORT, () => console.log(
`Your app is listening on port ${process.env.PORT}`));
