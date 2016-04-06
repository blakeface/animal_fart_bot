var Twit = require('twit'),
  dotenv = require('dotenv').load();

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var xhr = new 

function testTweet(){
  T.post('statuses/update', { status: 'first bot tweet' },
  function ( err, data, response ){
    console.log(err);
  })
};

testTweet();
