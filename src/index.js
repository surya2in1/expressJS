const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// set template engine
app.set("view engine","hbs");// you can use ejs, pub

// staticPath
const templatePath = path.join(__dirname,'../templates');
app.set("views",templatePath);

/* create partials */
const hbs = require('hbs');
const partialPath = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialPath);

app.get("/about",(req,res)=>{
    res.render('about',{aboutVar:"Suryakant"}); //pointing to templates->about.hbs 
})

app.get("",(req,res)=>{
    res.render("index",{channelName:"Surya"}); // pointing to templates->index.hbs 
});

app.get('/about/*',(req,res) => {
    res.render('404',{
        "errorcomment": "Ops not found"
    });
})

