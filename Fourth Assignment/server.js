var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://mongodb:passwordmongodb@cluster0.vonlclx.mongodb.net/?retryWrites=true&w=majority';


////Create database and collection
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("assignment4");
dbo.createCollection("student", function(err, res)
{
if (err) throw err;
console.log("Collection created!");
db.close();
});
});


////Insert records
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     var myobj = [
//         {rollno: 1, name: "Somphors Yun", branch: "Finance"},
//         {rollno: 2, name: "Sreylin Chey", branch: "Salon"},
//         {rollno: 3, name: "Hongly Phal", branch: "Cooking"}];
//     dbo.collection("student").insertMany(myobj, function(err,
//     res) {
//     if (err) throw err;
//     console.log("Records inserted");
//     db.close();
//     });
//     });


////Add new column
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     dbo.collection('student').update({}, {$set:{"class":null}}, function(err,
//     res) {
//     if (err) throw err;
//     console.log("New column added");
//     db.close();
//     });
//     });


////Delete a record
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     var myquery = { rollno: 1};
//     dbo.collection("student").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 record deleted");
//     db.close();
//     });
//     });


////Drop column 
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     dbo.collection("student").updateMany({}, {$unset:{"branch":""}}, function(err, obj) {
//     if (err) throw err;
//     console.log("Column deleted");
//     db.close();
//     });
//     });


////Delete all records
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     dbo.collection("student").deleteMany({}, function(err, obj) {
//     if (err) throw err;
//     console.log("Deleted all records");
//     db.close();
//     });
//     });


////Delete table
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("assignment4");
//     dbo.collection("student").drop(function(err, obj) {
//     if (err) throw err;
//     console.log("Table deleted");
//     db.close();
//     });
//     });





