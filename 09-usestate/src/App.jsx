import React from 'react'
import { useState } from 'react'


const App = () => {

  // const [num, setNum] = useState(10)
  // const [name, setName] = useState("Eliza")

  // function changeValue(){
  //   setNum(20)
  //   setName('Shadma')
  // }

  const [num, setNum] = useState(0)

function increase(){
setNum(num+1)
}

function decrease(){
setNum(num-1)
}

function jump5Num(){
  setNum(num+5)
}

function jumpbyMinu5(){
setNum(num-5)
}


  return (
    <div>
      {/* <h1>value of num is {num}</h1>
      <h1>my name is {name}</h1>
      <button onClick={changeValue}>Click</button> */}


          <h1>{num}</h1>
          <button onClick={increase}> increase</button>
          <button onClick={decrease}> decrease</button>
          <button onClick={jump5Num}>jump by 5</button>
          <button onClick={jumpbyMinu5} >jump by -5</button>

    </div>
  )
}

export default App