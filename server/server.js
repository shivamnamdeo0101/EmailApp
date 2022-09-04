const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors");
var nodemailer = require('nodemailer');
const fs = require('fs')
const multer = require('multer')



const app = express(); 


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}));



var to;
var subject;
var body;
var path

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).single("image"); //Field name and max count

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})




app.post('/sendemail',(req,res) => {
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return res.end("Something went wrong!...");
        }else{
            to = req.body.to
            subject = req.body.subject
            body = req.body.subject
            path = req.file.path
            console.log(to)
            console.log(subject)
            console.log(body)
            console.log(req.file)
            console.log(req.files)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'sonallashkare@linkties.com',
                  pass: 'Dabba16#'
                }
              });
              
              var mailOptions = {
                from: 'sonallashkare@linkties.com',
                to: to,
                subject:subject,
                text:body,
                attachments: [
                  {
                   path: path
                  }
               ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  fs.unlink(path,function(err){
                    if(err){
                        return res.end(err)
                    }else{
                        console.log("deleted")
                        return res.redirect('/result.html')
                    }
                  })
                }
              });
        }
    })
})



//database connection
require("./mongo")

//Models
require("./model/User");
require("./model/Contact");

//Middleware
app.use(bodyParser.json())
    .use(morgan());

  
//Routes
app.use("/users", require("./routes/users"))

app.listen(3001, function () {
    console.log("Server is running on port 3001");
})
