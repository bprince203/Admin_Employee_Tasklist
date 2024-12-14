import React from 'react'
import Headers from '../others/Headers'
import TaskNumbers from '../others/TaskNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
    return (
        <div className='h-screen p-20 flex-row bg-[#1c1c1c]'>
          
                <Headers changeUser={props.changeUser} data ={props.data} />
                <TaskNumbers data={props.data} />
                <Tasklist data={props.data} />
          

        </div>
    )
}
export default EmployeeDashboard