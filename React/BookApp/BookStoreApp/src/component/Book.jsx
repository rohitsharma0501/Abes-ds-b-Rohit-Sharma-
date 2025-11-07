import React from 'react'
import "./Book.css"
import { useState } from 'react'

function Book({name, price, img}) {
    const [count,setCount]= useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }

  return (
    <div id='book'> 
     <img src={img}  height={200} />
     <h1>Title:{name}</h1>
     <h1>Price:{price}</h1>
     <button onClick={decrement}>-</button>
     <span>{count}</span>
     <button onClick={increment}>+</button>

    </div>
  )
}

export default Book
