import React from 'react'

const Headers = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-white text-3xl'> Hello  <br /> <span className='text-4xl'>Prince 👋</span></h1>
        <button className='text-white text-2xl p-2 rounded-full px-4 bg-red-400'>Log out</button>
    </div>
  )
}

export default Headers