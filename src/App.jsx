import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </>
    </Router>
  )
}

export default App
