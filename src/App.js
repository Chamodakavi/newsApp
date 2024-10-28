import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './Components/NavBar'
import NewsItems from './Components/NewsItems'
import './App.css'
import Footer from './Components/Footer'
import { Routes,Route,Router } from 'react-router-dom'
import Business from './Pages/Business'
import Entertainment from './Pages/Entertainment'

const App = () => {
  return (
    <>
        <NavBar/>

        {/* <Routes>
          <Route path='/' element={<NewsItems/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/entertainment' element={<Entertainment/>}/>
        </Routes> */}
       

        <Footer/>
    </>
  )
}

export default App
