
const mongoose = require("mongoose");
require('dotenv').config()

const DATABASEURL = process.env.DATABASEURL;

const ConnectDB = async() =>{
    try {
       await mongoose.connect(DATABASEURL)
        console.log('Database is connected sucessfully');
        
    } catch (error) {
       console.log(`${error.message} done`);
        
    }
   
}


module.exports = ConnectDB;
