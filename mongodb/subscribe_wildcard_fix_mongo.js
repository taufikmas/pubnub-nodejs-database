/* ---------------------------------------------------------------------------

    Init PubNub and Get your PubNub API Keys:
    http://www.pubnub.com/account#api-keys node_modules/pubnub/dist/web/pubnub.js
./../pubnub.js
--------------------------------------------------------------------------- */

var pubnub = require("./node.js/pubnub.js").init({
    publish_key   : "demo-36",
    subscribe_key : "demo-36"
});
//var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pbss";

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
            var datamasuk=JSON.stringify(m); //"ALERT!HYK0009"
			console.log(datamasuk);
			var isine = datamasuk.substring(1, 6);
			var datamasuk = datamasuk.substring(1, datamasuk.length-1); //ALERT!HYK0009
			var pengirim = datamasuk.substring(6, datamasuk.length); //
			console.log(datamasuk);
			var d = new Date();
			var waktune = d.toLocaleString();
			console.log(datamasuk);
			
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var myobj = [
					{ data: datamasuk, sender: pengirim, time: waktune, val: isine}
				  ];
			  db.collection("tb_inboxpub").insert(myobj, function(err, res) {
				if (err) throw err;
				console.log("Number of records inserted: " + res.insertedCount);
				db.close();
			  });
			}); 
			
			MongoClient.connect(url, function(err, db) {
			  if (err) throw err;
			  var myquery = { "idc": pengirim };
			  var newvalues = {$set: { statuse: isine}};
			//  db.tb_client.update({idc: 'TYK0001'}, { $set: { statuse: "ALERT"}}, false, true);

			  db.collection("tb_client").update(myquery, newvalues, function(err, res) {
				if (err) throw err;
				console.log(res.result.nModified + " record updated");
				db.close();
			  });
			}); 
			
			
        }
    })
}
subscribe("demo-361");
//console.log(process.argv.slice(2));

// db.tb_client.update(
  // { "idc" : "BYK0001" },
  // { $set: { "status": "Alert" } }
// )

//db.tb_client.update({idc: 'TYK0001'}, { $set: { status: "ALERT"}}, false, true);
