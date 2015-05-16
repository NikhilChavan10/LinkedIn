var ejs = require("ejs");
var mysql = require('./mysql');

exports.profile = function(req,res){
	var first=req.param("summary");
	console.log("summary:"+first);
	var second=req.param("education");
	console.log("education:"+second);
	var three=req.param("experience");
	console.log("experience:"+three);
	var fourth=req.param("skills");
	console.log("skills:"+fourth);
	var five=req.session.emailid;
	console.log("emailid:"+five);
	var createprofile="insert into userinformation values ('"+req.param("summary")+"'"+","+"'"+req.param("education")+"'"+","+"'"+req.param("experience")+"'"+","+"'"+req.param("skills")+"'"+","+"'"+five+"'"+")";
	console.log("Query is:"+createprofile);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid profile setup");
				console.log("from table userinfo");
				//res.redirect('/successSignIn');
				res.send({"login":"Success"});
		}  
	},createprofile);
};

exports.addSummary = function(req,res){
	var first=req.param("summarytext");
	console.log("summary:"+first);
	var five=req.session.emailid;
	console.log("emailid:"+five);
	var createprofile="update usersummary set summary='"+req.param("summarytext")+"'"+" where username='"+five+"'";
	console.log("Query is:"+createprofile);
	
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid profile setup");
				console.log("from table usersummary");
				//res.redirect('/successSignIn');
				
				res.send({"login":"Success"});
		}  
	},createprofile);
};

exports.addeducation = function(req,res){
	var first=req.param("school");
	console.log("school:"+first);
	var second=","+req.param("date1");
	console.log("date1:"+second);
	var third="-"+req.param("date2");
	console.log("date2:"+third);
	var fourth=","+req.param("degree");
	console.log("degree:"+fourth);
	var five=","+req.param("fieldstudy");
	console.log("fieldstudy:"+five);
	var six=","+req.param("grades");
	console.log("grades:"+six);
	var seven=first+second+third+fourth+five+six;
	console.log("Query will be of "+seven);
	var email=req.session.emailid;
	console.log("emailid:"+email);
	var createprofilenow="update usersummary set education='"+seven+"'"+" where username='"+email+"'";
	console.log("Query is:"+createprofilenow);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid profile setup");
				console.log("from table usersummary");
				//res.redirect('/successSignIn');
				
				res.send({"login":"Success"});
		}  
	},createprofilenow);
};




exports.addexperience = function(req,res){
	var first=req.param("companyname");
	console.log("companyname:"+first);
	
	var second=","+req.param("title");
	console.log("title:"+second);
	var third=","+req.param("location");
	console.log("location:"+third);
	var fourth=","+req.param("date1");
	console.log("date1:"+fourth);
	var five=" "+req.param("year1");
	console.log("year1:"+five);
	var six="-"+req.param("date2");
	console.log("date2:"+six);
	var seven=" "+req.param("year2");
	console.log("year2:"+seven);
	var eight=","+req.param("description");
	console.log("description:"+eight);
	var nine=first+second+third+fourth+five+six+seven+eight;
	console.log("Query will be of "+nine);
	var email=req.session.emailid;
	console.log("emailid:"+email);
	var createprofileexp="update usersummary set experienceinfo='"+nine+"'"+" where username='"+email+"'";
	console.log("Query is:"+createprofileexp);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid profile setup");
				console.log("from table usersummary");
				//res.redirect('/successSignIn');
				
				res.send({"login":"Success"});
		}  
	},createprofileexp);
};


exports.addskill = function(req,res){
	var first=req.param("skilltext");
	console.log("skill:"+first);
	var five=req.session.emailid;
	console.log("emailid:"+five);
	var createprofileskill="update usersummary set skills='"+req.param("skilltext")+"'"+" where username='"+five+"'";
	console.log("Query is:"+createprofileskill);
	
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
				console.log("valid profile setup");
				console.log("from table usersummary");
				//res.redirect('/successSignIn');
				
				res.send({"login":"Success"});
		}  
	},createprofileskill);
};


exports.DoneEdit = function(req,res){
	console.log("edit out pls");
	console.log(" email  their is  " +req.session.emailid);
	//
	console.log("Is email still their"+req.session.emailid);
	ejs.renderFile('./views/home.ejs',function(err, result) {
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
