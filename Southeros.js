const Kingdom = require("./kingdom");

class Southeros {
    constructor(){
        this.kingdoms = [
            new Kingdom('SPACE','GORILLA'),
            new Kingdom('LAND','PANDA'),
            new Kingdom('WATER','OCTOPUS'),
            new Kingdom('ICE','MAMMOTH'),
            new Kingdom('AIR','OWL'),
            new Kingdom('FIRE','DRAGON')
        ];
    }
    getKingdomByName(name){
        return this.kingdoms.find( x => x.name === name );
    }
    sendMessage(from,to,msg){
        this.getKingdomByName(to).receiveMessage(from,msg);
    }
}

module.exports = new Southeros();