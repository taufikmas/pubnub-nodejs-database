
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pbss";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { status: "alive" };
  db.collection("tb_client").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 