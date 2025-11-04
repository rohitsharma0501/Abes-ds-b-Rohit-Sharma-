import React from 'react'
import { useState } from 'react'

function Count1() {
    const [count, setCount]= useState(0);
    const increment=()=>{
        setCount(count+1);
        

    }
    const decrement=()=>{
        setCount(count-1)

    }
     
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        
        
      
    </div>
  )
}

export default Count1
