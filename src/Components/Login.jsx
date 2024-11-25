import React, { useState } from 'react'

const Login = () => {

    const[email,setemail] =useState('')
    const [password, setpassword] = useState('')
    const submithandler =(e)=>{
        e.preventDefault()
        // console.log("Hello the form is submited")
        console.log("Email is:",email)
        console.log("Password is:",password)
        setemail("")
        setpassword("")

    }
  return (
    <>
    <div className=' flex items-center bg-[#efefef]   h-screen w-screen justify-center'>
       
        <div className='border-2 rounded-lg shadow-lg  py-6 w-96 h-96 bg-white p-2'>
            <form className=' flex flex-col '
             onSubmit = {(e) =>{
                submithandler(e)
        
             }}
               >
                <input  value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }} required className='rounded m-2  p-2 px-4 outline-none border-[#999] border' type ='email' placeholder='Enter your email' /> 
                <input
                value={password}
                onChange={(e) =>{
                    setpassword(e.target.value)
                }}
                required className='rounded m-2 p-2  px-4 outline-none border-[#999] border' type='password' placeholder='Enter your pass..' />
                <button type='Submit' className='m-3 font-bold rounded  bg-gray-200 block py-3 '>Login</button>

            </form>
        </div> 

    </div>

    </>
  )
}

export default Login