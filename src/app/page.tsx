'use client'

import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import HeroSection from './Pages/HeroSection';
import Services from './Pages/Services';
import About from './Pages/About';
import Therapists from './Pages/Therapists';
import Testimonials from './Pages/Testimonials';
import Resources from './Pages/Resources';
import Community from './Pages/Community';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isThreeJsLoaded, setIsThreeJsLoaded] = useState(false);
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    therapists: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
    community: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    appointment: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Load Three.js dynamically to avoid SSR issues
    import('three').then(() => {
      setIsThreeJsLoaded(true);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      Object.entries(sectionRefs).forEach(([sectionName, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionName);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='relative'>
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection ref={sectionRefs.home} isThreeJsLoaded={isThreeJsLoaded} />
        <Services ref={sectionRefs.services} />
        <About ref={sectionRefs.about} />
        <Therapists ref={sectionRefs.therapists} />
        <Testimonials ref={sectionRefs.testimonials} />
        <Resources ref={sectionRefs.resources} />
        <Community ref={sectionRefs.community} />
        <Pricing ref={sectionRefs.pricing} />
        <Contact ref={sectionRefs.contact} />
        <Appointment ref={sectionRefs.appointment} />
      </main>
      <Footer />
    </div>
  );
}
