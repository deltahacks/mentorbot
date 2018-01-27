const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* /help
*
*   Asks for help from a mentor. Format /mentor [location]; [tag]; [description] 
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

  var parsed = (text+" ").split(";",2);

  callback(null, {

  	"response-type" : "in_channel",

    text: `Hello, <@${user}>...\nThanks for calling for help:`,

    "text": `Location : ${text}`,
	"text": `Tag : ${parsed[1]}`,
	"text": `Description : ${parsed[2]}`,

    attachments: [
    {
    	"text": `Location : ${parsed[0]}`,
		"text": `Tag : ${parsed[1]}`,
		"text": `Description : ${parsed[2]}`,
    }
    	
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};
