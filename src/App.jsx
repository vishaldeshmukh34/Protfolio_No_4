import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Works from "./components/Work/Works";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter.jsx"

import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Project Showcase */}
      <section id="mywork">
        <ProjectShowcase />
      </section>

      {/* Work / Experience */}
      <section id="work">
        <Works />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      <section id="Newsletter">
        <Newsletter />
      </section>
      
      

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;