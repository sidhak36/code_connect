
const User = require('../models/user');

module.exports.profileController = function(req, res){
    // return res.render('user_profile', {
    //     title: 'Profile Page',
    //     fileName: 'user_profile.css'
    // });
    if(!req.cookies.user_id){
        return res.redirect('/');
    }
    User.findById(req.cookies.user_id, (err, user)  =>  {
        if(err){
            console.log('Error while finding user by session user id');
            return res.redirect('/');
        }

        if(user){
            //Handle user found by id stored in session cookie
            return res.render('user_profile', {
                title: 'Profile Page',
                email: user.email,
                name:  user.name,
                authenticated: true
            });
            //return res.end('<h1>This is User\'s profile');
        }
        //Handle user not found by id stored in session cookie
        return res.redirect('/');
    });
}