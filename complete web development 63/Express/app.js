//tut 70, tut71 , tut72

const express = require('express')
const path = require('path')

const app = express();
const port = 80;

// for serving static files
app.use('/static', express.static('static'))

//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

//pur pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo',{title: 'Hey Harry', message: 'Hello there and thanks to telling me how to use PUBG!'})
})

app.get("/" ,(req, res)=>{
    res.status(200).send("This is homepage of my first express app with harry");
});

app.get("/about" ,(req, res)=>{
    res.send("This is about page of my first express app with harry");
});

app.get("/this" ,(req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.post("/about" ,(req, res)=>{
    res.send("This is a post request about page of my first express app with harry");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


//cd express --> nodemon app.js -->nodemon works
//use code . to open folder in new vs code 