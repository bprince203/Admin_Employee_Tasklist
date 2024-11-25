import React from 'react'
import Headers from './Headers'
const CreateTask = () => {
  return (
    
    <div className='justify-items-center bg-[rgba(67,66,66,0.25)] w-96 p-9  mx-auto'>
        <form  className=' text-[#999]  flex flex-col gap-2'>
            <h3>Task Title</h3>
            <input className=' outline-none p-2 px-4 bg-[rgba(67,66,66,0.39)]' type="text" placeholder='Make a UI design' />
            <h3 >Description</h3>
            <textarea rows={3} className='outline-none p-2 px-4 bg-[rgba(67,66,66,0.39)]' placeholder='Detailed Description of Task (max 50 Words)'></textarea>
            <h3>Date</h3>
            <input className='outline-none p-2 px-4 bg-[rgba(67,66,66,0.39)]' type="date" name="" id="" />
            <h3>Assign to</h3>
            <input type="text" className='outline-none p-2 px-4 bg-[rgba(67,66,66,0.39)]' placeholder='Enter it' />
            <h3>Category</h3>
            <input type="text" className=' outline-none p-2 px-4 bg-[rgba(67,66,66,0.39)]' placeholder='Design,Development etc..'/>
            <button className='bg-black text-white p-2 rounded'>Create Task</button>
        </form>
    </div>

   
  )
}

export default CreateTask