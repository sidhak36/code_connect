
const User = require('../models/user');
module.exports.home = function(req, res){
    
    // return res.render('home', {title: 'Home Page', fileName: 'home.css'});
    
    return res.render('home', {title: 'Home Page'});
    //return res.end('<h1>This is the home page</h1>');
}

module.exports.signUp = function(req, res){

    if(req.body.password !== req.body.confirm_password){
        res.redirect('back');
    }

    User.findOne({email: req.body.email}, (err, user) => {
        if(err){
            console.log('Error in finding user in signing up');
            return res.redirect('back');
        }

        //Check if user already exists
        if(user){
            return res.redirect('back');
        }

        User.create(req.body, (err, user) => {
            if(err){
                console.log('Error in creating user in signing up');
                return res.redirect('back');
            }

            if(user){
                console.log(req.body);
                return res.redirect('back');
            }
            return res.redirect('back');
        });
    });
}

module.exports.signIn = function(req, res){
    console.log(req.body);
}