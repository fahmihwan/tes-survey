import { useState } from 'react'


import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'

import Contact from './page/Contact'
import MapLeaflet from './page/MapLeaflet'
import MepEksperiment from './page/MepEksperiment'
import TestUseMemo from './page/TestUseMemo'
import TestUseCallback from './page/TestUseCallback'
import SurveyComponent from './component/SurveyComponent'



function App() {
  const [dropDown, setDropDown] = useState(null);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MapLeaflet />} />
        <Route path="/map-eksperiment" element={<MepEksperiment />} />
        <Route path="/usememo" element={<TestUseMemo />} />
        <Route path="/usecallback" element={<TestUseCallback />} />
        <Route path="/tes-survey" element={<SurveyComponent />} />
      </Routes>

    </>

  )
}

export default App
