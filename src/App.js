import './App.css';
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Slides from './components/portfolio/carousel_1.json'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
