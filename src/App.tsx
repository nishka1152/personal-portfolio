import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AuroraBackgroundDemo from './components/background'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AuroraBackgroundDemo/>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
