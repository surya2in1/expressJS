const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// set template engine
app.set("view engine","hbs");// you can use ejs, pub

app.get("",(req,res)=>{
    res.render("index",{channelName:"Surya"}); // pointing to views->index.hbs 
});