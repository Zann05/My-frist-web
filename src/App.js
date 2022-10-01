import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Pesan from './pages/Pesan/Pesan'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Pesan' element={<Pesan />} />
    </Routes>
    
  );
}

export default App