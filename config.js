/*

 _____                                 _                 _            
/  __ \                               | |               | |           
| /  \/  __ _  ___   ___  _   _  _ __ | |__    ___    __| |  ___  ___ 
| |     / _` |/ __| / _ \| | | || '__|| '_ \  / _ \  / _` | / _ \/ __|
| \__/\| (_| |\__ \|  __/| |_| || |   | | | || (_) || (_| ||  __/\__ \
 \____/ \__,_||___/ \___| \__, ||_|   |_| |_| \___/  \__,_| \___||___/
                           __/ |                                      
                          |___/                                      
 _____              _     
|_   _|            | |    
  | |    ___   ___ | |__  
  | |   / _ \ / __|| '_ \ 
  | |  |  __/| (__ | | | |
  \_/   \___| \___||_| |_|
@ Project Name : caseyrhodes tech 
* Creator      : Caseyrhodes Tech 
* My Git       : https//github.com/caseyweb
* Contact      : wa.me/254112192119
*
* Release Date : 18 august 2025 12.01 AM
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Caseyrhodes~e0QB0BYK#lCm9CSGARPZcfRRh6GHHTQRa9OgVcnIl8Sd4Bpab3SQ",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
//anticall on/off
   ANTI_CALL: process.env.ANTI_CALL || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY CASEYRHODES TECH 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/52dotx.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "CASEYRHODES-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "CASEYRHODES",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254732849780",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "CASEYRHODES-TECH",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© POWERED CASEYRHODES TECH*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/52dotx.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Powered by *CASEYRHODES TECH*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254732849780",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
