var express = require('express');

var app = express();
app.use(express.static(__dirname + '/app/public'));
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

// ROUTES
require('./app/routes/website.route')(app);

var port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('App listening on localhost:' + port + '!')
})