var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');
var users = require('./routes/user');
var index = require('./routes/index');
var MySignIn = require('./routes/MySignIn');
var MySignUp = require('./routes/MySignUp');

var ConnectionViewAdd = require('./routes/ConnectionViewAdd');
var displayHome = require('./routes/displayHome');
var successSignup = require('./views/successSignup');
var displaySearch = require('./views/displaySearch');
var addConnection = require('./views/addConnection');
var connections = require('./views/connections');
var CreateProfile = require('./routes/CreateProfile');
var home = require('./views/home');
var homepage =require('./routes/homepage');
var app = express();
console.log('This is first');
// view engine setup
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
console.log('This is second');
var sess;
app.get('/', routes.index);
app.get('/users', users.list);

app.post('/MySignIn/signin',MySignIn.signin); 

app.post('/MySignUp/signup',MySignUp.signup); 

app.get('/home', MySignIn.home);

app.get('/homepage/signout',homepage.signout);
app.get('/failLogin', MySignIn.failLogin);

app.get('/LogOut', homepage.LogOut, function(req,res)	
		{
	req.session.destroy();
	console.log("Email their is "+req.session.emailid);
		}
);


console.log('This is third');
app.get('/successSignup', MySignUp.successSignup);
console.log('This is fourth');
app.post('/CreateProfile/profile',CreateProfile.profile); 
app.get('/homepage/edit', homepage.edit);
app.get('/display', displayHome.display);
app.get('/displayinvites', displayHome.displayinvites);
app.get('/displayconnect', displayHome.displayconnect);
app.get('/homepage/searchpage', homepage.searchpage);
app.get('/homepage/addpage', homepage.addpage);
app.get('/homepage/addpage', homepage.addpage);
app.get('/homepage/connectpage', homepage.connectpage);
app.get('/homepage/invitepage', homepage.invitepage);
app.get('/successAdd', homepage.successAdd);
app.get('/successinvite', homepage.successinvite);
app.get('/successconnect', homepage.successconnect);
app.get('/successSearch', homepage.successSearch);
app.post('/homepage/search', homepage.search);
app.post('/ConnectionViewAdd/add', ConnectionViewAdd.add);
app.post('/ConnectionViewAdd/accept', ConnectionViewAdd.accept);
app.get('/CreateProfile/DoneEdit',CreateProfile.DoneEdit);
app.put('/CreateProfile/addSummary',CreateProfile.addSummary);
app.put('/CreateProfile/addeducation',CreateProfile.addeducation);
app.put('/CreateProfile/addexperience',CreateProfile.addexperience);
app.put('/CreateProfile/addskill',CreateProfile.addskill);
console.log('This is fifth');
http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	    module.exports = app;
});

/// catch 404 and forwarding to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
