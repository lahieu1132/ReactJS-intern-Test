import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers