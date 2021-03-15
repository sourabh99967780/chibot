const guildID = "816128157220470804";
const channelID = "820742128581214208";

let eightball = [
    "Cant tell you.",
    "Whats your problem ?, I am busy.",
    "Go somewhere else.",
    "Do you want me to abuse ?",
    "Dont you have real people to talk to ?",
    "I cant answer that.",
    "Thanks for asking"
];

module.exports = async (msg) => {
    if (msg.guild.id === guildID && msg.channel.id === channelID) {
        if (msg.content.toLowerCase() === "ping") {
            const reply = 'Ping';
            await msg.channel.send(`${msg.author} ${reply}`);
        }

        let regex = /^\!8ball\s.+/i;
        if (regex.exec(msg.content)) {
            const i = Math.floor(Math.random() * eightball.length);
            const reply = eightball[i];
            await msg.channel.send(`${msg.author} ${reply}`);
        }
    }
}