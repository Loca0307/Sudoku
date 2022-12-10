/**
 * Web Atelier 2022  
 *
 * Student:Kirustika Mohanathas, Luca Beltrami
 *
 *
 */


const mongodb = require('mongodb');
const mongodb_uri = 'mongodb://127.0.0.1:27017/';
const client = new mongodb.MongoClient(mongodb_uri);
const db_name = 'web-atelier-project';


const collection_names = ['high_scores', 'usernames'];

const model = {};

console.log("Connecting to mongodb server");

client
    .connect()
    .then(client => {
        console.log("Connected to mongodb server");

        model.db = client.db(db_name);
        collection_names.forEach(c=>{
            model[c] = model.db.collection(c);
        })

    }) 
    .catch(err => console.error(err));


model.Id = mongodb.ObjectId;    //creating the id of the database
exports.model = model; 