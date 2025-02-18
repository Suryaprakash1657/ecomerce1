import { useState } from 'react'
import  Home  from './pages/home'


import './App.css'
import { Routes,Route } from 'react-router-dom'
import { LoginPage } from './routes/Routes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
