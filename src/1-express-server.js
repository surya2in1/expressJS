const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(port, () => {
    console.log('Express Listening Port ${port}');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
})

app.get('/temp',(req,res)=>{
    res.send("Temp page");
})

/* Run: nodemon app.js
Go to webbrowser and access webpage : http://localhost:3000/
You will get Hello World printed on web browser
*/

