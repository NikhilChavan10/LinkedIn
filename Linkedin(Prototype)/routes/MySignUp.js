/**
 * New node file
 */
var ejs = require("ejs");
var mysql = require('./mysql');

exports.signup = function(req,res){
	var first=req.param("firstname");
	console.log("First Name:"+first);
	var second=req.param("lastname");
	console.log("Last Name:"+second);
	var three=req.param("emailid");
	console.log("Email:"+three);
	var fourth=req.param("password");
	console.log("Password:"+fourth);
	var joinUser="insert into signuptable values ('"+req.param("firstname")+"'"+","+"'"+req.param("lastname")+"'"+","+"'"+req.param("emailid")+"'"+","+"'"+req.param("password")+"'"+")";
	var addUser="insert into usersummary (username) values ("+"'"+req.param("emailid")+"'"+")";
	var addagainUser="insert into mytime (username) values ("+"'"+req.param("emailid")+"'"+")";
	console.log("Query is:"+joinUser);
	console.log("Query is:"+addUser);
	console.log("Query is:"+addagainUser);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid signup");
				console.log("from table signup");
				//res.redirect('/successSignIn');
				req.session.emailid=req.param("emailid");
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
									console.log("valid signup");
									console.log("from table signup");
									//res.redirect('/successSignIn');
							}  
						},addagainUser);
							console.log("valid signup");
							console.log("from table signup");
							//res.redirect('/successSignIn');
					}  
				},addUser);
				res.send({"login":"Success"});
		}  
	},joinUser);
	
};

exports.successSignup = function(req,res){
	console.log("sucess login");
	ejs.renderFile('./views/successSignup.ejs',function(err, result) {
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


exports.failLogin = function(req,res)
{
	console.log("fail login");
	ejs.renderFile('./views/failLogin.ejs',function(err, result) {
        // render on success
        if (!err) {
        	console.log("fail login function");
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};