import React from 'react'
import Header from './Header'
function Character() {
  return (
    <div className='mx-[10%] mt-[2%]'>
     <Header/>
     <div className='flex  mt-[5%] bg-slate-100 h-14 rounded-lg'>
     <input placeholder="Search Something. . ." class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 ml-4 mt-2 rounded-lg text-sm focus:outline-none" type="text" name="search" autocomplete="off"/>
     <button class="h-10 w-24 bg-[#ecd06f] p-[.4rem]  mt-2 ml-2 rounded-lg text-[14px] text-lg text-white"> Search</button>
        <p className='ml-auto mt-4 pr-3'>Lorem Ipsum</p>
     </div>
    </div>
  )
}

export default Character
