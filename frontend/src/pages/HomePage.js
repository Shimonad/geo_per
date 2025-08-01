import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { heroData } from "../data/mockData";
import { ArrowRight, Play } from "lucide-react";
import { track } from "@vercel/analytics";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f8f9fa]">
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a73e8" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#e3f2fd] text-[#1565c0] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#1565c0] rounded-full animate-pulse"></div>
                <span>Available for Google Geo TPM Role</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-normal text-[#202124] leading-tight tracking-tight">
                  Meet{" "}
                  <span className="text-[#1a73e8] font-medium">Shimona</span>
                  <br />
                  <span className="text-[#1a73e8] font-medium">Dubey</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-[#5f6368] leading-relaxed max-w-2xl font-light">
                Technical Program Manager: Driving Impactful Data & AI Solutions impacting{" "}
                  <span className="font-medium text-[#1a73e8]">1M users globally</span>{" "}
                  with over {" "}
                  <span className="font-medium text-[#1a73e8]">$5M</span>{" "}
                  saved on operational expenses.
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Link to="/why-me">
                  <Button 
                    size="lg"
                    className="bg-[#1a73e8] hover:bg-[#1557b1] text-white px-8 py-3 text-base font-medium rounded-md"
                    onClick={() => track('Explore More')}
                  >
                    Explore More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-[#dadce0] text-[#1a73e8] hover:bg-white hover:border-[#1a73e8] px-8 py-3 text-base font-medium rounded-md"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Schedule Interview
                  </Button>
                </Link>
              </div>



              {/* Trust Indicators */}
            </div>

            {/* Right Content - Only Picture with Animation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-96 h-96 object-contain animate-shake"
              />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div hidden className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-auto">
            <path 
              d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" 
              fill="url(#waveGradient)"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1a73e8', stopOpacity: 0.1 }} />
                <stop offset="50%" style={{ stopColor: '#4285f4', stopOpacity: 0.05 }} />
                <stop offset="100%" style={{ stopColor: '#1a73e8', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-[#202124] mb-6">
            Ready to explore my journey?{" "}
            <span className="text-[#1a73e8] font-medium"></span>
          </h2>
          <p className="text-lg text-[#5f6368] mb-8 leading-relaxed">
            Discover how my experience in technical product management, data analysis, 
            and strategic planning aligns perfectly with Google's geo-location platform needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button 
                size="lg"
                className="bg-[#1a73e8] hover:bg-[#1557b1] text-white px-8 py-3 text-base font-medium rounded-md"
              >
                View Qualifications
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                variant="outline"
                size="lg"
                className="border-[#dadce0] text-[#1a73e8] hover:bg-white hover:border-[#1a73e8] px-8 py-3 text-base font-medium rounded-md"
              >
                See Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;