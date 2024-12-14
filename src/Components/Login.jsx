import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
    const[email,setemail] =useState('')
    const [password, setpassword] = useState('')
    const submithandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password )
        // console.log("Hello the form is submited")
        // console.log("Email is:",email)
        // console.log("Password is:",password)
        setemail("")
        setpassword("")

    }
  return (  
    <>
    <div className=' flex items-center bg-gray-50   h-screen w-screen justify-center'>
       
        <div className='border-2 rounded-lg shadow-lg bg-yellow-100   py-6 w-96 h-96  p-2'>
            <h1 className='font-bold text-2xl pb-4 text-center shadow-sm'>Login Page</h1>
            <form className=' flex flex-col '
             onSubmit = {(e) =>{
                submithandler(e)
        
             }}
               >
                <input  value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }} required className='rounded m-2  p-2 px-4 text-black outline-none border-[#999] border' type ='email' placeholder='Enter your email' /> 
                <input
                value={password}
                onChange={(e) =>{
                    setpassword(e.target.value) 
                }}
                required className='rounded m-2 p-2 text-black px-4 outline-none border-[#999] border' type='password' placeholder='Enter your pass..' />
                <button type='Submit' className='m-3 font-bold rounded  bg-gray-200 block py-3 '>Login</button>

            </form>
        </div> 

    </div>

    </>
  )
}

export default Login