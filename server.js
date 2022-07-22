// All dependencies
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

// Declaring the app
const app = express();

// Certificates
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tameem.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tameem.dev/fullchain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate
};

// Middleware
app.use(express.static('public', { dotfiles: 'allow' } ));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Creating HTTP and HTTPS servers
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

//app.listen(8080, () => {
//	console.log('FSAE app is listening on port 8080.');
//});
