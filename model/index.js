/**
 * Web Atelier 2022  
 *
 * Student:Kirustika Mohanathas, Luca Beltrami
 *
 *
 */


const mongodb = require('mongodb');
const mongodb_uri = 'mongodb://127.0.0.1:27017/';
//const mongodb_uri = 'mongodb+srv://db_user:mF14Cac1Jfvg2wZz@cluster0.x6zd3.mongodb.net/Feedback?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(mongodb_uri);
const db_name = 'web-atelier-project';


const collection_names = ['high_scores', 'usernames', 'multi_high_scores'];

const model = {};

console.log("Connecting to mongodb server");

client
    .connect()
    .then(client => {
        console.log("Connected to mongodb server");

        model.db = client.db(db_name);
        collection_names.forEach(c =>{
            model[c] = model.db.collection(c);  
        })

    }) 
    .catch(err => console.error(err));



exports.model = model;

