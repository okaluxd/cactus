
/////////Luego crearan un archivo llamado server.js y pegarán esto como en el video////////////

const express = require('express')
const server = express();

server.all('/', (req, res) => {
    res.send('xd');
});

function keepAlive() {
   server.listen(1245, () => { console.log("Si" + Date.now()) });
}

module.exports = keepAlive;