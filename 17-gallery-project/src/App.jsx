import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)


const getData = async ()=>{


  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

  setUserData(response.data)
}

useEffect(function(){
  getData()
},[index])


let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 translate-x-1 translate-y-1 font-semibold'>Loading...</h3>
 
if(userData.length>0){
  printUserData = userData.map(function(elem,idx){
    return <div id={idx}>
      <Card elem={elem} />
    </div>
  })
}

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>


      {/* <button onClick={getData} className='bg-green-600 active:scale-95 mb-3 text-white px-5  py-2 rounded'>Get Data</button> */}
      
      {/* <div>
        {userData.map(function(elem,idx){
          return <h1>{idx+1}:- {elem.author}</h1>
        })}
      </div> */}
      <div className='flex h-[82%] flex-wrap gap-4 p-2 '>{printUserData}</div>

        <div className='flex justify-center items-center gap-6 p-4 '>
          <button 
          style={{opacity:index == 1?0.6:1}}
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}  className='bg-amber-400 text-black rounded py-2 px-4 text-sm font-semibold cursor-pointer active:scale-95 '>prev</button>
          <h4>page {index}</h4>
        <button onClick={()=>{
         setIndex(index+1)
         setUserData([])

          }} className='bg-amber-400 text-black rounded py-2 px-4 text-sm font-semibold ' >Next</button>
        </div>

    </div>
  )
}

export default App
