const mongoose = require('mongoose');
require('dotenv').config()
// Define the MongoDB connections URL
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
//setting up connections
mongoose.connect(mongoURL ,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})
//get the default connection
//mongoose maintain a default connnection object representing the
// MongoDB connection

const db = mongoose.connection;

//define event listeners for database connection

db.on('connected' , ()=>{
    console.log('Connected to MongoDB server');
})

db.on('error' , (err)=>{
    console.log('MongoDb connection error :' ,err);
})

db.on('disconnected' , ()=>{
    console.log('MongoDB disconnected');
})

//Export the database connection
module.exports = db; //here db represents  the MongoDB connections