var ejs = require("ejs");
var mysql = require('./mysql');

exports.add = function(req,res){
	var addUser="insert into connections (username,usernamereq,statuscheck) values('"+req.session.emailid+"'"+","+"'"+req.param("userid")+"'"+","+"'notyet"+"')";
	
	
	console.log("Query is:"+addUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				res.send({"login":"success"});
		}  
	},addUser);
};


exports.accept = function(req,res){
	var connectUser="insert into connections (username,usernamereq,statuscheck) values('"+req.session.emailid+"'"+","+"'"+req.param("usernameaccept")+"'"+","+"'accepted"+"')";
	console.log("Query is:"+connectUser);
	var acceptUser="update connections set statuscheck = 'accepted' where usernamereq='"+req.session.emailid+"'"+" AND username='"+req.param("usernameaccept")+"'";
	console.log("Query is:"+acceptUser);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
					console.log("accept query run");
					
				}  
			},acceptUser);
			console.log("connect query run");
			res.send({"login":"success"});
		}  
	},connectUser);
};