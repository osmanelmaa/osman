'use client';

import React, { useState, useEffect } from 'react';
import { SiLinux, SiJavascript, SiCss3, SiTailwindcss, SiMongodb, SiReact, SiNodedotjs, SiApache } from 'react-icons/si';
import Snowfall from 'react-snowfall';
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    let animationFrame: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 50;
      const y = (e.clientY / window.innerHeight) * 50;
      setMousePosition({ x, y });
      
      // Smooth gradient follow with requestAnimationFrame
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setGradientPosition(prev => ({
          x: prev.x + (x - prev.x) * 0.1,
          y: prev.y + (y - prev.y) * 0.1,
        }));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div 
      className="container"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        '--gradient-x': `${gradientPosition.x}%`,
        '--gradient-y': `${gradientPosition.y}%`,
      } as React.CSSProperties}
    >
        {/* Animated Background Logos */}
        <div className="background-logos">
          {/* Linux Logo */}
          <div className="logo linux animate-float">
            <SiLinux />
          </div>
          {/* aaPanel Logo */}
          <div className="logo apache animate-float-delayed">
            <SiApache />
          </div>

          {/* JavaScript Logo */}
          <div className="logo javascript animate-float-slow">
            <SiJavascript />
          </div>

          {/* CSS Logo */}
          <div className="logo css animate-float">
            <SiCss3 />
          </div>

          {/* Tailwind Logo */}
          <div className="logo tailwind animate-float-delayed">
            <SiTailwindcss />
          </div>

          {/* MongoDB Logo */}
          <div className="logo mongodb animate-float-slow">
            <SiMongodb />
          </div>

          {/* React Logo */}
          <div className="logo react animate-float">
            <SiReact />
          </div>

          {/* Node.js Logo */}
          <div className="logo nodejs animate-float-delayed">
            <SiNodedotjs />
          </div>
        </div>
        {/* Happy New Year Background Banner */}
        <div className="new-year-banner">
          <div className="new-year-text">
            ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨
          </div>
          <div className="new-year-text">
            ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨
          </div>
          <div className="new-year-text">
            ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨
          </div>
          <div className="new-year-text">
            ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨ HAPPY NEW YEAR ✨
          </div>
        </div>
     
          <main className="main">
            <div className="content-wrapper">
              <h1 className="title">
                <span className="title-name">Osman Ali</span>
                <span className="title-name">Elma</span>
              </h1>
              <p className="subtitle">
                Frontend Developer & DevOps Engineer
                <br/>
                Student @ Akdeniz University / MIS
              </p>
              <p className="subtitle">
              <a href="https://osmanelma.blog" target="_blank" rel="noopener noreferrer">My Blog Site</a>
              </p>
            </div>
          {/* Social Links */}
            <div className="social-links">
            {/* GitHub */}
            <div className="social-button-group github">
              <a 
                href="https://github.com/osmanelmaa" 
                target="_blank"
                className="social-button"
              >
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="social-text">GitHub</span>
              </a>
            </div>
            

            {/* LinkedIn */}
            <div className="social-button-group linkedin">
              <a 
                href="https://www.linkedin.com/in/osman-ali-elma-b792a0251/" 
                target="_blank"
                className="social-button"
              >
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="social-text">LinkedIn</span>
              </a>
            </div>
            {/* CV */}
            <div className="social-button-group cv">
              <a 
                href="/cv/OSMANALİELMACV.pdf" 
                download="OSMANALİELMACV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'white' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="social-text">Download CV</span>
              </a>
        </div>
          </div>
      </main>
    </div>
      <Snowfall 
        color="white"
        snowflakeCount={200}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 50,
        }} 
      />
    </>
  );
}
