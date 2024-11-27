import React from 'react';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Content } from './components/Content';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Content />
      <Contact />
    </div>
  );
}

export default App;