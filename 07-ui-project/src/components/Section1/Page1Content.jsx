import React from 'react'
import LeftConent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props.users)
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 justify-between px-18 h-[90vh] '>
        <LeftConent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content