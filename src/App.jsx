import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import About from './components/about/About'
function App() {
  return (
    <div>
      <section id="Homepage">
      <Navbar />
      <Hero/>
      </section>
      <section id="Parallax"> <Parallax/> </section>
      <section id="About"> <About/> </section>
      
    </div>
  )
}

export default App
