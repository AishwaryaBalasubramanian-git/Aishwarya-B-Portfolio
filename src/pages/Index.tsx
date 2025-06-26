
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import ZohoExperience from '../components/ZohoExperience';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scroll-smooth">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          <About />
          <ZohoExperience />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Leadership />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
