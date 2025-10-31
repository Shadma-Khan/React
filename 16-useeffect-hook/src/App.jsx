import React, { useEffect, useState } from 'react'

const App = () => {

        {/* example 1 */}

// const [num, setNum] = useState(1)
// const [num2, setnum2] = useState(100)

// useEffect(function(){

//   console.log('running...')
// },[num])


      {/* example 2 */}

      const [a, setA] = useState(0)
      const [b, setB] = useState(0)

      function aChanging(){
        console.log('A ki value change ho gyi')
      }

      function bChanging(){
        console.log('B ki value change ho gyi')
      }

      useEffect(function(){
        aChanging(a)
      },[a])

      useEffect(function(){
        bChanging(b)
      },[b])

  return (
    <div>


      {/* example 1 */}
      
{/* <h1>value of num is {num}</h1>
<h1>value of num2 is {num2}</h1>
<button onClick={()=>{
  setNum(num+1)
}} onDoubleClick={()=>{
  setnum2(num2+100)
}}>Click</button> */}


      {/* example 2 */}
<h1>A is {a}</h1>
      <button onClick={()=>{
       setA(a+1) 
      }}>ChangeA</button>

<h1>B is {b}</h1>
      <button onClick={()=>{
        setB(b-1)
      }}>ChangeB</button>


    </div>
  )
}

export default App
