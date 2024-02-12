import React from 'react'
import "./index.css"


const FrontPage = () => {
   

 
 
 const btnclicked=()=>{
   console.log("btn clicked")
   
  }
  return (
    <div className='f-main'>
  
      
     
      <h1 className='f-heading'>Quiz Game</h1>

      <div className="f-buttonCard">
      <h1>hi</h1>
        <button className='f-btn'onClick={btnclicked}>Enter Quiz</button>

      
      </div>
   
    </div>
  )
}

export default FrontPage
