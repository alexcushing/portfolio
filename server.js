const express = require('express');
const app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('/experience', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('/projects/putnamProjects', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('/projects/putnamSkills', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});