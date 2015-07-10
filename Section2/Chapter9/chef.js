process.on('message', function(message, parent){
	var meal = {}
	switch(message.cmd){
		case 'makeBreakfast':
			meal = ["ham", "eggs", "toast"];
			break;
		case 'makeLunch':
			meal = ["veggie burger", "fries", "shake"];
			break
		case 'makeDinner':
			meal = ["soup", "salad", "breadsticks"];
			break;
	}	
	process.send(meal);
});
