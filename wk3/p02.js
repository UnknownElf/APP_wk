function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'DTD NTUE'
	};

	callback(data);
}

greet(ddata => {
	console.log('The callback was invoked!');
	console.log(ddata);
});

greet(ddata => {
	console.log('A different callback was invoked!');
	console.log(ddata.name);
});
