var address = {
	Street: 'Main',
	Number: 100,
	Apartment:
	{
		Floor: 3,
		Number: 301
	}
};


let name, phone;
let info = {
	name: name,
	phone: phone,
	printInfo: function() {
		console.log(`Name: ${this.name}, Phone: ${this.phone}`);
	}
}

info.name = "ntue";
info.phone = "2732-1104";
info.printInfo();

console.log(info['name']);
console.log(info.name);


let info1 = {
	name,
	phone,
	printInfo() {
		console.log(`Name: ${this.name}, Phone: ${this.phone}`);
	}
}

info1.name = "ntue";
info1.phone = "2732-1104";
info1.printInfo();
