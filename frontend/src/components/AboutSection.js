import React, { useState } from "react";
import { Button } from "./ui/button";
import { educationData, experienceData } from "../data/mockData";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const ExperienceContent = () => (
    <div className="space-y-8">
      {experienceData.map((exp, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0 pb-8 last:pb-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {exp.company} | {exp.role}
              </h3>
              <p className="text-base italic text-gray-600 mt-1">
                {exp.description}
              </p>
            </div>
            <span className="text-sm font-medium text-[#1a73e8] mt-2 sm:mt-0">
              {exp.period}
            </span>
          </div>
          <ul className="space-y-2">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const EducationContent = () => (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {educationData.graduate.degree}
            </h3>
            <p className="text-base italic text-gray-600 mt-1">
              {educationData.graduate.university}
            </p>
          </div>
          <span className="text-sm font-medium text-[#1a73e8] mt-2 sm:mt-0">
            {educationData.graduate.period}
          </span>
        </div>
        <ul className="space-y-2">
          {educationData.graduate.details.map((detail, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">{detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {educationData.undergraduate.degree}
            </h3>
            <p className="text-base italic text-gray-600 mt-1">
              {educationData.undergraduate.university}
            </p>
          </div>
          <span className="text-sm font-medium text-[#1a73e8] mt-2 sm:mt-0">
            {educationData.undergraduate.period}
          </span>
        </div>
        <ul className="space-y-2">
          {educationData.undergraduate.details.map((detail, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Shimona
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive background in technical product management, data analysis, and strategic planning
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <Button
              onClick={() => setActiveTab('education')}
              variant={activeTab === 'education' ? 'default' : 'ghost'}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'education' 
                  ? 'bg-[#1a73e8] text-white shadow-sm' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </Button>
            <Button
              onClick={() => setActiveTab('experience')}
              variant={activeTab === 'experience' ? 'default' : 'ghost'}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'experience' 
                  ? 'bg-[#1a73e8] text-white shadow-sm' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="transition-opacity duration-300 ease-in-out">
              {activeTab === 'experience' ? <ExperienceContent /> : <EducationContent />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;