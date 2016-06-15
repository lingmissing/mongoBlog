define(function(require){
	var $ = require('jquery');
	var handlebars = require('handlebars');
	var db = require('./db');

	db.transaction(function(context) {
		context.executeSql('SELECT * FROM basicInfo', [], function(context, results) {
			var len = results.rows.length;
			var	i;
			var innerHtml = '';
			for (i = 0; i < len; i++) {
				var data = results.rows.item(i);
				if(data.sex == 0){
					var sex = '男';
				}else{
					sex = '女';
				}
				innerHtml += '<tr><td>'+ data.id +'</td><td>'+ data.name +'</td><td>'+ data.age +'</td><td>'+ data.phone +'</td><td>'+ sex +'</td></tr>';
			}
			$('.name-tb').html(innerHtml);
		});
	});
});