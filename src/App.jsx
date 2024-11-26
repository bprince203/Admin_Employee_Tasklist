import React, { useEffect } from 'react'
import Login from './Components/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import Headers from './Components/others/Headers'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {
  useEffect (() =>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <>
   {/* <Headers /> */}
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard />  */}
    </>
  )
}

export default App