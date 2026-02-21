import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Skills/>
     <About/>
     <Details/>
    </div>
  );
}

export default App;
