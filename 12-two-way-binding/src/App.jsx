import React, { useState } from 'react'

const App = () => {

const [title, settitle] = useState('')



const submithandler = (e)=>{
e.preventDefault();
  console.log("form submit successfully by", title)

  settitle('')
}


  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submithandler(e)
      }}>
      <input type="text" placeholder='Enter your name' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <button>submit</button>
      </form>
      </div>
  )
}

export default App