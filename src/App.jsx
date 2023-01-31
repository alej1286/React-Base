import './App.css'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
