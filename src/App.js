import Navbar from "./components/Navbar.jsx"
import Intro from "./components/intro/Intro.jsx"
import Services from "./components/services/Services.jsx";
import Experience from "./components/experience/Experience.jsx"
import Works from "./components/works/Works.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { themeContext } from "./Context.js";
import { useContext } from "react";
import './App.css'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode? 'black':'',
      color: darkMode? 'white':''
    }}>
      <Navbar/>  
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
