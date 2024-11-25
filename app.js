
const express = require('express');
const ConnectDB = require("./db/config");
const routes = require("./routes/recipe");
require('dotenv').config();
const cors = require("cors")
const server = express();
const PORT = process.env.PORT;



server.use(cors());
server.use(express.json());

server.use("/api/v1/Recipes", routes);

const start = async () => {
    try {
        await ConnectDB();
        server.listen(PORT,() =>{
            console.log(`Server has started on ${PORT}`);
            
            })
    } catch (error) {
        console.log(error.message);
        
    }
}

start();
