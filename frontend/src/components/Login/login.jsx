import React, { useState } from 'react'
import {useState} from 'react'
import{IoMailSharp} from 'react-icons/io5'
import {LuEyeClosed} from 'react-icons/lu';


const login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[visible,setVisible]=useState('true')
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col border h-96 w-96 shadow-xl shadow-black-600 rounded-lg '>
        <div>
            <h1 className='text-center text-2xl font-bold'>User Login</h1>
        </div>
        <div className='flex justify-center items-center '>
            <form className='w-full flex flex-col justify-center mt-5'>
            <div className='flex rounded-lg bg-sky-100 shadow-lg shadow-black-50 w-full h-10 justify-between items-center'>
                <input className='w-full focus:outline-none text-start'  type="email" required autocomplete="email" name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <IoMailSharp className='mr-4 h-8 w-8'/>
            </div>
            <div className='flex rounded-lg bg-sky-100 shadow-lg shadow-black-50 w-full h-10 justify-between items-center'>
            <input className='w-full focus:outline-none text-start'  type={visible?'text':'password'} required autocomplete="current-password" name='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
             {
                     visible?(<LuEyeClosed className='mr-4 h-8 w-8' onClick={()=>setVisible(false)}/>):(<LuEye className='mr-4 h-8 w-8' onClick={()=>setVisible(true)}>/</LuEye>)
             }
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default login
