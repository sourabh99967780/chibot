module.exports = async (msg, args) => {
    await msg.channel.send('pong');
    console.log('Pong message sent');
}