const express = require('express');
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`This is port ${port}`)
})

app.get('/',(req,res)=>{
    res.write('<h1>Welcome to Homepage');
    res.send();
});

app.get('/tmp',(req,res)=>{
    res.send([{
        name:"Suryakant",
        age: 36
    }
    ])
})

app.get('/test',(req,res)=>{
    res.json([{
        id:1,
        name:'Suryakant'
    }])

})