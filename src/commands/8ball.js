let eightball = [
    "Cant tell you.",
    "Whats your problem ?, I am busy.",
    "Go somewhere else.",
    "Do you want me to abuse ?",
    "Dont you have real people to talk to ?",
    "I cant answer that.",
    "Thanks for asking"
];

module.exports = async (msg, args) => {
    if (!args.length) return;
    const i = Math.floor(Math.random() * eightball.length);
    const reply = eightball[i];
    await msg.channel.send(`${msg.author} ${reply}`);
}