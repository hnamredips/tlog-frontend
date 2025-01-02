import { useState } from 'react'
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATH_NAME } from "./constants/pathname";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path={PATH_NAME.LOGIN} element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
