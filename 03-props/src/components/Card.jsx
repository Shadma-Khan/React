import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);
    
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059" alt="not found" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>view profile</button>
      </div>
      </div>
  )
}

export default Card
