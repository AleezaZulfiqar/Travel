import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Popular from './Components/Popular';
import Discover from './Components/Discover';
import Travel from './Components/Travel';
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';





function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);
  return (
    <div className="App">
      <Navbar/>
      <Popular/>
      <Discover/>
      <Travel/>
      <Tours/>
      <Footer/>
    </div>
  );
}

export default App;
