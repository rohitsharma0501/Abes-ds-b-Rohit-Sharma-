// import express from 'express' ;
const express = require('express') ;
const app = express() ;
const port = 8080;

app.get('/',(req,res)=>{
    res.send("This is my first server") ;
});
app.get('/about',(req,res)=>{
    const students =[
        {
            id:1,
            name:"rohit",
            class:"10"
        },
        {
            id:2,
            name:"deepak",
            class:"10"
        },
        {
            id:3,
            name:"shubham",
            class:"10"
        },
        {
            id:4,
            name:"rashu bambhosda",
            class:"10"
        },
        {
            id:5,
            name:"vivek",
            class:"10"
        }
    ];
    res.send(students) ;
});

app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`) ;
}) ;