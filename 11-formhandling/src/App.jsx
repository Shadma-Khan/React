import React from 'react'

const App = () => {

const submithandler = (e)=>{
e.preventDefault();
  console.log("form submit successfully")
}


  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submithandler(e)
      }}>
      <input type="text" placeholder='enter your name' />
      <button>submit</button>
      </form>
      </div>
  )
}

export default App