import express from 'express' ;
const app = express() ;
const port = 4041 ;


app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`) ;
}) ;