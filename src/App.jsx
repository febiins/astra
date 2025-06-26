import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Ann from './components/Ann';
import Alan from './components/Alan';
import Anandhu from './components/Anandhu';
import Tony from './components/Tony';
import Geethika from './components/Geethika';
import Febin from './components/Febin';
import Amina from './components/Amina';
import Sethu from './components/Sethu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/ann' element={ <Ann /> } />
        <Route path='/anandhu' element={ <Anandhu /> } />
        <Route path='/tony' element={ <Tony /> } />
        <Route path='/geethika' element={ <Geethika /> } />
        <Route path='/febin' element={ <Febin /> } />
        <Route path='/amina' element={ <Amina /> } />
        <Route path='/sethu' element={ <Sethu /> } />
        <Route path='/alan' element={ <Alan /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
