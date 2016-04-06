var Twit = require('twit'),
  dotenv = require('dotenv').load(),
  emoji = require('node-emoji');

var emojiArr = [
  emoji.get(":racehorse:"),
  emoji.get(":camel:"),
  emoji.get(":sheep:"),
  emoji.get(":elephant:"),
  emoji.get(":turtle:"),
  emoji.get(":honeybee:"),
  emoji.get(":fish:"),
  emoji.get(":tropical_fish:"),
  emoji.get(":whale:"),
  emoji.get(":whale2:"),
  emoji.get(":dolphin:"),
  emoji.get(":cow2:"),
  emoji.get(":ram:"),
  emoji.get(":water_buffalo:"),
  emoji.get(":tiger2:"),
  emoji.get(":goat:"),
  emoji.get(":rooster:"),
  emoji.get(":dog2:"),
  emoji.get(":pig2:"),
  emoji.get(":ox:"),
  emoji.get(":dromedary_camel:"),
  emoji.get(":leopard:"),
  emoji.get(":cat2:"),
  emoji.get(":poodle:"),
  emoji.get(":horse_racing:"),
],
  fart = emoji.get(":dash:");

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

function tweet(){
  randomEmoji = Math.floor(Math.random() * emojiArr.length);
  T.post('statuses/update', { status: emojiArr[randomEmoji] + fart },
  function ( err, data, response ){
    console.log(err);
  })
};

setInterval(tweet, 86400000);
