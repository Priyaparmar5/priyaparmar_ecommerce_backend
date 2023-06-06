const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//const mysql = require("mysql2");

const db = require("./models");

const router = require("./routes/customer.routes")

app.use('/api/',router)
//
// app.post("/insert",(req,res)=>{
//     db.
// })

db.sequelize.sync({force:true}).then((req)=>{
app.listen(3000,()=>{
    console.log("server is running...");
    });
});