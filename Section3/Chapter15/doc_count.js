var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
	var myDB = db.db("words");
	myDB.collection("word_stats", countItems);
	setTimeout(function(){
		db.close();
	}, 3000);
});

function countItems(err, words){
	words.count({first:{$in: ['a', 'b', 'c']}}, function(err, count){
		console.log("Words starting with a, b, or c: " + count);
	});	
	words.count({size:{$gt: 12}}, function(err, count){
		console.log("Words longer than 12 characters: "+ count);
	});
	words.count({letters: {$size: 12}}, function(err, count){
		console.log("Words with 12 Distinct Characters: " + count);
	});
	words.count({$and: [{first:{$in: ['a', 'e', 'i', 'o', 'u']}},
				{last:{$in: ['a', 'e', 'i', 'o', 'u']}}]},
			function(err, count){
		console.log("Words that start and end with a vowel: " + count);
	});

	
}
