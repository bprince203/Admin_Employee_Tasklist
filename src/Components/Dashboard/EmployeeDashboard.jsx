import React from 'react'
import Headers from '../others/Headers'
import TaskNumbers from '../TaskList/TaskNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
    return (
        <div className='h-screen p-20 flex-row bg-[#1c1c1c]'>
          
                <Headers />
                <TaskNumbers/>
                <Tasklist />
          

        </div>
    )
}
export default EmployeeDashboard