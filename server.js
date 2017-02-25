const express = require('express');
const app = express();
var path = require("path");

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

app.listen('3000'); 