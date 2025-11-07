import React from 'react'
import './App.css'
import Book from './component/Book'
import Navbar from './component/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <h1 id="header">BookApp</h1>
    <div className="container">
    <Book name="Physics" price="$50" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlfTefCBkY0ZmUkXI41bAQ0lj_ZzR33fPEA&s"/>
    <Book name="Mathematics" price="$40" img="https://static.vecteezy.com/system/resources/thumbnails/000/476/279/small/1609.i029.021.S.m005.c15.mathematic_science_illustration.jpg"/>
    <Book name="Chemistry" price="$31" img="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781137610379.jpg"/>
    <Book name="CS" price="$45" img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg"/>
    </div>
     
    </>
  )
}

export default App
