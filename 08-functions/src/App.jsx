import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log("button is clicked")
  // }

  // function mouseEnter(){
  //   console.log("mouse enter")
  // }


  function pageScrolling(elem){
    console.log("page Scrolling ....... at speed",elem)
  }


  return (
    <div onWheel={(elem)=>{
      // console.log(elem.deltaX);
      pageScrolling(elem.deltaY)

    }}>



      
      {/* <h1 onMouseEnter={mouseEnter}>Hello,Eliza</h1>
      <button onClick={btnClicked} >Change user</button>
      <button onClick={btnClicked}>Explore this</button>
      <button onClick={function(){
        console.log(" thanks for contact ")
      }}>contact us</button> */}

      {/* <input onChange={(elem)=>{
        console.log(elem.target.value)
      }} type="text" placeholder='Enter Name' /> */}

{/* <div onMouseMove={(elem)=>{
  console.log(elem.clientX)
}} className="box"></div> */}

<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>


      <h2>Welcome</h2>

      </div>
  )
}

export default App