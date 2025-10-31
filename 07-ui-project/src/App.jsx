import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
{
img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
intro: '',
color:'red',
tag: 'Satisfied',
},
{
img: 'https://images.unsplash.com/photo-1653762384076-4c2992f65af1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
intro: '',
color:'green',
tag: 'Underserved',
},
{
img: 'https://images.unsplash.com/photo-1560836593-f94795d9ba06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600',
intro: '',
color:'orange',
tag: 'UnderBanked',
},
  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App