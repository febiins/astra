import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Ann from './components/Ann';
import Alan from './components/Alan';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/ann' element={ <Ann /> } />
        <Route path='/anandhu' element={ <Home /> } />
        <Route path='/antony' element={ <Home /> } />
        <Route path='/geethika' element={ <Home /> } />
        <Route path='/febin' element={ <Home /> } />
        <Route path='/amina' element={ <Home /> } />
        <Route path='/sethu' element={ <Home /> } />
        <Route path='/alan' element={ <Alan /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
