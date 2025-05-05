import React, { useState, useEffect } from 'react';
import { 
  Gavel,
  Banknote,
  FileText,
  Receipt,
  PhoneCall, 
  Calendar, 
  Award, 
  Scale, 
  Briefcase, 
  Users, 
  Star, 
  Shield, 
  Landmark, 
  ChevronDown, 
  CheckCircle,
  ArrowRight
  
} from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show elements on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };
    
    // Set initial state based on initial scroll position
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 min-h-screen relative overflow-hidden">
      {/* Background decorative elements - more professional and subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-stone-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 space-y-8 text-white">
              <div className="inline-block px-4 py-1 bg-amber-700 rounded-md text-amber-50 font-medium mb-4 shadow-md flex items-center gap-2">
                <Shield size={16} />
                <span>Legal Excellence & Trust</span>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Adv. Bapu Dombale
                </h1>
                <div className="mt-3 text-xl md:text-2xl text-amber-300 font-medium flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex items-center gap-1.5">
                <Gavel size={18} />
                Advocate
              </span>

              <span className="flex items-center gap-1.5">
                <Banknote size={18} />
                Accounting
              </span>

              <span className="flex items-center gap-1.5">
                <FileText size={18} />
                Tax Consultant
              </span>

              <span className="flex items-center gap-1.5">
                <Receipt size={18} />
                GST Expert
              </span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 font-light italic border-l-4 border-amber-700 pl-4">
                "Reliable Legal & Financial Solutions You Can Trust"
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-amber-700 hover:bg-amber-600 text-white py-3 px-8 rounded-md font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                  <Calendar size={20} />
                  Book a Consultation
                </button>
                
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-md font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg border border-gray-600 hover:translate-y-[-2px]">
                  <PhoneCall size={20} />
                  Contact Now
                </button>
              </div>

              {/* Scroll down indicator */}
              <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer pt-8" onClick={() => scrollToSection('services')}>
                <span>Scroll to explore</span>
                <ChevronDown size={20} className="animate-bounce" />
              </div>
            </div>
            
            {/* Right side - Profile image with enhanced professional styling */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl border-2 border-amber-700 transform transition-all hover:scale-[1.02] duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-stone-900 opacity-20"></div>
                  <img 
                    src="profile1.jpg" 
                    alt="Adv. Bapu Dombale" 
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-amber-700"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-700"></div>
                </div>
                
                <div className="absolute -bottom-5 left-0 right-0 mx-auto bg-amber-700 text-white px-6 py-2.5 rounded-md shadow-lg text-center max-w-[80%]">
                  <div className="flex items-center justify-center gap-2">
                    <Award size={18} className="text-amber-300" />
                    <span className="font-medium">12+ Years of Legal Excellence</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-80 rounded-full p-2 shadow-lg">
                  <Star size={24} className="text-amber-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick stat highlights with enhanced professional styling */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg border-t-2 border-amber-700 group hover:bg-gray-700 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-700 rounded-lg shadow-inner">
                  <Briefcase size={26} className="text-white" />
                </div>
                <div>
                  <div className="text-amber-500 font-bold text-3xl md:text-4xl group-hover:text-amber-400 transition-colors">
                    500+
                  </div>
                  <div className="text-gray-300 font-medium mt-1">Cases Handled</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg border-t-2 border-amber-700 group hover:bg-gray-700 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-700 rounded-lg shadow-inner">
                  <CheckCircle size={26} className="text-white" />
                </div>
                <div>
                  <div className="text-amber-500 font-bold text-3xl md:text-4xl group-hover:text-amber-400 transition-colors">
                    98%
                  </div>
                  <div className="text-gray-300 font-medium mt-1">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg border-t-2 border-amber-700 group hover:bg-gray-700 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-700 rounded-lg shadow-inner">
                  <Scale size={26} className="text-white" />
                </div>
                <div>
                  <div className="text-amber-500 font-bold text-3xl md:text-4xl group-hover:text-amber-400 transition-colors">
                    12+
                  </div>
                  <div className="text-gray-300 font-medium mt-1">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}