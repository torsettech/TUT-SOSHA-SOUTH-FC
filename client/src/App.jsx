import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import AdminHome from "./pages/Admin/AdminHome"
import AdminLayout from './layout/AdminLayout'
import Players from './pages/Admin/ManagePlayers/Players'
import CoachHome from './pages/Coach/CoachHome'
import CoachLayout from "./layout/CoachLayout"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/players" element={<Players />} />
          </Route>

          {/* Coach Routes */}
          <Route path="/coach" element={<CoachLayout />}>
            <Route path="/coach/home" element={<CoachHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App