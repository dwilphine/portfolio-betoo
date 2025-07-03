import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      
      <header style={{ background: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>Bienvenue sur le portfolio de Betoo</h1>
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '1rem' }}>
        © {new Date().getFullYear()} Betoo. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
