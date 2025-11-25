import { useEffect, useState } from 'react'
import './App.css' 
import Weather from './components/Weather' 

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{

  },[])

  return (
    <>
      <div>
        <Weather/>
      </div>
    </>
  )
}

export default App
