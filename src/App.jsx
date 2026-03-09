import React from "react";
// 1. IMPORT THE NEW EFFECTS (Ensure the filename matches exactly)
import { CustomCursor, Magnetic } from "./components/CustomCursor.jsx";

// 2. YOUR EXISTING COMPONENT IMPORTS
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
import Newsletter from "./components/Newsletter/Newsletter.jsx";

import "./App.css";

function App() {
  return (
    /** * STYLING UPDATES:
     * - min-h-screen & bg-[#030305]: Sets the deep dark theme.
     * - lg:cursor-none: Hides the default system cursor so the CustomCursor takes over.
     * - selection:bg-indigo-500/30: Adds a premium blue tint when highlighting text.
     */
    <div className="min-h-screen bg-[#030305] text-white overflow-x-hidden lg:cursor-none selection:bg-indigo-500/30">

      {/* RENDER THE CURSOR AT THE ROOT (Follows user site-wide) */}
      <CustomCursor />

      {/* NAVBAR WITH MAGNETIC LOGIC (If you wrap nav items inside Navbar.jsx) */}
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="mywork">
          <ProjectShowcase />
        </section>

        <section id="work">
          <Works />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="Newsletter">
          <Newsletter />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

     
       
        
        <Footer />
      

    </div>
  );
}

export default App;