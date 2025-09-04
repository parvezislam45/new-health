// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', label: 'Home', icon: '🏠' },
    { name: 'services', label: 'Services', icon: '💼' },
    { name: 'about', label: 'About', icon: 'ℹ️' },
    { name: 'therapists', label: 'Therapists', icon: '👨‍⚕️' },
    { name: 'testimonials', label: 'Testimonials', icon: '⭐' },
    { name: 'resources', label: 'Resources', icon: '📚' },
    { name: 'community', label: 'Community', icon: '👥' },
    { name: 'pricing', label: 'Pricing', icon: '💰' },
    { name: 'contact', label: 'Contact', icon: '📞' },
    { name: 'appointment', label: 'Book Now', icon: '📅' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-white font-bold text-xl">MindCare</span>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`px-3 py-2 rounded-md text-md font-bold transition-all duration-300 relative group flex items-center ${activeSection === item.name ? 'text-white' : 'text-purple-200 hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${activeSection === item.name ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === item.name ? 'bg-indigo-700 text-white' : 'text-purple-200 hover:bg-indigo-700 hover:text-white'}`}
              >
                
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;