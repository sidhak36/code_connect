
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('./config/mongoose');
const app = express();
const port = 8000;
//Set some express properties
app.set('case sensitive routing', true);
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
    name: 'SESS_NAME',
    secret: 'This is social website\/codeconnect',
    saveUninitialized: false,
    resave: true,
    cookie: {
        maxAge:  60*60*1000,
        sameSite: true
    }
}));

app.use(expressLayouts);

app.use(express.static('./assets'));
//Use the express router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Successfully fired express server at port ${port}`);
});