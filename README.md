# Simple program using Node js
## Introduction
I have created a simple program node js program which reads three inputs "name","address" and "phone". 

If the given data is inserted in mongodb database then it shows a reply "1 document inserted succesfully" message and the inserted data is stored in mongodb database.


## Information regarding database
![mongo compass](https://user-images.githubusercontent.com/53893437/67922672-a41c4f00-fb68-11e9-814b-337ea0ede0ad.PNG)


 Here i have created a database with database name as "test_no1" and created collection as "test_no1".
 
 ![Capture](https://user-images.githubusercontent.com/53893437/67924446-e7c58780-fb6d-11e9-91e9-569034019088.PNG)

 ## Program Informations..
 ```var url = "mongodb://localhost:27017/test_no1";```
 Here we are specifying what the database name is,and in which collection contained in the database should be loaded.
 
 ```var dbo = db.db("test_no1");```
 Here we are specifying which our collection is. When the program is loaded then ,the input data are loaded to the collection.
 
 ``` var myobj = { name: "web project ", address: "s3 mca",phone:"1234567890" };
  dbo.collection("test_no1").insertOne(myobj, function(err, res) {
 ```
 Here the input data name, address and pnone are inserted.The inserted data is stored in the database.
  
