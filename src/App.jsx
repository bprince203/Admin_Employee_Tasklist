import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Login from './Components/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
// import { data } from 'autoprefixer'
const App = () => {
  const [user, setUser] = useState(null)
  const [loggenInUserData, setloggenInUserData] = useState(null)
  const [userData, setuserData] =useContext(AuthContext)

  useEffect(() => {
    const loggenInUser = localStorage.getItem('loggedInUser')
    if(loggenInUser){
      const userData = JSON.parse(loggenInUser)
      setUser(userData.role)
      setloggenInUserData(userData.data)
    }
  }, [])
  

  // const AuthData = useContext(AuthContext)
  // console.log(AuthData.employees)
  // console.log(AuthData.employees.find((e) => email == e.email && e.password ==password))


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      // console.log("This is  Admin")
      setUser('admin')
      localStorage.setItem('loggenInUser' ,JSON.stringify({role: 'admin'}))
    }
    else if (userData) {
      const employee =userData.find((e)=> email ==e.email && e.password == password)
      if(employee){

        setUser('employee')
        setloggenInUserData(employee)
        localStorage.setItem('loggenInUser',JSON.stringify({role: 'employee',data:employee}))
        // console.log('This is a user')
      }
    }
    else {
      alert("You have entered the Invalid Credentials")

    }

  };

  // const data = useContext(AuthContext)
  // console.log(data)

  // handleLogin('admin@me.com' ,123)
  // handleLogin('user@me.com' ,123)

  return (
    <>
      {/* <Headers /> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser ={setUser} /> : (user == 'employee' ) ? <EmployeeDashboard changeUser ={setUser} data ={loggenInUserData} /> : null}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard />  */}

    </>
  )
}

export default App