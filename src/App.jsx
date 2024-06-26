import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Skills from "./components/about/SkillsMobile";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/projects/Portfolio";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
        <ChatBot/>
      </section>

      <section id="Parallax">
        <Parallax />
      </section>
      <section className="min-h-[100vh] h-[180vh] bg-gradient-to-b" id="About">
        <About />
      </section>
      <section className="flex sm:hidden min-h-[100vh] h-[120vh]" id="Skills">
        <Skills />
      </section>
      <Portfolio />
      <section id="Contact" className="bg-gradient-to-b sm:bg-gradient-to-a">
        <Contact />
      </section>
    </div>
  );
}

export default App;
