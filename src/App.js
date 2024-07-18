import React, {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header/Header'
import Hero from './components/UI/Hero';
import Services from './components/UI/Services'
import About from './components/UI/About';
import Team from './components/UI/Team';
import Footer from './components/Footer/Footer'

function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])



  return (
  <>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <Hero theme={theme}/>
    <Services/>
    <About/>
    <Team/>
    <Footer theme={theme}/>
  </>
  )
}

export default App;
