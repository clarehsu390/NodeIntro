// con 

//Nodemon kills and restarts your serve whenever you make changes to the file

const http = require('http');

const server = http.createServer((req, res) => {
    res.write('hello world');
    res.end();
});

server.listen(8000, () => console.log("I'm listening on port 8000!"));

const querystring = require('querystring');