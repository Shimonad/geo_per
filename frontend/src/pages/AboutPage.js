import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { educationData, experienceData } from "../data/mockData";
import { GraduationCap, Briefcase, MapPin, Calendar, Award, Users } from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ExperienceContent = () => (
    <div className="space-y-0">
      {experienceData.map((exp, index) => (
        <div key={index} className="border-b border-[#e8eaed] last:border-b-0">
          <div className="p-8 hover:bg-[#f8f9fa] transition-colors duration-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-medium text-[#202124]">
                    {exp.company}
                  </h3>
                  <span className="px-3 py-1 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full">
                    {exp.role}
                  </span>
                </div>
                <p className="text-base text-[#5f6368] mb-1 italic">
                  {exp.description}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-[#5f6368] mt-2 lg:mt-0">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{exp.period}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exp.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-[#e8eaed] hover:border-[#1a73e8] hover:shadow-sm transition-all duration-200">
                  <div className="w-2 h-2 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-[#202124] leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const EducationContent = () => (
    <div className="space-y-0">
      {/* Graduate Education */}
      <div className="border-b border-[#e8eaed]">
        <div className="p-8 hover:bg-[#f8f9fa] transition-colors duration-200">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-medium text-[#202124]">
                  {educationData.graduate.university}
                </h3>
                <span className="px-3 py-1 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full">
                  Graduate
                </span>
              </div>
              <p className="text-base text-[#5f6368] mb-1 font-medium">
                {educationData.graduate.degree}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-[#5f6368] mt-2 lg:mt-0">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{educationData.graduate.period}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.graduate.details.map((detail, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-[#e8eaed]">
                <div className="w-2 h-2 bg-[#1a73e8] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-[#202124] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Undergraduate Education */}
      <div>
        <div className="p-8 hover:bg-[#f8f9fa] transition-colors duration-200">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-medium text-[#202124]">
                  {educationData.undergraduate.university}
                </h3>
                <span className="px-3 py-1 bg-[#fff3e0] text-[#f57c00] text-sm font-medium rounded-full">
                  Undergraduate
                </span>
              </div>
              <p className="text-base text-[#5f6368] mb-1 font-medium">
                {educationData.undergraduate.degree}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-[#5f6368] mt-2 lg:mt-0">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{educationData.undergraduate.period}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.undergraduate.details.map((detail, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-[#e8eaed]">
                <div className="w-2 h-2 bg-[#f57c00] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-[#202124] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section - Google Pricing Style */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              About {" "}
              <span className="text-[#FBBC05] font-medium">Me</span>
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
              Creative background: Technical Product Management, Data Analysis, and Strategic Planning. 
            </p>
          </div>
        </div>
      </section>

      {/* Toggle Section - Google Pricing Style */}
      <section className="bg-white border-b border-[#e8eaed] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg border border-[#dadce0] p-1 bg-[#f8f9fa]">
              <Button
                onClick={() => setActiveTab('education')}
                variant="ghost"
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'education' 
                    ? 'bg-[#1a73e8] text-white shadow-sm hover:bg-[#1a73e8]' 
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </Button>
              <Button
                onClick={() => setActiveTab('experience')}
                variant="ghost"
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'experience' 
                    ? 'bg-[#1a73e8] text-white shadow-sm hover:bg-[#1a73e8]' 
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Google Pricing Table Style */}
      <section className="py-8 relative overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Category Filter (for Experience) */}
          {activeTab === 'experience' && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
              </div>
            </div>
          )}

          {/* Content Area - Pricing Table Style */}
          <div className="bg-white rounded-lg border border-[#dadce0] shadow-sm overflow-hidden">
            <div className="transition-opacity duration-300 ease-in-out">
              {activeTab === 'experience' ? <ExperienceContent /> : <EducationContent />}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-[#5f6368] mb-4">
              Want to learn more about my qualifications for the Google Geo TPM role?
            </p>
            <a href="/Deepdive">
              <Button className="bg-[#1a73e8] hover:bg-[#1557b1] text-white px-8 py-3">
                Let's Deep Dive
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;