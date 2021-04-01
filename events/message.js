module.exports = (client, msg) => {
    if (msg.author.bot) return;

    if (msg.content.indexOf(client.config.prefix) !== 0) return;

    const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands[command];

    if (!cmd) return;
    if (client.upd && (['upd', 'lactive', 'lvl'].indexOf(command) != -1)) {
        msg.channel.send("Update is in progress.\nPlease wait a bit :heart:")
        return
    }
    if (command == 'upd') client.upd = true;

    cmd.run(client, msg, args);
};