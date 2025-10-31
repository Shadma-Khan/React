import axios from 'axios';
import React, { useState } from 'react'



const App = () => {


  const [data, setData] = useState([])


// fetch API
// async function getData(){
//  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  console.log(response)
// }



// fetch ApI
//  const  getData =  async ()=>{
// const response = await fetch('https://jsonplaceholder.typicode.com/todos')

// const data = await response.json()

// console.log(data)

// }




// Axios API

const getData = async () =>{

  // step1
//  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   console.log(response.data)


// step2
// const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
//   console.log(data)


const response = await axios.get('https://jsonplaceholder.typicode.com/users')

console.log(response.data)
setData(response.data)
}




  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
      {data.map(function(elem,idx){
        return <h3>Hello, {idx} {elem.username}  </h3>
      })} 
      </div>
    </div>
  )
}

export default App
