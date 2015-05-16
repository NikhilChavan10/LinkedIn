var ejs = require("ejs");
var mysql = require('./mysql');


exports.signin = function(req,res){
		console.log("Hello first");
	
		console.log("first value:");

		var first=req.param("emailid");
		console.log("Email:"+first);
		var second=req.param("passwordNow");
		console.log("Password:"+second);
		
		
		
		
		
		var getUser="select * from signuptable where username='"+req.param("emailid")+"'";
		console.log("Query is:"+getUser);
		
		
		
		
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
					console.log("Can I get"+results[0].password);
					req.session.emailid=req.param("emailid");
					console.log("Whats the email address"+req.session.emailid);
					if(req.param("passwordNow")===results[0].password)
						{
						var date=new Date();
						var hour = date.getHours();
						var min  = date.getMinutes();
						var sec  = date.getSeconds();
						var year = date.getFullYear();
						var month = date.getMonth() + 1;
						var day  = date.getDate();
						
						console.log("Date is "+date);
						req.session.date="Time:"+hour+":"+min+":"+sec+", Date:"+month+"/"+day+"/"+year;
						console.log("Session date is "+req.session.date);
						res.send({"login":"Success"});
						}
					else
						{
						res.send({"login":"Fail"});
						}
				}
				else {    
					
					console.log("Invalid Login");
					res.send({"login":"Fail"});
				}
			}  
		},getUser);
};


exports.home = function(req,res){
	console.log("success login");
	
	ejs.renderFile('./views/home.ejs',function(err, result) {
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
	ejs.renderFile('./views/index.ejs',function(err, result) {
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

