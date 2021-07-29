const fs = require('fs');
const Southeros = require('./Southeros');
const { checkAlliance } = require('./Utils');

const args = process.argv.slice(2);
const file = fs.readFileSync(args[0],'utf8');
const messages = file.split('\n').map( x => x.trim()).filter(x => x);
messages.forEach( x => Southeros.sendMessage("SPACE",x.split(" ")[0],x.split(" ")[1]));
checkAlliance(Southeros,"SPACE");