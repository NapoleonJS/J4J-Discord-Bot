const { Client, RichEmbed } = require("discord.js");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const channelj4j = "926848472257286147"

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();
client.on("ready", () => {
    function _0x1b7b(_0x28b943,_0x13356d){var _0x3b1877=_0x3b18();return _0x1b7b=function(_0x1b7bad,_0x177449){_0x1b7bad=_0x1b7bad-0x139;var _0x259bfc=_0x3b1877[_0x1b7bad];return _0x259bfc;},_0x1b7b(_0x28b943,_0x13356d);}function _0x3b18(){var _0x4490d1=['70SrYwCl','8DIzfwz','5379774pGHMHe','clear','118664aBGtyk','9174780tGDDSw','415670oSgeSC','142768VcNCnJ','4725290QhhRKR','35466locmRZ','6czYjFf'];_0x3b18=function(){return _0x4490d1;};return _0x3b18();}var _0x1b22ad=_0x1b7b;(function(_0x20a8e7,_0x5ac070){var _0x360abc=_0x1b7b,_0x3bd7ff=_0x20a8e7();while(!![]){try{var _0x4541c3=parseInt(_0x360abc(0x13b))/0x1+parseInt(_0x360abc(0x140))/0x2*(-parseInt(_0x360abc(0x141))/0x3)+-parseInt(_0x360abc(0x143))/0x4*(parseInt(_0x360abc(0x13d))/0x5)+-parseInt(_0x360abc(0x139))/0x6+-parseInt(_0x360abc(0x142))/0x7*(-parseInt(_0x360abc(0x13e))/0x8)+parseInt(_0x360abc(0x13c))/0x9+parseInt(_0x360abc(0x13f))/0xa;if(_0x4541c3===_0x5ac070)break;else _0x3bd7ff['push'](_0x3bd7ff['shift']());}catch(_0x5c5106){_0x3bd7ff['push'](_0x3bd7ff['shift']());}}}(_0x3b18,0xa8a16),console[_0x1b22ad(0x13a)]());
    const _0x11a569=_0x3856;function _0x3856(_0x145c10,_0x1f6c88){const _0x18680a=_0x1868();return _0x3856=function(_0x385673,_0x644c47){_0x385673=_0x385673-0x1da;let _0x5bec7b=_0x18680a[_0x385673];return _0x5bec7b;},_0x3856(_0x145c10,_0x1f6c88);}(function(_0x263058,_0x130dda){const _0x305703=_0x3856,_0x26f2d7=_0x263058();while(!![]){try{const _0x3f0e42=parseInt(_0x305703(0x1de))/0x1*(-parseInt(_0x305703(0x1e5))/0x2)+parseInt(_0x305703(0x1df))/0x3+parseInt(_0x305703(0x1dd))/0x4+parseInt(_0x305703(0x1e7))/0x5*(-parseInt(_0x305703(0x1e2))/0x6)+parseInt(_0x305703(0x1e1))/0x7+parseInt(_0x305703(0x1db))/0x8*(parseInt(_0x305703(0x1e0))/0x9)+-parseInt(_0x305703(0x1da))/0xa;if(_0x3f0e42===_0x130dda)break;else _0x26f2d7['push'](_0x26f2d7['shift']());}catch(_0x55450c){_0x26f2d7['push'](_0x26f2d7['shift']());}}}(_0x1868,0xdbf60));function _0x1868(){const _0x10b3f6=['27fAKetE','7826182YHeGOk','5136ISuxeO','log','v0.1','392390hmLUgK','Cemzy\x20J4J\x20Bot','570uYCyYm','text','27010090cEzcgn','3756472UEEjsy','figlet','5068328GxkXfC','1wLUKdg','305889vwKklB'];_0x1868=function(){return _0x10b3f6;};return _0x1868();}const figlet=require(_0x11a569(0x1dc));figlet[_0x11a569(0x1e8)](_0x11a569(0x1e6),function(_0x2afada,_0x5d17b5){const _0x339480=_0x11a569;console[_0x339480(0x1e3)](_0x5d17b5+_0x339480(0x1e4));});
})
    
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let cemzy = await data.get(msg.author.id);

        if (cemzy === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(5000);
          await msg.channel.send("You want j4j?");
          await sleep(4000);
          await msg.channel.send("https://discord.gg/rMBTZ9Vg8z"); // Enter your URL
          await sleep(10000);
          await msg.channel.send("I did");
          await sleep(15000);
          await msg.channel.send("you?");
          await sleep(15000);
          await msg.channel.send("you did or no");
          await sleep(15000);
          await msg.channel.send("ok..");
        }
      }
    }
  }
});

client.on('message', async msg => {
  if (msg.content === 'j4j') {
    client.channels.get(channelj4j).send("j4j dm me man"); // You can set your text(Everytime when someone type in chat j4j, it will triger and send on channel j4j dm me man. Since mostly people uses j4j/j4j dm/j4j dm me i set those 3 triggers)
}
});

client.on('message', async msg => {
  if (msg.content === 'j4j dm') {
    client.channels.get(channelj4j).send("j4j dm fast bro");
}
});
client.on('message', async msg => {
    if (msg.content === 'j4j dm me') {
            client.channels.get(channelj4j).send("j4j dm me lol");
        }
  });
client.login("type-here-token");