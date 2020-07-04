
const User = require('../models/user');
module.exports.home = function(req, res){
    
    console.log(req.session);
    // return res.render('home', {title: 'Home Page', fileName: 'home.css'});
    
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, (err, user) => {
            if(err){
                console.log('Error occured while finding user');
                return res.render('home', {
                    title: 'Home Page',
                    authenticated: false
                });
            }
            if(user){
                return res.render('home', {
                    title: 'Home Page', 
                    authenticated: true
                });
            }else{
                return res.render('home', {
                    title: 'Home Page',
                    authenticated: false
                });
            }
        });
    }else{
        return res.render('home', {
            title: 'Home Page',
            authenticated: false
        });
    }
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
    //steps to authenticate
    //find the user
    User.findOne({email: req.body.email}, (err, user) => {
        if(err){
            console.log('An error occured while finding the user');
            res.redirect('back');
        }

        //Handle user if found
        if(user){
            //Create Session
            if(user.password === req.body.password){
                //startSession
                req.session.user_id = user.id;
                res.cookie('user_id', user.id);
                return res.redirect('/users/profile');
            }else{
                //Handle password which doesn't match
                return res.redirect('back');
            }
        }
        //Handle user not found
        res.redirect('back');
    })
}


module.exports.signOut = function(req, res){
    if(req.cookies.user_id){
        req.session.destroy(function(err){
            if(err){
                console.log(err);
            }
        });
        res.clearCookie('user_id');
    }
    res.redirect('/');
}

