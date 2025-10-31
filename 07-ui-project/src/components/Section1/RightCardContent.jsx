import React from 'react'
import {ArrowRight} from 'lucide-react'


const RightCardContent = (props) => {
  return (
                <div className='absolute top-0 h-full w-full  p-8 flex flex-col justify-between'>
        
            <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
<div><p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque?</p>
<div className='flex justify-between'><button style={{backgroundColor:props.color}}  className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button><button className='bg-blue-600 text-white font-medium px-2 py-2 rounded-full '><ArrowRight /></button>
</div>
</div>

        </div>
    
  )
}

export default RightCardContent