import React from 'react'
import "../index.css"
import {Link} from "react-router-dom"
function Body() {
  return (
    <div className='h-screen sm:h-full '>
      <Link to="/character">
      <div className='TopContainer bg-slate-300 h-[50vh] overflow-hidden '>
    <img src='/rick1.png ' className='object-fill h-[50vh] w-[100vw] ease-in duration-300 hover:scale-125 hover:filter-none grayscale' />
    <h3 className='absolute top-[25%] right-[50%] text-4xl font-bold text-white'>Character</h3>
   </div>
      </Link>
   
  <img src='/rickLogo.png' className='absolute lg:left-[35%] lg:top-[40%] z-10' />
   <div className='BottomContainer flex w-screen bg-slate-500 h-[50vh]'>
    <Link to="/episode">
    <div className='LeftContainer overflow-hidden'> 
    <img src='/rick2.png' className='object-fill w-[50vw] h-[50vh] ease-in duration-300 hover:scale-125 hover:filter-none grayscale'/>
    <h3 className='absolute top-[75%] left-[20%] text-4xl font-bold text-white'>Episodes</h3>
    </div> 
    </Link>
    <Link to="/location"> 
    <div className='RightContainer  overflow-hidden '>
    
      <img src='/rick3.jpg' className='object-fill  w-[50vw] h-[50vh] ease-in duration-300 hover:scale-125 hover:filter-none grayscale'/>
      <h3 className='absolute top-[75%] right-[20%] text-4xl font-bold text-white'>Location</h3>
    </div>
    </Link>
    
     
   </div>
  
    </div>
  )
}

export default Body
