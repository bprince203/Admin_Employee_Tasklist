import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex  mt-10  gap-5 justify-center screen'>
        <div className='bg-red-400  m-2 p-3 w-[35%] rounded-2xl '>
                <h1 className='text-3xl text-white px-3 py-2-'>{data.taskCounts.newTask}</h1>
                <h2 className='text-2xl text-white px-3 py-1  '>New Task</h2>
                </div>
        <div className='bg-emerald-400  m-2 p-3 w-[35%] rounded-2xl '>
                <h1 className='text-3xl text-white px-3 py-2-'>{data.taskCounts.completed}</h1>
                <h2 className='text-2xl text-white px-3 py-1  '>Completed</h2>
                </div>
        <div className='bg-blue-400 m-2 p-3 w-[35%] rounded-2xl '>
                <h1 className='text-3xl text-white px-3 py-2-'>{data.taskCounts.active}</h1>
                <h2 className='text-2xl text-white px-3 py-1  '>Accepted Task</h2>
                </div>
        <div className='bg-yellow-400 m-2 p-3 w-[35%] rounded-2xl '>
                <h1 className='text-3xl text-white px-3 py-2-'>{data.taskCounts.failed}</h1>
                <h2 className='text-2xl text-white px-3 py-1  '>Failed Task</h2>
                </div>
                
    </div>
  )
}

export default TaskNumbers