const mongodb= require('mongodb')


const MongoClient = mongodb.MongoClient;
// const  mongoDbUrl = process.env.MONGODB_URL;
const  mongoDbUrl = "mongodb+srv://Ali:themongodbproject1@cluster0.fez9ymq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;


let _db;

const initDb = callback => {
 if(_db){
    console.log('Database already initialized!')
    return callback(null,_db);
 }
 MongoClient.connect(mongoDbUrl)
  .then(
    client=>{
        console.log(" MongoDB connected successfully.");
        _db = client;
        callback(null,_db)

    }
  ).catch(err=> {
    console.error('Database connection failed!',err.message);
    callback(err);
   })
};
const getDb = () => { 
    if(!_db){
        throw Error('Database not initialized!');
    }
    return _db;
} 
module.exports = {
    initDb,
    getDb
};