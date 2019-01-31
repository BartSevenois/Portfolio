var express = require('express');
var i18n = require('./app/config/i18n');
var expressSession = require('express-session');

var app = express();
app.use(express.static(__dirname + '/app/public'));
app.use(i18n);
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

// ROUTES
require('./app/routes/website.route')(app);

var port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('App listening on localhost:' + port + '!')
})