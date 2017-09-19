const fs = require('fs');
const qs = require('querystring');
const https = require('https');
const http = require('http');

const githubServer = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = ''
        req.on('data', d => {
            body += d
        });
        req.on('end', () => {
        const username = qs.parse(body).username;
        res.end(username)
    });
    }
});

githubServer.listen(8080, () => console.log('Listening on 8080'));