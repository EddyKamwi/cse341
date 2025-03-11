
const express = require('express');
const app = express();

// imported my routes
app.use('/', require('./routes/web'));

// listen is deploying my backend server
app.listen(process.env.port || 8000);

// sending a message in the log
console.log('webserver listening at port: ' + (process.env.port || 'http://localhost:8000'))

