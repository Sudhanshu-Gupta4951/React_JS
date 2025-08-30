import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>learn abot reducx tool kit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
