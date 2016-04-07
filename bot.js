var Twit = require('twit'),
dotenv = require('dotenv').load(),
emojiArr = require('./emoji.js');

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var stream = T.stream('user');

stream.on('tweet', function ( err, reply ){
  if ( err ) console.log(err);
  else {
    tweet();
  }
})

function tweet(){
  randomEmoji = Math.floor(Math.random() * emojiArr.emojiLib[0].length);
  T.post('statuses/update',
  { status: emojiArr.emojiLib[0][randomEmoji] + emojiArr.emojiLib[1] },
  function ( err, data, response ){
    console.log(err);
  })
};

setInterval(tweet, 86400000);
