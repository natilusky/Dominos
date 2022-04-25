import './custom.css'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
    </Routes>
  )
}

export default App

