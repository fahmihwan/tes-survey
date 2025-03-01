import { useState } from 'react'


import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'

import Contact from './page/Contact'
import MapLeaflet from './page/MapLeaflet'
import MepEksperiment from './page/MepEksperiment'



function App() {
  const [dropDown, setDropDown] = useState(null);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MapLeaflet />} />
        <Route path="/map-eksperiment" element={<MepEksperiment />} />
      </Routes>

    </>

  )
}

export default App
