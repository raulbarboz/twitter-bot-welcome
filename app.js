require('dotenv').config();
const express = require('express');
const app = express();
const Twit = require('twit');

app.get('/', (req, res) => {
  res.send('App Running')
})

var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  
  strictSSL:            true,   
})

var stream = T.stream('user')
 
stream.on('folow', function (res) {
  console.log(resp)
})


app.listen(process.env.PORT || 3000);

