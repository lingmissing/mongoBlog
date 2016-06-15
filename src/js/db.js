define(function(require){
	var db = openDatabase('testDB', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function(context) {
		context.executeSql('CREATE TABLE IF NOT EXISTS basicInfo (id unique, name, age, sex, phone)');
		context.executeSql('INSERT INTO basicInfo (id, name, age, sex, phone) VALUES (0, "Byron", 12, 1, 12223334444)');
		context.executeSql('INSERT INTO basicInfo (id, name, age, sex, phone) VALUES (1, "Casper", 16, 1, 12223334444)');
		context.executeSql('INSERT INTO basicInfo (id, name, age, sex, phone) VALUES (2, "Frank", 32, 0, 12223334444)');
	});

	return db;
});

