let BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
let BITBOX = new BITBOXSDK();

const colors = new Array(
	"dark",
	"light",
	"grey",
	"red",
	"blue",
	"green",
	"yellow",
	"brown",
	"purple",
	"orange",
	"white",
	"black",
	"beige",
	"rose",
	"transparent",
	"multi"
);

class Assignment {
	constructor() {
		this.challenge = this.updateAssignment("abcdef1234567890abcdebcdef1234567890abcd");
    };
    
	getColor(ordinal) {
		return colors[ordinal];
	}
    
    updateUpdate(hash, difficulty=1) {
    	if(difficulty == 1) {
    		let clothTop = ((hash[21] % 1) == 0)? "jacket":"hat";
    		let clothTopColor = this.getColor(parseInt(hash[20], 16));
    		let clothBot = ((hash[1] % 1) == 0)? "pants":"shoes";
    		let clothBotColor = this.getColor(parseInt(hash[0], 16));
    		return "You wear a " + clothTopColor + " " + clothTop + " and " + clothBotColor + " " + clothBot;
    	} else {
    		return "Difficulty is too high !";
    	}
    }
    
	getChallenge() {
		BITBOX.Blockchain.getBestBlockHash().then(
			hash => {
				this.challenge = this.updateAssignment(hash);
			},
			err => {
				console.log(err);
			}
		);
		
		return this.challenge;
	}
}

export default Assignment;
