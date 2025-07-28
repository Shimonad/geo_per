import React from "react";
import { Button } from "./ui/button";
import { heroData } from "../data/mockData";

const HeroSection = () => {
  const scrollToWhyMe = () => {
    const element = document.querySelector('#why-me');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {heroData.headline}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {heroData.subheadline}
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToWhyMe}
                  size="lg"
                  className="bg-[#1a73e8] hover:bg-[#1557b0] text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-200 hover:shadow-lg"
                >
                  {heroData.primaryCTA}
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8] hover:text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-200"
                >
                  {heroData.secondaryCTA}
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={heroData.profileImage}
                    alt="Shimona Dubey - Technical Product Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a73e8] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#fbbc04] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;