import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Menu from './components/Menu'
import Home from './components/Home'
import Gif_page from './components/Gif_page'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Menu />
        <ToastContainer position={'top-right'} autoClose={4000} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/gif_page' element={<Gif_page />} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
