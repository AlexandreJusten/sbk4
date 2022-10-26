import React, {Component} from 'react'
import Inicial from './pages/inicial'
import Login from './pages/login'
import Register from './pages/register'
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
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes