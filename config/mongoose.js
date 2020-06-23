
const mongoose = require('mongoose');
var url = 'mongodb://localhost/social_connect';
mongoose.connect(url, (err) => {
    if(err){
        console.log('Error occured while connecting to database:', err);
        return;
    }
    console.log('Successfully connected to database');
});