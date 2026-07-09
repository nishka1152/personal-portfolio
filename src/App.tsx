import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>

      <footer className="bg-black border-t border-neutral-900 py-10">
        <div className="container mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex space-x-5">
            <a
              href="https://github.com/nishka1152"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nishkaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nishkaj@uci.edu"
              aria-label="Email"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Nishka Jain · Built with React, TypeScript & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
