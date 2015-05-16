/**
 * New node file
 */
var ejs = require("ejs");
var mysql = require('./mysql');

exports.signout = function(req,res){
	console.log("Log out pls");
	console.log(" email  their is  " +req.session.emailid);
	
	console.log("Is email still their"+req.session.emailid);
	ejs.renderFile('./views/index.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logout function");
        	console.log("Is email still their"+req.session.emailid);
        	res.send({"login":"Success"});
        	
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
            res.send({"login":"Failure"});
        }
        });
};


exports.LogOut = function(req,res){
	console.log("sucess logout");
	var inserttime="update usersummary set mytime='"+req.session.date+"' where username='"+req.session.emailid+"'";
	console.log("Query is "+inserttime);
	ejs.renderFile('./views/index.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logging out function");
      
        	console.log("Is email still their"+req.session.emailid);
        	mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
						console.log("valid time to insert");
						console.log("from table signup");
						//res.redirect('/successSignIn');
				}  
			},inserttime);
        	res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
        });
};

exports.search = function(req,res){
	var searchUser="select firstname,lastname from signuptable where username='"+req.param("userid")+"'";
	console.log("Query is:"+searchUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				console.log("fetchdata");
				//res.redirect('/home');
				console.log("Can I get firstname"+results[0].firstname);
				console.log("Can I get lastname"+results[0].lastname);
				console.log("Whats the email address"+req.session.emailid);
				res.send({"firstname":results[0].firstname,"lastname":results[0].lastname});
			}
			else {    
				console.log("Invalid Login");
				res.send({"login":"failure"});
			}
		}  
	},searchUser);
};


exports.searchpage = function(req,res){
	console.log("sucess logout");
	ejs.renderFile('./views/displaySearch.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logging out function");
      
        	console.log("Is email still their"+req.session.emailid);
        	res.send({"login":"Success"});
        }
        // render or error
        else {
        	res.send({"login":"failure"});
        	console.log(err);
        }
        });
};


exports.successSearch = function(req,res){
	console.log("sucess login");
	ejs.renderFile('./views/displaySearch.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success login function");
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
        });
};

exports.connectpage = function(req,res){
	console.log("sucess logout");
	ejs.renderFile('./views/connections.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logging out function");
      
        	console.log("Is email still their"+req.session.emailid);
        	res.send({"login":"Success"});
        }
        // render or error
        else {
        	res.send({"login":"failure"});
        	console.log(err);
        }
        });
};


exports.successconnect = function(req,res){
	console.log("sucess login");
	ejs.renderFile('./views/connections.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success login function");
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
        });
};







exports.addpage = function(req,res){
	console.log("sucess logout");
	ejs.renderFile('./views/addConnection.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logging out function");
      
        	console.log("Is email still their"+req.session.emailid);
        	res.send({"login":"Success"});
        }
        // render or error
        else {
        	res.send({"login":"failure"});
        	console.log(err);
        }
        });
};


exports.successAdd = function(req,res){
	console.log("sucess login");
	ejs.renderFile('./views/addConnection.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success login function");
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
        });
};


exports.invitepage = function(req,res){
	console.log("sucess logout");
	ejs.renderFile('./views/inviteConnection.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success logging out function");
      
        	console.log("Is email still their"+req.session.emailid);
        	res.send({"login":"Success"});
        }
        // render or error
        else {
        	res.send({"login":"failure"});
        	console.log(err);
        }
        });
};


exports.successinvite = function(req,res){
	console.log("sucess login");
	ejs.renderFile('./views/inviteConnection.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success login function");
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
        });
};







exports.edit = function(req,res){
	console.log("edit out pls");
	console.log(" email  their is  " +req.session.emailid);
	//
	console.log("Is email still their"+req.session.emailid);
	ejs.renderFile('./views/successSignup.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("success edit function");
        	res.send({"login":"Success"});
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
            res.send({"login":"Failure"});
        }
        });
};

