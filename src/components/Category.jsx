import React from 'react'

function Category() {
  return (
    <div className='flex bg-slate-100'>
        <span className='w-[16%] h-screens bg-slate-300 p-0 overflow-hidden'>
        <img src='/rick1.png' className=' ease-in duration-300 bg-cover hover:scale-125 '/>
        </span>
      
      <span className='ml-4 py-10'><h1>Rick Sanchez</h1>
      <p>Male-Human</p>
      <p>Last Know location</p>
      <h3>Citadel of Ricks</h3>
      <p>Origin</p>
      <h3>Earth(C-137)</h3>
      </span>
      <span className='ml-auto'>
        <h1>#1</h1>
      </span>
      
    </div>
    
  )
}

export default Category
