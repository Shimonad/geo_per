import React, { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { challengesData } from "../data/mockData";
import { ChevronLeft, ChevronRight, ArrowRight, Target, AlertTriangle } from "lucide-react";

const ChallengeCard = ({ challenge, isActive }) => (
  <div className={`flex-shrink-0 w-full max-w-4xl mx-auto transition-all duration-500 ${
    isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
  }`}>
    <div className="bg-white rounded-xl border border-[#e8eaed] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Challenge Header with Red Tint */}
      <div className="bg-gradient-to-r from-[#fce8e6] to-[#fff5f5] px-8 py-6 border-b border-[#fddcd7]">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ea4335] to-[#d23f31] flex items-center justify-center shadow-md">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-[#202124] mb-1">
              {challenge.title}
            </h3>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-[#ea4335]" />
              <span className="text-sm font-medium text-[#ea4335]">Challenge #{challenge.id}</span>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-[#5f6368] leading-relaxed">
          {challenge.description}
        </p>
      </div>

      {/* Challenge Image */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img 
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Overlay Content */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-[#202124] mb-1">Impact Achieved</h4>
                <p className="text-[#1a73e8] font-bold text-lg">{challenge.metrics}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#e8f5e8] flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#137333]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Details */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-[#f8f9fa] rounded-lg">
            <div className="text-2xl font-bold text-[#1a73e8] mb-2">Phase 1</div>
            <div className="text-sm text-[#5f6368]">Problem Identification</div>
          </div>
          <div className="text-center p-4 bg-[#f8f9fa] rounded-lg">
            <div className="text-2xl font-bold text-[#1a73e8] mb-2">Phase 2</div>
            <div className="text-sm text-[#5f6368]">Solution Design</div>
          </div>
          <div className="text-center p-4 bg-[#f8f9fa] rounded-lg">
            <div className="text-2xl font-bold text-[#1a73e8] mb-2">Phase 3</div>
            <div className="text-sm text-[#5f6368]">Implementation</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChallengesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const nextChallenge = () => {
    if (currentIndex < challengesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevChallenge = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToChallenge = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              Challenges{" "}
              <span className="text-[#ea4335] font-medium">Solved</span>
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
              Real-world problems tackled with innovative solutions and measurable results. 
              Each challenge represents a significant milestone in technical product management.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Navigation */}
      <section className="bg-white border-b border-[#e8eaed] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Navigation Dots */}
            <div className="flex items-center space-x-3">
              {challengesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToChallenge(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-[#ea4335] w-8' 
                      : 'bg-[#dadce0] hover:bg-[#ea4335]'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={prevChallenge}
                disabled={currentIndex === 0}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full border-[#dadce0] disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-sm text-[#5f6368] px-4">
                {currentIndex + 1} of {challengesData.length}
              </span>
              <Button
                onClick={nextChallenge}
                disabled={currentIndex === challengesData.length - 1}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full border-[#dadce0] disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Display */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {challengesData.map((challenge, index) => (
                <div 
                  key={challenge.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <ChallengeCard 
                    challenge={challenge} 
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Statistics */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#202124] mb-4">
              Collective Impact
            </h2>
            <p className="text-lg text-[#5f6368]">
              Combined results across all challenge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#f8f9fa] rounded-xl">
              <div className="text-4xl font-light text-[#1a73e8] mb-4">75%</div>
              <h3 className="text-lg font-medium text-[#202124] mb-2">Average Improvement</h3>
              <p className="text-[#5f6368] text-sm">Across all metrics and KPIs</p>
            </div>
            <div className="text-center p-8 bg-[#f8f9fa] rounded-xl">
              <div className="text-4xl font-light text-[#1a73e8] mb-4">3</div>
              <h3 className="text-lg font-medium text-[#202124] mb-2">Major Challenges</h3>
              <p className="text-[#5f6368] text-sm">Successfully resolved</p>
            </div>
            <div className="text-center p-8 bg-[#f8f9fa] rounded-xl">
              <div className="text-4xl font-light text-[#1a73e8] mb-4">100%</div>
              <h3 className="text-lg font-medium text-[#202124] mb-2">Success Rate</h3>
              <p className="text-[#5f6368] text-sm">In problem resolution</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengesPage;