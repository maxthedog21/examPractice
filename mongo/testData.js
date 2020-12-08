var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:3005/testDB";


mongoClient.connect(url, (err, db) => {
				if(err){
								throw err;
				}
				console.log("test data Base is created");
				db.close();
});
