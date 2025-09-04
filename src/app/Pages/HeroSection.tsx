// components/sections/Hero.tsx
'use client';

import { forwardRef, useEffect, useRef } from 'react';

interface HeroProps {
  isThreeJsLoaded: boolean;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ isThreeJsLoaded }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isThreeJsLoaded || !canvasRef.current) return;

    let animationFrameId: number;

    const initThreeJs = async () => {
      const THREE = await import('three');
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current as HTMLCanvasElement,
        alpha: true,
        antialias: true
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 1500;
      
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
        colorArray[i] = Math.random();
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });
      
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      
      camera.position.z = 5;
      
      const clock = new THREE.Clock();
      
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        particlesMesh.rotation.y = elapsedTime * 0.1;
        particlesMesh.rotation.x = elapsedTime * 0.05;
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    };
    
    initThreeJs();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isThreeJsLoaded]);

  return (
    <section ref={ref} id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-indigo-950/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Wellness</span> Starts Here
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto">
          Professional, compassionate mental health care tailored to your unique needs. 
          Begin your path to healing today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            Book an Appointment
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;