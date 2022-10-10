import React, { useState } from "react"

function Hooks() {
  const [count, setCount] = useState(0);
  const [title, setTitle]= useState("")
  
  // const plus = () => {
  //   setCount(count+1)
  // }
  // const minus = () => {
  //   setCount(count-1)
  // }
 

  const addcount = (event) => {
    setCount(event.target.name == "Plus" ? count+1: count-1)
  }

  const changetitle = (event) => {
    setTitle(event.target.value)
  }
  return (
    <div>
      <h1>{count}</h1>
      <h1>{title}</h1>
      {/* <input onChange={({target:{value}}) => setTitle(value)} type="text" /> */}
      <input onChange={changetitle} type="text" />
      <button name="Plus" onClick={addcount}>+</button>
      <button name="Minus" onClick={addcount}>-</button>
    </div>
  )
}
export default Hooks