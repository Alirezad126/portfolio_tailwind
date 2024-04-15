import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'

function App() {
  return (
    <div>
      <section id="Homepage">
      <Navbar/>
      <Hero/>
      <section > <Parallax/> </section>

      </section>
    </div>
  )
}

export default App
