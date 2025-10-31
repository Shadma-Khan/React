import React, { useState } from 'react'

const App = () => {


// with Array

// const [num, setNum] = useState([10,20,30])

const [num, setNum] = useState({user:'rishi', age:20})



const btnClicked = ()=>{

  // const newNum = [...num]
  // newNum.push('fiza')
  // setNum(newNum)
setNum(prev =>({...prev, user:'rohit', age:35}))


}

// const [num, setNum] = useState(10)

// const btnClicked=()=>{

// setNum(20)
// console.log(num)
// }


// with object
// const [num, setNum] = useState({user:'Eliza', age:20})

// const btnClicked = ()=>{
//   // console.log(num.user)
//     // console.log(num.age)

// const newNum={...num}
// newNum.user='aman'
// newNum.age=30
// setNum(newNum)

// }





  return (
    <div>
      {/* for Array */}
      {/* <h1>{num}</h1> */}


      {/* for object */}
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      
    </div>
  )
}

export default App