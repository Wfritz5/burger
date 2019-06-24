var mysql = require('mysql');
var connection;

if (UseJawsDB !== "no") {
	console.log("Inside");
	connection = mysql.createConnection({
		host: "g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		port: 3306,
		user: "yiip7dsioca9p333",
		password: "ilqz1jevereh42lm",
	  database: "f84elkev8t6s2f8g"
	  
	});
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "Dubbydb767!",
		database: "burger_db"
	});
};
	connection.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		} 
		console.log("connected as id " + connection.threadId);
	});
	
	module.exports= connection;
