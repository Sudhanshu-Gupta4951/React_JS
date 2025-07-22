import { useState } from "react"

function App() {
  const [color, steColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
          onClick={ () => steColor("red")}
          className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={ () => steColor("green")}           
          className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor: "green"}}
          >green</button>

          <button
          onClick={ () => steColor("purple")}
          className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor: "purple"}}
          >purple</button>

          <button
          onClick={ () => steColor("yellow")}          
          className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor: "yellow"}}
          >yellow</button>

          <button
          onClick={ () => steColor("blue  ")}
          className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor: "blue"}}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
