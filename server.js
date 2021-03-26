const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
const url = "mongodb://127.0.0.1:27017/superprocure"; // local host database name

mongoose.connect(url, { useNewUrlParser: true });

// data schema and model
const nutSchema = {
    institutionname: String,
    branchname: String,
    address:String,
    city:String,
    contactnumber:String,
    branchincharge:String,
    pincodes:Number,
    username: String,
    password:String
}

const Nut = mongoose.model("Nut", nutSchema)


//API routes
app.get("/nuts", function(req, res){
    Nut.find().then(posts => res.json(posts))
})

app.listen(port, function(){
    console.log("express is running");
})

