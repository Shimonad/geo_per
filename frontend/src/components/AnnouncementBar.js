import React, { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleLearnMore = () => {
    // Scroll to Solution section
    const solutionSection = document.getElementById('solution-section');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1a73e8] text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">
            Get ready for Shimona's charged Third Party Integration and Quality Evaluations to streamline every user's experience!{" "}
            <a href="/why-me">
              <button 
                className="underline hover:no-underline font-semibold"
              >
                Learn More
              </button>
            </a>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;