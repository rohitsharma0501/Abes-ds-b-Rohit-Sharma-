import express from 'express' ;
const app = express() ;
const port = 4041 ;

//middleware
app.use(express.json())

// create array for store data
const students=[
    {
        id:1,
        nmae:"Aditya",
        class:"b.tech"
    }
]

app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`) ;
}) ;