import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SocialLink from './components/SocialLink';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
  return (
    <div>

      <Navbar/>
      <Home/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLink/>

    </div>
  );
}

export default App;
