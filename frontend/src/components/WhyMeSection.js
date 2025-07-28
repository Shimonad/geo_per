import React from "react";
import { metricsData, qualificationCards } from "../data/mockData";
import * as LucideIcons from "lucide-react";

const MetricCard = ({ metric }) => (
  <div className="text-center p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div className="text-3xl lg:text-4xl font-bold text-[#1a73e8] mb-2">
      {metric.number}
    </div>
    <div className="text-lg font-semibold text-gray-900 mb-1">
      {metric.label}
    </div>
    <div className="text-sm text-gray-600">
      {metric.description}
    </div>
  </div>
);

const QualificationCard = ({ card }) => {
  const IconComponent = LucideIcons[card.front.icon] || LucideIcons.Settings;
  
  return (
    <div className="card-container perspective-1000" style={{ perspective: '1000px' }}>
      <div className="card group relative w-full h-72 transform-style-preserve-3d transition-transform duration-300 hover:rotate-y-180">
        {/* Front Face */}
        <div className="card-front absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-200">
          <IconComponent className="w-12 h-12 text-[#1a73e8]" />
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {card.front.title}
          </h3>
          <p className="text-sm text-gray-600">
            {card.front.subtitle}
          </p>
        </div>
        
        {/* Back Face */}
        <div className="card-back absolute inset-0 w-full h-full backface-hidden bg-[#1a73e8] text-white rounded-lg p-6 flex flex-col justify-center rotate-y-180 shadow-lg">
          <div className="space-y-3">
            {card.back.content.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyMeSection = () => {
  return (
    <section id="why-me" className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metricsData.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Qualification Cards Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What you are looking for?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {qualificationCards.map((card) => (
            <QualificationCard key={card.id} card={card} />
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            You dream, We build!
          </h3>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default WhyMeSection;