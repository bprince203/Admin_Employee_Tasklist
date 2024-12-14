import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './Newtask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className=' h-[55%]   py-5 gap-5 flex-nowrap flex items-center overflow-x-auto justify-start  w-full mt-10'>
      {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}

    </div>
  )
}

export default Tasklist