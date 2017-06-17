/* ---------------------------------------------------------------------------

    Init PubNub and Get your PubNub API Keys:
    http://www.pubnub.com/account#api-keys ./node.js/pubnub.js

--------------------------------------------------------------------------- */

var pubnub = require("./node.js/pubnub.js").init({
    publish_key   : "demo-36",
    subscribe_key : "demo-36"
});
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pbss'
  //debug: false
});

/* ---------------------------------------------------------------------------
Listen for Messages
--------------------------------------------------------------------------- */



function subscribe(channel) {
    pubnub.subscribe({
        'channel' : channel,
        'connect' : function(c) {
            console.log('CONNECTED to ' + c);
        },
        'disconnect' : function(c) {
            console.log('CONNECTED to ' + c);
        },
        'reconnect' : function(c) {
            console.log('CONNECTED to ' + c);
        },
        'error' : function(e) {
            console.log('ERROR  ' + JSON.stringify(r));
        },
        'callback' : function(m,a,subscribed_channel,c,real_channel) {
			var dataku = JSON.stringify(m);
            console.log(dataku);
			var datamasuk=JSON.stringify(m); //"ALERT!HYK0009"
			console.log(datamasuk);
			var statusupd="";
			var datamasuk = datamasuk.substring(1, datamasuk.length-1); //ALERT!HYK0009
			console.log("datamasuk2 "+datamasuk);
			
			var isine = datamasuk.slice(0, 5);
			console.log("isine2 "+isine);
			
			var pengirim = datamasuk.substring(6, datamasuk.length); //HYK0009
			console.log("pengirim "+pengirim);
			var d = new Date();
			var waktune = d.toLocaleString();
			
			// if (isine ="ALIVE") {
				// statusupd = "0";
			// } else if (isine ="ALERT") {
				// statusupd = "1";
			// }
						
			
			connection.connect(function(err) {
			  //if (err) throw err;
			//  console.log("Connected!");
			  
			  var sql = "INSERT INTO inboxpub (pengirim, data) VALUES?";
			  var values=[[pengirim, datamasuk]];
			  connection.query(sql,[values], function (err, result) {
				if (err) throw err;
				 console.log("Number of array records inserted: " + result.affectedRows);
			  });
			  
			  //var sql = "UPDATE client SET notelp = ? WHERE idclient=?";
			  //var valuesnya=[[pengirim]];
			  connection.query('UPDATE client SET status = ? WHERE idclient=?', [isine,pengirim],function (err, result){
				if (err) throw err;
				console.log(result.affectedRows + " record(s) updated");
			  });
		
			});
			//connection.end();
			
			
			// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
  // if (error) throw error;

// });
			// connection.connect(function(err) {
			  // if (err) throw err;
			  // var sql = "UPDATE client SET status = '5' WHERE idclient = pengirim";
			  // connection.query(sql, function (err, result) {
				// if (err) throw err;
				// console.log(result.affectedRows + " record(s) updated");
			  // });
			// });
			
			
			// var post  = {
			  // pengirim: dataku,
			  // data: dataku
			// };

			// connection.query('INSERT INTO inboxpub VALUES ?', post, function (err, result) {
			  
			// });connection.end();
			// connection.connect();
			// connection.connect(function(err) {
			  // if (err) throw err;
			  // var sql = "UPDATE client SET status = '5' WHERE idclient = pengirim";
			  // connection.query(sql, function (err, result) {
				// if (err) throw err;
				// console.log(result.affectedRows + " record(s) updated");
			  // });
			// });
				
				 
				// console.log("Connected to Mysql");
				 
				// var yashwant = {
					// pengirim: dataku,
					// data: 'Yashwant',
				// };
				 
			
				 
				// var query = connection.query('INSERT INTO inboxpub SET ?', yashwant,
					// function(err, result) {
						// console.log(result);
					// });
				 
				// connection.end();
			
        }
    })
	//console.log(process.argv.slice(2));

}
subscribe("demo-361");


// var sql = mysql.format("SELECT url FROM Sonic_url WHERE name=?", [input]);
// var connection = connection.query(sql, function(err,rows,fields) {});

// ar mysql = require('mysql');

// var connection = mysql.createConnection({
  // host: 'cccc.net',
  // user: 'xxxxx_usr',
  // password: 'xxxxxxx',
  // database: 'name of your database goes here …'
// });

// var post  = {
  // srcUserID: userSrcID,
  // destUserID: msg.userid,
  // messageContent: msg.txt,
  // messageSendDate:sendDate
// };

// connection.query('INSERT INTO messages VALUES ?', post, function (err, result) {
  
// });
