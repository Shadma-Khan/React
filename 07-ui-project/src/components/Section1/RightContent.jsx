import React from 'react'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full w-2/3 p-6 rounded-4xl flex overflow-x-auto flex-nowrap gap-10'>
      
   {props.users.map(function(elem,idx){
    return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
   })}
    </div>
  )
}

export default RightContent