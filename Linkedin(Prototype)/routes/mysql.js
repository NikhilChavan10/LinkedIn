var ejs= require('ejs');
var mysql = require('mysql');


function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'NikhilChavan',
	    database : '273'
	});
	return connection;
}


function Pool(num_conns)
{
    this.pool = [];
    for(var i=0; i < num_conns; ++i)
    	{
        this.pool.push(getConnection());
    	}
       this.last = 0;
}
var p = new Pool(25);

Pool.prototype.get = function()
{
    var cli = this.pool[this.last];
    this.last++;
    if (this.last === this.pool.length) 
    	{
       this.last = 0;
    	}
    return cli;
};


function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
		
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			var row=rows;
			console.log("DB Results:"+row[0]);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	

exports.fetchData=fetchData;