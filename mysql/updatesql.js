var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pbss"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE client SET status = '0' WHERE idclient = 'BYK0002'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});