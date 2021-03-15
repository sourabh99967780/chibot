const ping = require('./ping');
const eightBall = require('./8ball');

const guildID = "816128157220470804";
const channelID = "820742128581214208";

const commands = {
    ping,
    '8ball': eightBall
}

module.exports = async (msg) => {
    if (msg.guild.id === guildID && msg.channel.id === channelID) {
        const args = msg.content.split(' ');
        if (args[0].charAt(0) !== '!') return;
        const command = args.shift().substr(1);
        if (Object.keys(commands).includes(command)) {
            commands[command](msg, args);
        }
    }
}