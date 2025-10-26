'use client';

import { SiLinux, SiJavascript, SiCss3, SiTailwindcss, SiMongodb, SiReact, SiNodedotjs, SiApache } from 'react-icons/si';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS konfigürasyonu - kendi bilgilerinizi girin
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, {
        from_email: formData.email,
        message: formData.message,
        to_email: 'osmanalielmaa@gmail.com'
      }, publicKey);

      setSubmitStatus('success');
      setFormData({ email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black relative overflow-hidden">
        {/* Animated Background Logos */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Linux Logo */}
          <div className="absolute -top-20 left-1/4 animate-float text-4xl sm:text-5xl lg:text-6xl opacity-20 text-white">
            <SiLinux />
          </div>

          {/* aaPanel Logo */}
          <div className="absolute -top-20 left-3/4 animate-float-delayed text-5xl sm:text-6xl lg:text-7xl opacity-20 text-white">
            <SiApache />
          </div>

          {/* JavaScript Logo */}
          <div className="absolute -top-20 right-1/4 animate-float-slow text-5xl sm:text-6xl lg:text-7xl opacity-20 text-yellow-400">
            <SiJavascript />
          </div>

          {/* CSS Logo */}
          <div className="absolute -top-20 left-1/2 animate-float text-5xl sm:text-6xl lg:text-7xl opacity-20 text-blue-400">
            <SiCss3 />
          </div>

          {/* Tailwind Logo */}
          <div className="absolute -top-20 right-1/3 animate-float-delayed text-5xl sm:text-6xl lg:text-7xl opacity-20 text-cyan-400">
            <SiTailwindcss />
          </div>

          {/* MongoDB Logo */}
          <div className="absolute -top-20 left-1/3 animate-float-slow text-5xl sm:text-6xl lg:text-7xl opacity-20 text-green-400">
            <SiMongodb />
          </div>

          {/* React Logo */}
          <div className="absolute -top-20 right-1/2 animate-float text-5xl sm:text-6xl lg:text-7xl opacity-20 text-blue-300">
            <SiReact />
          </div>

          {/* Node.js Logo */}
          <div className="absolute -top-20 left-2/3 animate-float-delayed text-5xl sm:text-6xl lg:text-7xl opacity-20 text-green-500">
            <SiNodedotjs />
          </div>
        </div>
      
          <main className="px-4 py-8 sm:px-6 lg:px-8 min-h-screen text-center relative z-10 flex flex-col items-center justify-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
              <h1 className="flex flex-col items-center text-3xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight text-white leading-tight">
                <span>Osman Ali</span>
                <span className="text-3xl sm:block sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-0 sm:mt-0">Elma</span>
              </h1>
              <p className="text-lg sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl text-purple-200 font-script leading-relaxed">
                Frontend Developer & DevOps Engineer
                <br/>
                Student @ Akdeniz University / MIS
              </p>
              <a 
                href="mailto:osmanalielmaa@gmail.com" 
                className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-200 font-script hover:text-white transition-colors duration-300 underline decoration-purple-300 hover:decoration-white"
              >
                osmanalielmaa@gmail.com
              </a>
            </div>
          {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8 sm:mt-12 lg:mt-16">
            {/* GitHub */}
            <div className="group">
              <a 
                href="https://github.com/osmanelmaa" target='
                _blank'
                className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden min-w-[120px] sm:min-w-[140px] min-h-[50px] sm:min-h-[60px] w-full sm:w-auto"
              >
                <svg className="w-8 h-8 text-white group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110 group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white font-sans font-medium text-sm sm:text-base text-center group-hover:text-purple-200 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">GitHub</span>
              </a>
            </div>
            

            {/* LinkedIn */}
            <div className="group">
              <a 
                href="https://www.linkedin.com/in/osman-ali-elma-b792a0251/" target='_blank'
                className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden min-w-[120px] sm:min-w-[140px] min-h-[50px] sm:min-h-[60px] w-full sm:w-auto"
              >
                <svg className="w-8 h-8 text-white group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-sans font-medium text-sm sm:text-base text-center group-hover:text-blue-200 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">LinkedIn</span>
              </a>
            </div>
            {/* CV */}
            <div className="group">
              <a 
                href="/cv/OSMANALİELMACV.pdf" 
                download="OSMANALİELMACV.pdf"
            target="_blank"
            rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 relative overflow-hidden min-w-[120px] sm:min-w-[140px] min-h-[50px] sm:min-h-[60px] w-full sm:w-auto"
          >
                <svg className="w-8 h-8 text-white group-hover:text-orange-300 transition-all duration-300 group-hover:scale-110 group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white font-sans font-medium text-sm sm:text-base text-center group-hover:text-orange-200 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4">Download CV</span>
          </a>
        </div>
          </div>
     
      </main>
    </div>
  );
}
