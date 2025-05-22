
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';
import NavBar from './components/navBar';
import particles from './utils/particles';

function App() {

  const handleInit = async (main) => {
    await loadFull(main); 
  }
  return (
    <div className="App">
      {/* particles js */}
      
      <Particles id="particles" options={particles} init={handleInit} />

      {/* navbar */}
      <NavBar/>

      {/* main page content */}
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
