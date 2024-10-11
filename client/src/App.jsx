import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import AdminHome from "./pages/Admin/AdminHome"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App