exports.run = (client, message, args) => {
    const {spawn} = require('child_process');
    const fs = require('fs')
    
    message.channel.send("Begin gathering lvl data");
    const pyApp = spawn('py', ['get_lvl.py']);
    pyApp.stderr.pipe(process.stderr)
    pyApp.on('exit', (code) => {
        console.log(`python ended with code ${code}`)
        fs.readFile(__dirname + '/../members.list', 'utf-8', (err, data) => {
            require('./../parser')().then((data) => {
                console.log(data[0] == client.data[0]);
                client.data = data
                client.upd = false;
                message.channel.send("Lvl data was updated")
            })
        })
    });
}