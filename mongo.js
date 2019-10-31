var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test_no1";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test_no1");
  var myobj = { name: "web project ", address: "s3 mca",phone:"1234567890" };
  dbo.collection("test_no1").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted succesfully");
    db.close();
  });
});

