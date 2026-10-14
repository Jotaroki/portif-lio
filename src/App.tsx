import React, { useState, useEffect } from 'react';
import { profileData } from './data/profile';
import { Navbar } from './components/Navbar';
import { FloatingBubbles } from './components/FloatingBubbles';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Decorative Atmospheric Aero Bubbles */}
      <FloatingBubbles />

      {/* Floating Aero Glass Navbar */}
      <Navbar activeSection={activeSection} githubUrl={profileData.contacts.github} />

      {/* Main Content Sections */}
      <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        <Hero profile={profileData} />
        <About profile={profileData} />
        <Skills />
        <Projects />
        <Experience />
        <Contact profile={profileData} />
      </main>

      {/* Aero Glass Footer */}
      <Footer />
    </div>
  );
};

export default App;
