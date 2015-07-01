var express = require('express'),
	fs = require("fs"),
	app = express();

require("node-jsx").install({
	harmony: true,
	extension: ".js"
});

var boilerplate = fs.readFileSync("boilerplate.html").toString(),
	markup = require("./src/entry-server");

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.send(boilerplate.replace("{markup}", markup));
});

var server = app.listen(3000);
