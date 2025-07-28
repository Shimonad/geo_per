import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { heroData } from "../data/mockData";
import { ArrowRight, Play } from "lucide-react";

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
                  Expert Technical Product Manager with{" "}
                  <span className="font-medium text-[#1a73e8]">7+ years</span>{" "}
                  delivering geo-location platforms and third-party integrations that delight{" "}
                  <span className="font-medium text-[#1a73e8]">millions of users</span>{" "}
                  worldwide.
                </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/why-me">
                  <Button 
                    size="lg"
                    className="bg-[#1a73e8] hover:bg-[#1557b1] text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-200 hover:shadow-lg group"
                  >
                    Explore My Expertise
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-[#dadce0] text-[#1a73e8] hover:bg-[#f8f9fa] hover:border-[#1a73e8] px-8 py-4 text-base font-medium rounded-md transition-all duration-200 group"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Schedule Interview
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a73e8]">7+</div>
                  <div className="text-sm text-[#5f6368] font-medium">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a73e8]">999K+</div>
                  <div className="text-sm text-[#5f6368] font-medium">Users Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a73e8]">$5M+</div>
                  <div className="text-sm text-[#5f6368] font-medium">Client Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1a73e8]">5+</div>
                  <div className="text-sm text-[#5f6368] font-medium">Startups</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Profile Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-[#e8eaed] p-8 max-w-sm">
                  <div className="text-center space-y-6">
                    {/* Profile Image */}
                    <div className="relative mx-auto w-32 h-32">
                      <div className="w-full h-full rounded-full border-4 border-[#1a73e8] p-1">
                        <div className="w-full h-full bg-gradient-to-br from-[#4285f4] to-[#1a73e8] rounded-full flex items-center justify-center">
                          <div className="text-white text-3xl font-bold">SD</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#34a853] rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#202124] mb-2">Shimona Dubey</h3>
                      <p className="text-[#5f6368] text-sm mb-4">Technical Product Manager</p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {["Geo-location", "Data Analytics", "Product Strategy"].map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-[#e8f0fe] text-[#1a73e8] text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="border-t border-[#e8eaed] pt-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-[#1a73e8]">MS</div>
                          <div className="text-xs text-[#5f6368]">Tufts University</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#1a73e8]">7Y</div>
                          <div className="text-xs text-[#5f6368]">Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#fbbc04] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#ea4335] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-[#34a853] rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
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
            Ready to explore my journey to{" "}
            <span className="text-[#1a73e8] font-medium">Google?</span>
          </h2>
          <p className="text-lg text-[#5f6368] mb-8 leading-relaxed">
            Discover how my experience in technical product management, data analysis, 
            and strategic planning aligns perfectly with Google's geo-location platform needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/why-me">
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