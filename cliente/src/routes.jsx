import React, {Component} from 'react'
import Inicial from './pages/inicial'
import Login from './pages/login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function AppRoutes(){

  return(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicial/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes