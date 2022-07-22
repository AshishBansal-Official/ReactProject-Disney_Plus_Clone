import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App