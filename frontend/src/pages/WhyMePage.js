import React, { useState } from "react";
import { metricsData, qualificationCards } from "../data/mockData";
import * as LucideIcons from "lucide-react";

const GoogleMetricCard = ({ metric, index }) => (
  <div className="text-center p-4 bg-white rounded-lg group hover:shadow-lg transition-all duration-300">
    <div className="space-y-4">
      {/* Metric Number - Google Blue */}
      <div className="text-4xl lg:text-6xl xl:text-5xl font-bold text-[#1a73e8] leading-none tracking-tight">
        {metric.number}
        <span className="text-2xl lg:text-4xl xl:text-4xl">
          {metric.value}
        </span>
      </div>

      
      {/* Metric Label */}
      <div className="space-y-2">
        <h3 className="text-lg lg:text-xl font-medium text-[#1a73e8] leading-tight">
          {metric.label}
        </h3>
        <p className="text-sm text-[#1a73e8] leading-relaxed">
          {metric.description}
        </p>
      </div>
    </div>
  </div>
);

const GoogleFlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = LucideIcons[card.front.icon] || LucideIcons.Settings;
  
  return (
    <div 
      className="card-container group cursor-pointer"
      style={{ perspective: '1000px', height: '320px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`card relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face - Google Style */}
        <div 
          className="card-front absolute inset-0 w-full h-full backface-hidden bg-black border border-[#e8eaed] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            {/* Icon with Google Colors */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4285f4] to-[#1a73e8] flex items-center justify-center shadow-lg">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-medium text-white leading-tight max-w-xs">
              {card.front.title}
            </h3>
            
            {/* Subtitle */}
            <p className="text-sm text-[#84898f] leading-relaxed">
              {card.front.subtitle}
            </p>

            {/* Hover Indicator */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#f8f9fa] border border-[#e8eaed] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-[#1a73e8] rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Back Face - Google Blue */}
        <div 
          className="card-back absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-[#D7EE1E] to-[#D7EE1E] text-black rounded-xl shadow-lg p-8 rotate-y-180"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex flex-col justify-center h-full space-y-4">
            {card.back.content.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0 opacity-80"></div>
                <p className="text-sm leading-relaxed font-light opacity-95">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyMePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f8f9fa] to-white py-4 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              Why choose{" "}
              <span className="text-[#202124] font-medium">Shimona</span>
              ?
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
              Proven track record of delivering exceptional results in technical product management, 
              data analytics, and strategic platform development.
            </p>
          </div>
        </div>
      </section>

      {/* Google-Style Metrics Section with Wavy Lines */}
      <section className="py-16 lg:py-1 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Metrics Grid - Closer spacing like Google */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 relative z-10">
            {metricsData.map((metric, index) => (
              <GoogleMetricCard key={index} metric={metric} index={index} />
            ))}
          </div>

          {/* Background Wavy Lines - positioned after metrics */}
          <div className="absolute inset-0 top-32 pointer-events-none overflow-hidden">
            <svg 
              className="w-full h-64" 
              viewBox="0 0 1200 200" 
              preserveAspectRatio="none"
            >
              {/* Yellow/Orange wavy line with multiple curves */}
              <path
                d="M-50,50 Q200,20 400,80 Q600,140 800,60 Q1000,5, 1250,100"
                stroke="#fbbc04"
                strokeWidth="5"
                fill="none"
                opacity="0.7"
                strokeLinecap="round"
              />
              {/* Green wavy line with multiple curves intersecting yellow */}
              <path
                d="M-50,100 Q200,180 400,100 Q600,40 800,120 Q1000,180, 1250,80"
                stroke="#34a853"
                strokeWidth="5"
                fill="none"
                opacity="0.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Decorative Wave */}
          <div className="flex justify-center mb-16">
            <svg width="120" height="8" viewBox="0 0 120 8" className="opacity-20">
              <path 
                d="M0,4 Q30,0 60,4 T120,4" 
                stroke="#1a73e8" 
                strokeWidth="0" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Google Flip Cards Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-6">
              What you are looking for?
            </h2>
            <p className="text-lg text-[#5f6368] max-w-3xl mx-auto leading-relaxed">
              With my expertise across technical product management, data analysis, 
              and automation let's explore if I can be a good fit.
            </p>
            <p className="text-base text-[#1a73e8] max-w-2l mx-auto text-center leading-relaxed">
              (Hover over cards to learn more about me!)
          </p>
          </div>

          {/* Flip Cards Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {qualificationCards.map((card) => (
              <GoogleFlipCard key={card.id} card={card} />
            ))}
          </div>


          {/* Closing Statement */}
          <div className="text-center py-8">
            <h4 className="text-xl lg:text-3xl font-semi-bold text-[#202124] mb-1">
                <span class="text-xl text-black text-bold"> Users Dream, I make them true!</span></h4>
            <p className="text-medium text-[#5f6368] font-light italic max-w-2xl mx-auto">
              I believe in building things that users wish, dream and love.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default WhyMePage;