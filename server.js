// All dependencies
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB Connection
mongoose.connect("mongodb+srv://tameem:<password>@cu-fsae.wdkxp.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("Error", console.log.bind(console, "connection error"));
db.once("open", function(callback) {
	console.log("connection succeeded");
})

// Declaring the app
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Certificates
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tameem.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tameem.dev/fullchain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate
};

// Middleware
app.use(express.static('public', { dotfiles: 'allow' } ));

//POST Request
app.post("/form-handler", urlencodedParser, function(req,res) {
	var summary = req.body.summary;
	var dept = req.body.dept;
	var subs = req.body.subs;
	var priority = req.body.priority;
	var vendor = req.body.vendor;
	var part = req.body.part;
	var partnum = req.body.partnum;
	var quant = req.body.quant;
	var cost = req.body.cost;
	var fees = req.body.fees;
	var link = req.body.link;
	var reason = req.body.reason;
	var add_info = req.body.add_info;
	
	var data = {
		"summary": summary,
		"dept": dept,
		"subs": subs,
		"priority": priority,
		"vendor": vendor,
		"part": part,
		"partnum": partnum,
		"quant": quant,
		"cost": cost,
		"fees": fees,
		"link": link,
		"reason": reason,
		"add_info": add_info
	}

	db.collection("active-orders").insertOne(data, function(err, collection) {
		if (err) throw err;
		console.log("Record inserted successfully");
	});

	res.redirect("/");
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Creating HTTP and HTTPS servers
httpServer.listen(8080, () => {
	console.log('HTTP Server running on port 8080');
});

httpsServer.listen(8443, () => {
	console.log('HTTPS Server running on port 8443');
});
