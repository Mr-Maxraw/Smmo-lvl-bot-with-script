module.exports = (client) => {
    const {spawn} = require('child_process');
    const fs = require('fs')
    client.upd = true;
    console.log("Bot started, gathering lvl data");
    const pyApp = spawn('py', ['get_lvl.py']);
    pyApp.stderr.pipe(process.stderr)
    pyApp.on('exit', (code) => {
        console.log(`python ended with code ${code}`)
        fs.readFile(__dirname + '/../members.list', 'utf-8', (err, data) => {
            require('./../parser')().then((data) => {
                client.data = data;
                client.upd = false;
            })
        })
    });
}