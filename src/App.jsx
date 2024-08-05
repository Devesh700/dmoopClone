import React from 'react'
import Navbar from './Components/Partials/Navbar'
import Home from './Components/Pages/Home/Home'
import Footer from './Components/Partials/Footer'
import { Route, Routes } from 'react-router-dom'
import TechnologyStudio from './Components/Pages/Solutions/TechnologyStudio/TechnologyStudio'
import DigitalMarketting from './Components/Pages/Solutions/DigitalMarkettingStudio/DigitalMarketting'
import Creativestudio from './Components/Pages/Solutions/CrativeStudio/Creativestudio'
import OndemandDevelopers from './Components/Pages/Solutions/OndemandDevelopers/OndemandDevelopers'
import About from './Components/Pages/WhoWeAre/About/About'
import Contact from './Components/Utilities/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/solutions/technologystudio' element={<TechnologyStudio/>}></Route>
        <Route path='/solutions/digital-marketting-studio' element={<DigitalMarketting/>}></Route>
        <Route path='/solutions/creative-studio' element={<Creativestudio/>}></Route>
        <Route path='/solutions/demand-developers' element={<OndemandDevelopers/>}></Route>
        <Route path='/whoweare/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
