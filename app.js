const express = require("express");
const bodyParser = require("body-parser");
const { getDate } = require("./date");
const date = require(__dirname + "/date.js");
const app = express();


let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/" , function(req, res){
 
    let day = getDate();

res.render("list" , {listTitle: day, newListItems: items});


});

app.post("/" , function(req,res){

let item = req.body.newItem;
items.push(item);
res.redirect("/");

});

app.listen(process.env.PORT || 3000 , function(){   
    console.log("server started on port 3000");
});