
module.exports.home = function(req, res){
    // return res.render('home', {title: 'Home Page', fileName: 'home.css'});
    return res.render('home', {title: 'Home Page'});
    //return res.end('<h1>This is the home page</h1>');
}

module.exports.signUp = function(req, res){
    console.log(req.body);
}

module.exports.signIn = function(req, res){
    console.log(req.body);
}