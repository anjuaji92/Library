const express=require('express');
const app= new express;
//var path = require('path');

//app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');
app.set('views','./src/views')
app.get('/',function(req,res){
    res.render("index",{title:'library'});
});
app.listen(5000);
