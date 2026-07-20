var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('mahebub from hadolti');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
