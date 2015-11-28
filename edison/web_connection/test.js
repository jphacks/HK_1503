var request = require('request');

request({
	method: 'GET',
	url: 'https://0t9rg.cybozu.com/k/v1/records.json',
	headers: {
		'X-Cybozu-Authorization': new Buffer('Administrator:chaos123').toString('base64'),
		'Content-Type': 'application/json'
	},
	json: {
		app: 18
	}
}, function(err, response, body ){
	console.log(JSON.stringify(body));
});