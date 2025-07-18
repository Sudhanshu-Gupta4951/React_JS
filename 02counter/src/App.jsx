import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value, setValue] = useState(0) 

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    if (value === 20){
      setValue(value = 20)
    } else {
      setValue(value + 1)
    }
  }
  
  const removeValue =() => {
    if (value > 0){
      setValue(value - 1)
    } else {
      setValue(value = 0)
    }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {value}</h2>

     <button
     onClick = {addValue}
     >Add value {value}</button>
     <br />
     <button
     onClick = {removeValue}
     >Remove value {value}</button>
     <p>Footer: {value}</p>
    </>
  )
}

export default App
