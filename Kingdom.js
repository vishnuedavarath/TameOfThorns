const Utils = require("./Utils");

class Kingdom {
    constructor(name,emblem){
        this.name = name;
        this.emblem = emblem;
        this.wonBy = '';
    }

    receiveMessage(from,msg){
        if( Utils.willWonBy(this.emblem,msg) && !this.wonBy ) this.wonBy = from;
    }
}

module.exports = Kingdom;