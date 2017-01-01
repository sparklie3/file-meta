var express = require("express");
var app = express();
var mongodb = require("mongodb");
const mongodb_url = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/data';
//product db collection = "file-meta-db";
var multer = require('multer')
var upload = multer({
    dest: 'uploads/'
})



app.use(express.static('public'));
app.get('/', function(req, res) {
    //res.send('hi');
    res.sendFile('index.html', {
        root: __dirname
    })
    res.end();
})


app.post('/', upload.single('uploadedFile'), function(req, res, next) {
    console.log(req.file.size);

    res.send(req.file);
    res.end();
    // req.body will hold the text fields, if there were any 
})

/*
User Story: I can submit a FormData object that includes a file upload.

User Story: When I submit something, I will receive the file size in bytes within the JSON respons
*/


app.listen(process.env.PORT, function() {
    console.log("Server listening on: " + process.env.PORT);
});
