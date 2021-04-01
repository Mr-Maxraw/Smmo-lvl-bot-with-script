exports.run = (client, msg, args) => {
    let member = msg.mentions.members.first() || msg.member;
    //console.log(client.data)
    sendData = client.data.find(el => el.name == member.nickname) || client.data.find(el => el.name == member.user.username)
    console.log(sendData, member.nickname, member.user.username);
    if (!sendData) {
        msg.channel.send("Can't resolve lvl data.\nPerhaps your nickname is not the same as in smmo!");
        return;
    }
    msg.channel.send(member.toString() + "'s level is "  + sendData.lvl.split(" ").slice(-1))
}