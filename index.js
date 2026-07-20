var express = require('express');

var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('hotel bhagyashree');
=======
    res.send('kay vishay bhava');
>>>>>>> 4dcec2a (all)
});

app.listen(process.env.PORT || 3000);

module.exports = app;
