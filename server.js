const express = require('express');
const app = express();
var path = require("path");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.compress());

app.get('/*/:path', (req, res) => {
    res.redirect('/');
} );

app.get('/public_html/', (req, res) => {
    res.redirect('/');
    //fixes cpanel routing error
} );

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
} );

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
