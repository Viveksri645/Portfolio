import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Certification from './components/certification/Certification'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Slides from './components/portfolio/carousel_1.json'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Certification/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
