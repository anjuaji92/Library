const express=require('express');
const app= new express;

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname+"/src/views/index.html");
});
app.listen(3333);
