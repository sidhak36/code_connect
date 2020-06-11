

module.exports.profileController = function(req, res){
    return res.render('user_profile', {
        title: 'Profile Page'
    });
    //return res.end('<h1>This is User\'s profile');
}