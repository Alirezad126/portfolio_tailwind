import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Skills from "./components/about/SkillsMobile";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/projects/Portfolio";
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax">
        {" "}
        <Parallax />{" "}
      </section>
      <section id="About">
        {" "}
        <About />{" "}
      </section>
      <section className="flex sm:hidden" id="Skills">
        {" "}
        <Skills />{" "}
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
