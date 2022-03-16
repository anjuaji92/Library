const express=require('express');
const app =express;
app.get('/',function(req,res){
    res.sendFile(__dirname+"/src/views/index.html");
});
app.listen(5000);