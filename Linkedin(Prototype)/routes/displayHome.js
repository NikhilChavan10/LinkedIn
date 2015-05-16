var ejs = require("ejs");
var mysql = require('./mysql');

exports.display = function(req,res){
	var displayUser="select summary,username,education,experienceinfo,skills,mytime from usersummary where username='"+req.session.emailid+"'";
	console.log("Query is:"+displayUser);
	
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
				console.log("Can I get summary"+results[0].summary);
				console.log("Can I get education"+results[0].education);
				console.log("Can I get experience"+results[0].experienceinfo);
				console.log("Can I get skill"+results[0].skills);
				console.log("Can I get time"+results[0].mytime);
				console.log("Whats the email address"+req.session.emailid);
				res.send({"summary":results[0].summary,"education":results[0].education,"experience":results[0].experienceinfo,"skill":results[0].skills,"mytime":results[0].mytime,"username":results[0].username});
			}
			else {    
				console.log("Invalid Login");
			}
		}  
	},displayUser);
};


exports.displayinvites = function(req,res){
	var Userinvites="select username from connections where usernamereq='"+req.session.emailid+"'"+" AND statuscheck='notyet'";
	console.log("Query is:"+Userinvites);
	
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
				
				console.log("Result is and username is "+results[0].username);
				console.log("Whats the email address"+req.session.emailid);
				res.send(results);
			}
			else {    
				console.log("No invites");
				res.send({"myusername":"NoInvites"});
			}
		}  
	},Userinvites);
};


exports.displayconnect = function(req,res){
	var Userconnect="select usernamereq from connections where username='"+req.session.emailid+"'"+" AND statuscheck='accepted'";
	console.log("Query is:"+Userconnect);
	
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
				console.log("Will I get it +"+results);
				console.log("Whats the email address"+req.session.emailid);
				res.send(results);
					
				}
			else {    
				console.log("No invites");
				res.send({"myconnectname":"Noconnect"});
			}
		}  
	},Userconnect);
};
