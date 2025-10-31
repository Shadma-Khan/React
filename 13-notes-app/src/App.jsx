import React, { useState } from 'react'
 import { X } from 'lucide-react';

const App = () => {
const [title, setTitle] = useState('')
const [detail, setDetail] = useState('')
const [task, setTask] = useState([])

const submitHandler = (e)=>{
  e.preventDefault();
  // console.log(`Note Title is (${title}) and this is details of Note ( ${detail} )`)


  const copyTask =[...task];

  copyTask.push({title,detail})

  setTask(copyTask)

  setTitle('')
  setDetail('')

}

const deleteNote =(idx)=>{
  const copyTask = [...task]
copyTask.splice(idx,1)

setTask(copyTask)
}


  return (
    <div className='h-screen lg:flex bg-white text-black '>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2  items-start flex-col gap-4  p-10'>
              <h1 className='text-3xl font-bold'>Add Notes</h1>

             <input className='font-medium px-5 py-2 w-full  border-2 rounded' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e)=>{
              setTitle(e.target.value)
             }} />

        <textarea className='font-medium px-5 py-2 w-full h-32
         border-2 rounded' type="text" placeholder='write details' value={detail} onChange={(e)=>{
          setDetail(e.target.value)
         }}  />  
         <button className='bg-black active:bg-red-900 w-full text-white px-5 py-2  rounded'>Add Notes</button>
         
        </form>
<div className=' lg:w-1/2 p-10 lg:border-l-2'>
<h1 className='text-4xl font-bold'>Recent Notes</h1>
  <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>
   {task.map(function(elem,idx){
    return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl pt-9 pb-4 bg-cover bg-[url(https://tse2.mm.bing.net/th/id/OIP.dtfpAuEWlIN4eUVfAAR-rQHaFW?pid=Api&P=0&h=180)] text-black'>
      <div>
        <h3 className='leading-tight ml-8 text-lg font-bold'>{elem.title}</h3>
      <p className='mt-4 leading-tight text-xs font-semibold ml-8 text-gray-600'>{elem.detail}</p>
      </div>
      <button className='w-full cursor-pointer active:scale-95 bg-red-500 text-white text-xs rounded-bl-4xl font-bold' onClick={()=>{
          deleteNote(idx)
      }} >Delete</button>
    </div>
   })}
  </div>
</div>


      </div>
  )
}

export default App

