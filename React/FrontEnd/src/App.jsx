import React, { useEffect, useState } from 'react'
// import Card from './components/Card'
// import Navbar from './components/Navbar'
import "./app.css"
// import Link1 from './components/Link1'
import Fashion from './components/Fashion'

function App() {
  const [books,setBooks]=useState([]) ;
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(data=>{
        setBooks(data) ;
    })
  },[])
  return (
    <div>
      {
        books.map((b,i)=>(
          <Fashion key={i} props={b}/>
        ))
      }
      
    </div>
  )
}

export default App
