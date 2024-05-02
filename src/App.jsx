import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const inc=()=>{
setCount(count+1)
}

const dec=()=>{
  setCount(count-1)
}
  return (
    <>
     <h1>Counter</h1>
     <h2>{count}</h2>
     <button className='red' onClick={inc}>Increment</button>
     <button className='green' onClick={dec}>Decrement</button>
    </>
  )
}

export default App
