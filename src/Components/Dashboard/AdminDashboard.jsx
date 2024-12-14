import React from 'react'
import CreateTask from '../others/CreateTask';
import Headers from '../others/Headers';
import AllTask from '../others/AllTask';


const AdminDashboard = (props) => {
    // document.body.style.backgroundColor="#0004"
  return (
    <>
    <div className='p-11 h-full w-full  '>
    <Headers changeUser={props.changeUser} />
   <CreateTask />
   <AllTask />
   </div>
    
    </>
  )
}

export default AdminDashboard;