(function(){console.log(this)})();

let person = {
	firstname: 'Chi-Shan',
	lastname: 'Yu',
	greet1: function() {
		console.log(this);
	},

	greet2: ()=> {
		console.log(this);
	},

	greet3: function() {
		(() => console.log(this))();
	}

};

person.greet1();  //this = person
person.greet2();  //this = person's this = unknown
person.greet3();  //this = greet3's this = person
