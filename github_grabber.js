const fs = require('fs');
const qs = require('querystring');
const https = require('https');
const http = require('http');

const githubServer = http.createServer((req, res) => {
    if (req.method === 'POST') {
        res.end("I'm a POST request!");
    }
    res.end("Danger, not a POST request");
});

githubServer.listen(8080, () => console.log('Listening on 8080'));