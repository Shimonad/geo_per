import React, { useRef } from "react";
import { Button } from "../components/ui/button";
import { challengesData } from "../data/mockData";
import { ChevronLeft, ChevronRight, ArrowRight, Target, AlertTriangle, MapPin, Store, CreditCard, Truck, CheckCircle, Clock, Users, TrendingUp, ChevronDown } from "lucide-react";

const ChallengesPage = () => {
  const scrollContainerRef = useRef(null);

  const scrollToSection = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'next' ? container.offsetWidth : -container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              Challenges to be{" "}
              <span className="text-[#ea4335] font-medium">Solved</span>
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
            Critical issues that might need attention in current Geo Data Operations.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scrollable Content */}
      <section className="relative bg-white -mt-12">
        <div className="flex justify-center">
          {/* Container that limits scroll width to card area */}
          <div className="relative w-full max-w-4xl">
            
            {/* Navigation Arrows - Positioned just outside the scroll container */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                onClick={() => scrollToSection('prev')}
                variant="outline"
                size="sm"
                className="w-12 h-12 rounded-full border-2 border-gray-850 bg-white backdrop-blur-sm shadow-lg hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </Button>
            </div>

            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                onClick={() => scrollToSection('next')}
                variant="outline"
                size="sm"  
                className="w-12 h-12 rounded-full border-2 border-gray-850 bg-white backdrop-blur-sm shadow-lg hover:bg-white"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </Button>
            </div>

            {/* Scrollable Container - Limited to card width */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Section: Individual Challenge Cards */}
              {challengesData.map((challenge, index) => (
                <div key={challenge.id} className="flex-shrink-0 w-full snap-start p-8 lg:p-12">
                  {/* Single Challenge Card */}
                  <div className="bg-white rounded-xl border border-[#e8eaed] p-8 lg:p-12 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <Target className="w-5 h-5 text-[#ea4335]" />
                          <span className="text-base font-medium text-[#ea4335]">Challenge #{index + 1}</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-medium text-[#202124] mb-4">
                          {challenge.title}
                        </h3>
                        <p className="text-lg text-[#5f6368] leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-[#fce8e6] rounded-lg p-6">
                        <h4 className="text-lg font-medium text-[#202124] mb-3">Impact</h4>
                        <p className="text-base text-[#5f6368]">{challenge.impact}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                          <div className="text-4xl font-bold text-[#ea4335] mb-2">{challenge.analysis.impact}/10</div>
                          <div className="text-base text-[#5f6368]">Impact Score</div>
                        </div>
                        <div className="text-center p-6 bg-[#f8f9fa] rounded-lg">
                          <div className="text-4xl font-bold text-[#1a73e8] mb-2">{challenge.analysis.complexity}/10</div>
                          <div className="text-base text-[#5f6368]">Complexity</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {challengesData.map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === index ? 'bg-[#ea4335] w-8' : 'bg-[#dadce0]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengesPage;