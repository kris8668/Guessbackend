module.exports.getMovie = async function(){

console.log("database request is running");    

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://chaith86:karthi123@cluster0.7hhux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(url);


await client.connect();

const db = client.db("sample_mflix");

const result = await db.collection("movies").aggregate([{$sample:{size:1}}]).toArray();

client.close();

const item = JSON.stringify(result[0]);

return item;

};







 