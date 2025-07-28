import React, { useRef } from "react";
import { Button } from "./ui/button";
import { challengesData } from "../data/mockData";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ChallengeCard = ({ challenge }) => (
  <div className="flex-shrink-0 w-80 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={challenge.image}
        alt={challenge.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {challenge.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {challenge.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#1a73e8] bg-blue-50 px-3 py-1 rounded-full">
          {challenge.metrics}
        </span>
        <Button variant="ghost" size="sm" className="text-[#1a73e8] hover:text-[#1557b0] p-0">
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

const ChallengesSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="challenges" className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Challenges Solved
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world problems tackled with innovative solutions and measurable results
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full shadow-lg bg-white border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              onClick={scrollRight}
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full shadow-lg bg-white border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {challengesData.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {challengesData.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ChallengesSection;