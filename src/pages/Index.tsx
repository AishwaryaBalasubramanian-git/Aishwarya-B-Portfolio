
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
