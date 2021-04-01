exports.run = (client, msg, args) => {
    try {if (msg.mentions.members.first().user == client.user) msg.channel.send("```!help [@ this bot]- see this message\n\n!lvl (@ user) - get user level, defaults to sender\n\n!lactive (@ user) - get last active time, defaults to sender\n\n!upd - update the guild members' data, please wait for update notification before using bot again\n\nparameters in () may be omitted, [] - is neccessary info```")}
    catch {
        
    }
}