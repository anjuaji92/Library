const express=require('express');
const app= new express;
app.get('/',function(req,res){
    res.sendFile(__dirname+"/src/views/index.html");
});
app.listen(5000);
