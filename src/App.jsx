import { useState } from 'react'


import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import SurveyComponent from './component/SurveyComponent';



function App() {
  const [dropDown, setDropDown] = useState(null);


  return (
    <>
      <Routes>
        <Route path="/" element={<SurveyComponent />} />
      </Routes>

    </>

  )
}

export default App
