class Utils{
    decrypt(emblem,msg) {
        let plainMsg = "";
        for (let i=0;i<msg.length;i++){
            let charCode = msg.charCodeAt(i) - 'A'.charCodeAt() - emblem.length ;
            if(charCode > -1){
                plainMsg += String.fromCharCode('A'.charCodeAt() + charCode);
            }
            else{
                plainMsg += String.fromCharCode('Z'.charCodeAt() + charCode + 1);
            }
        }
        return plainMsg;
    }
    willWonBy(emblem,msg){
        msg = this.decrypt(emblem,msg);
        for(let i=0;i<emblem.length;i++){
            const index = msg.indexOf(emblem[i]);
            if(index > -1){
                msg = msg.slice(0,index) + msg.slice(index+1);
            }
            else{
                return false;
            }
            return true;
        }
    }

    checkAlliance(universe,kingdom){
        let alliance = universe.kingdoms.filter( x => x.wonBy === kingdom ).map( x => x.name);
        if(alliance.length < 3){
            console.log("NONE");
        }
        else{
            console.log( `${kingdom} ` + alliance.join(" "));
        }
    }
}

module.exports = new Utils();