import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Target, BarChart3, Users, Shield, Lightbulb, Globe, Menu, X, Filter, Zap, BrainCircuit, CheckCircle, TrendingUp, ChevronLeft, ChevronRight, AlertTriangle, MapPin, Store, CreditCard, Truck, Clock, ChevronDown } from "lucide-react";


export default function DeepDivePage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState(new Set());
  
  const chartRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Google brand colors
  const googleColors = [
    { bg: "bg-[#4285F4]", text: "text-white", light: "bg-blue-50", accent: "border-blue-200" }, // G - Blue
    { bg: "bg-[#EA4335]", text: "text-white", light: "bg-red-50", accent: "border-red-200" }, // o - Red
    { bg: "bg-yellow-400", text: "text-gray-900", light: "bg-yellow-50", accent: "border-yellow-200" }, // o - Yellow
    { bg: "bg-[#4285F4]", text: "text-white", light: "bg-blue-50", accent: "border-blue-200" }, // G - Blue
    { bg: "bg-[#34A853]", text: "text-white", light: "bg-green-50", accent: "border-green-200" }, // l - Green
    { bg: "bg-[#EA4335]", text: "text-white", light: "bg-red-50", accent: "border-red-200" }, // o - Red
  ];

  const challengeData = [
    { 
      id: 'quality', 
      title: 'Data Ingestion & Quality', 
      description: 'Inconsistent third-party data compromises map reliability and AI model performance, leading to user frustration.',
      impact: 'Inconsistent third-party data compromises map reliability and AI model performance, leading to user frustration and reputational risk.',
      analysis: { impact: 9, complexity: 8 },
      icon: Filter,
      ...googleColors[0]
    },
    { 
      id: 'efficiency', 
      title: 'Operational Efficiency', 
      description: 'Manual processes are unscalable, error-prone, and create bottlenecks that hinder AI-led transformation.',
      impact: 'Manual processes are unscalable, prone to error, and create bottlenecks that hinder the strategic shift to an AI-led environment.',
      analysis: { impact: 8, complexity: 7 },
      icon: Zap,
      ...googleColors[1]
    },
    { 
      id: 'collaboration', 
      title: 'Cross-Functional Teams', 
      description: 'Misalignment across teams and vendors leads to project delays, scope creep, and missed deliverables.',
      impact: 'Misalignment across internal teams and external vendors leads to project delays, scope creep, and failure to deliver on product goals.',
      analysis: { impact: 7, complexity: 7 },
      icon: Users,
      ...googleColors[2]
    },
    { 
      id: 'governance', 
      title: 'Data Governance', 
      description: 'Lapses in handling sensitive geospatial data can result in severe legal penalties and brand damage.',
      impact: 'Lapses in handling sensitive geospatial data can result in severe legal penalties, loss of user trust, and irreparable brand damage.',
      analysis: { impact: 10, complexity: 9 },
      icon: Shield,
      ...googleColors[3]
    },
    { 
      id: 'talent', 
      title: 'Resource Optimization', 
      description: 'Skill gaps and analyst fatigue from manual tasks impede innovation and AI-driven solution development.',
      impact: 'Skill gaps and analyst fatigue from manual tasks impede innovation and the development of advanced, AI-driven solutions.',
      analysis: { impact: 6, complexity: 6 },
      icon: BrainCircuit,
      ...googleColors[4]
    },
  ];

  const solutionData = [
    { 
      title: 'Automated Ingestion & UDM', 
      description: 'Implement robust, automated data ingestion pipelines with strong quality controls and a Unified Data Model (UDM).', 
      solves: ['quality', 'efficiency'],
      icon: Target,
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      title: 'AI/ML for Operations', 
      description: 'Leverage GeoAI for workflow automation, predictive analytics, and enhanced insight generation.', 
      solves: ['efficiency', 'talent'],
      icon: Lightbulb,
      gradient: "from-red-500 to-red-600"
    },
    { 
      title: 'Collaborative Frameworks', 
      description: 'Establish clear communication channels, shared OKRs, and formalized vendor management.', 
      solves: ['collaboration'],
      icon: Users,
      gradient: "from-yellow-400 to-yellow-500"
    },
    { 
      title: 'Robust Governance & Auditing', 
      description: 'Implement a comprehensive data governance framework with automated controls and continuous auditing.', 
      solves: ['governance', 'quality'],
      icon: Shield,
      gradient: "from-blue-600 to-blue-700"
    },
    { 
      title: 'Productivity Optimization', 
      description: 'Optimize team productivity through automation of mundane tasks, targeted skill development, and knowledge management.', 
      solves: ['talent', 'efficiency'],
      icon: BarChart3,
      gradient: "from-green-500 to-green-600"
    },
    { 
      title: 'Proactive Risk Management', 
      description: 'Develop proactive risk mitigation strategies for technical, operational, and compliance-related threats.', 
      solves: ['governance', 'collaboration'],
      icon: Globe,
      gradient: "from-red-600 to-red-700"
    },
  ];

  const strategicProcessData = [
    { 
      phase: 'Discovery & Assessment', 
      details: 'Deep dive into the current state. Conduct stakeholder interviews, audit data pipelines, and analyze existing tools to identify pain points.',
      timeline: 'Weeks 1-2',
      color: googleColors[0]
    },
    { 
      phase: 'Problem Definition', 
      details: 'Perform root cause analysis on key issues. Quantify business impact and use a prioritization matrix to focus on high-value problems.',
      timeline: 'Weeks 3-4',
      color: googleColors[1]
    },
    { 
      phase: 'Solution Design', 
      details: 'Collaborate with cross-functional teams to design solutions. Define technical requirements and create an actionable Agile project plan.',
      timeline: 'Weeks 5-8',
      color: googleColors[2]
    },
    { 
      phase: 'Execution & Iteration', 
      details: 'Lead project execution using Agile sprints. Continuously monitor risks, manage dependencies, and provide transparent stakeholder communication.',
      timeline: 'Weeks 9-20',
      color: googleColors[3]
    },
    { 
      phase: 'Continuous Improvement', 
      details: 'Measure the impact of solutions against defined KPIs. Conduct post-mortems, document learnings, and scale successful initiatives.',
      timeline: 'Ongoing',
      color: googleColors[4]
    },
  ];

  const impactPlanData = [
    { 
      period: 'Days 1-30: Learn & Orient', 
      details: 'Immerse in team culture, map stakeholders, and understand the operational landscape. Focus on listening and building foundational knowledge.',
      color: googleColors[0]
    },
    { 
      period: 'Days 31-60: Analyze & Propose', 
      details: 'Apply learning to conduct focused data analysis using SQL. Identify and propose 1-2 "quick win" automation initiatives to demonstrate early value.',
      color: googleColors[1]
    },
    { 
      period: 'Days 61-90: Execute & Plan', 
      details: 'Lead a pilot project to completion. Present initial impact to stakeholders and contribute to the long-term strategic roadmap.',
      color: googleColors[2]
    },
  ];

  const impactPhraseData = [
    { text: "Tapping into the So-whats??", color: "bg-[#4285F4]" }, // Google Blue
    { text: "Data, Data, what do you say?", color: "bg-[#EA4335]" }, // Google Red
    { text: "Actionable roadmap", color: "bg-[#FBBC05]" }, // Google Yellow
    { text: "AI to Automate", color: "bg-[#4285F4]" }, // Google Blue
    { text: "Iterate on what the user says.", color: "bg-[#34A853]" }, // Google Green
    { text: "And, Think Global!", color: "bg-[#EA4335]" } // Google Red
  ];


  const scrollToSection = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Calculate one box width (384px + 32px gap = 416px)
      const scrollAmount = direction === 'next' ? 416 : -416;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  const togglePhase = (index) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPhases(newExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'solutions', 'roadmap', 'leadership'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Google_Sans',_'Roboto',_sans-serif]">
      {/* Header with Google-style nav */}
      <header hidden className="sticky top-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-normal text-gray-900 flex items-center tracking-tight">
              <span className="text-blue-600 font-medium">G</span>
              <span className="text-red-500 font-medium">o</span>
              <span className="text-yellow-500 font-medium">o</span>
              <span className="text-blue-600 font-medium">g</span>
              <span className="text-green-500 font-medium">l</span>
              <span className="text-red-500 font-medium">e</span>
              <span className="ml-3 text-xl font-light text-gray-600">Geo TPM Strategy</span>
            </div>
            
            <div hidden className="hidden md:flex items-center space-x-8">
              {['overview', 'challenges', 'solutions', 'roadmap', 'leadership'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative text-sm font-medium transition-all duration-200 hover:text-blue-600 py-2 px-3 rounded-lg ${
                    activeSection === section 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4 bg-white rounded-lg border border-gray-100 shadow-lg">
              {['overview', 'challenges', 'solutions', 'roadmap', 'leadership'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 px-4 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section with Google-style design */}
        {/* Key Change 1: Added `relative` to the <section>
            This makes the entire section the positioning context for the lines.
        */}
        <section className="relative bg-white">

        {/* This container is now only for the centered text content. */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
                    Geo Map{" "}
                    <span className="text-green-700 font-medium">Intelligence</span>
                </h1>
                <p className="text-xl text-[#5f6368] leading-relaxed font-light">
                    The Goal is to transform data ingestion and processing into a proactive, AI-driven pipeline,
                    ensuring Google Maps remains the most accurate and useful map for billions globally.
                </p>
            </div>
        </div>

        {/* Key Change 2: Moved the lines' div here & removed overflow-hidden.
            It's now a direct child of the <section>, outside the max-w-7xl container.
            This allows it to span the full width. I also removed `overflow-hidden` to prevent clipping.
        */}
        <div className="absolute left-0 w-full top-48 z-0 pointer-events-none">
            <svg 
                className="w-full h-64" 
                viewBox="0 0 1200 200" 
                preserveAspectRatio="none"
            >
                <path
                    d="M-50,50 Q200,20 400,80 Q600,140 800,60 Q1000,5, 1250,100"
                    stroke="#fbbc04"
                    strokeWidth="5"
                    fill="none"
                    opacity="0.7"
                    strokeLinecap="round"
                />
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

        </section>     


        

        {/* Challenges Section with Google Maps-style cards */}
        <section id="challenges" className="py-24 bg-gray-43 relative">
          <div className="container mx-auto bg-gray-43 px-6">
            <div className="text-center mb-20 bg-gray-43">
              <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 text-sm text-red-600 mb-6">
                <Shield className="w-4 h-4" />
                Critical Focus Areas
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-6">
                Core Challenges
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed font-light">
                Five strategic areas that demand immediate attention and innovative solutions to ensure 
                Google Maps maintains its position as the world's most trusted mapping platform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {challengeData.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    key={challenge.id}
                    className={`group relative bg-white rounded-3xl border-2 ${challenge.accent} p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 transform ${
                      selectedChallenge?.id === challenge.id 
                        ? 'shadow-2xl scale-105 ring-4 ring-blue-100' 
                        : 'shadow-lg hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedChallenge(challenge)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl opacity-60"></div>
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${challenge.light} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${challenge.bg.replace('bg-', 'text-')}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                        {challenge.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                          Explore details
                        </span>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedChallenge && (
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${selectedChallenge.light}`}>
                    <selectedChallenge.icon className={`w-8 h-8 ${selectedChallenge.bg.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      {selectedChallenge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                      {selectedChallenge.impact}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Business Impact</span>
                        <span className="text-lg font-bold text-[#34A853]">
                          {selectedChallenge.analysis.impact}/10
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#34A853] to-[#34A853] h-3 rounded-full transition-all duration-1000 shadow-sm"
                          style={{ width: `${selectedChallenge.analysis.impact * 10}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Resolution Complexity</span>
                        <span className="text-lg font-bold text-blue-600">
                          {selectedChallenge.analysis.complexity}/10
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 shadow-sm"
                          style={{ width: `${selectedChallenge.analysis.complexity * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-5xl font-light text-gray-900 mb-2">
                        {Math.round((selectedChallenge.analysis.impact + selectedChallenge.analysis.complexity) / 2)}
                      </div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Priority Score</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Solutions Section with modern card grid */}
        <section id="solutions" className="py-15 bg-white relative">
          <div className="absolute inset-0 bg-white opacity-30"></div>
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 text-sm text-green-600 mb-6">
                <Lightbulb className="w-4 h-4" />
                Strategic Solutions
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-6">
                Solution Framework
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed font-light">
                Six interconnected strategies designed to transform challenges into competitive advantages 
                through automation, AI, and strategic collaboration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionData.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-blue-100 ${solution.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                            {solution.title}
                        </h3>
                    </div>
                      <p className="text-gray-600 mb-6 leading-relaxed font-light">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.solves.map((challengeId, index) => {
                          const challenge = challengeData.find(c => c.id === challengeId);
                          return (
                            <span key={`${challengeId}-${index}`} className={`text-xs px-3 py-1 rounded-full font-medium ${challenge?.light} ${challenge?.bg.replace('bg-', 'text-')}`}>
                              {challenge?.title.split(' ')[0] === 'Data' 
                                    ? challenge?.title.split(' ').slice(0, 2).join(' ')
                                    : challenge?.title.split(' ')[0]
                                }
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roadmap Section with timeline design */}
        <section id="roadmap" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 text-sm text-yellow-600 mb-6">
                <Target className="w-4 h-4" />
                Execution Plan
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-6">
                Strategic Roadmap
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed font-light">
                A phased approach combining long-term strategic thinking with immediate tactical wins 
                to deliver measurable impact from day one.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Strategic Process */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-12 text-center">
                  Strategic Process Framework
                </h3>
                <div className="space-y-6">
                  {strategicProcessData.map((item, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => togglePhase(`strategic-${index}`)}
                    >
                      <div className={`bg-white rounded-3xl border-2 ${item.color.accent} p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${item.color.bg} ${item.color.text} flex items-center justify-center text-lg font-semibold shadow-lg`}>
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">
                                {item.phase}
                              </h4>
                              <p className="text-sm text-gray-500 font-medium">{item.timeline}</p>
                            </div>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                              expandedPhases.has(`strategic-${index}`) ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                        {expandedPhases.has(`strategic-${index}`) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-2xl">
                            <p className="text-gray-700 leading-relaxed font-light">{item.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 90-Day Plan */}
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-12 text-center">
                  90-Day Impact Plan
                </h3>
                <div className="space-y-6">
                  {impactPlanData.map((item, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => togglePhase(`impact-${index}`)}
                    >
                      <div className={`bg-white rounded-3xl border-2 ${item.color.accent} p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${item.color.bg} ${item.color.text} flex items-center justify-center text-lg font-semibold shadow-lg`}>
                              {index + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {item.period}
                            </h4>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                              expandedPhases.has(`impact-${index}`) ? 'rotate-90 text-blue-600' : 'group-hover:translate-x-1'
                            }`}
                          />
                        </div>
                        {expandedPhases.has(`impact-${index}`) && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-2xl">
                            <p className="text-gray-700 leading-relaxed font-light">{item.details}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Metrics Dashboard */}
        <section>
          <div className="flex-shrink-0 w-full lg:w-screen snap-start">
            <div className="bg-white p-8 lg:p-12">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 text-sm text-green-600 mb-6">
                  <Target className="w-4 h-4" />
                  Insights Wizard
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-4">
                    Performance Metrics
                  </h2>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed font-light">
                  Clear Key Performance Indicators to ensure measurable progress and alignment with Google's strategic goals.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f1f8e9] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#137333] mb-2">96%</div>
                    <div className="text-sm text-[#5f6368]">Data Quality Score</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f1f5fe] rounded-xl p-6 text-center ">
                    <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#1a73e8] mb-2">8.4M</div>
                    <div className="text-sm text-[#5f6368]">Records Processed Daily</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#fff3e0] to-[#fef7e0] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#fbbc04] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#f57c00] mb-2">78%</div>
                    <div className="text-sm text-[#5f6368]">Automation Rate</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#fce8e6] to-[#fef0ef] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#ea4335] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#ea4335] mb-2">127</div>
                    <div className="text-sm text-[#5f6368]">Active Providers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Leadership Section with premium design */}
        <section id="leadership" className="py-24 bg-white via-white to-green-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40"></div>
          <div className="container mx-auto px-6 relative">

            {/* Shimona's Approach Section with premium design */}
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm text-blue-600 mb-6">
                    <Globe className="w-4 h-4" />
                    Leadership Excellence
                </div>
                <h3 className="text-3xl lg:text-4xl font-light text-[#202124] mb-6">
                  Shimona, How will you achieve it?
                </h3>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed font-light">
                  My systematic approach to delivering exceptional results through strategic thinking, 
                  data-driven insights, and relentless execution excellence.
                </p>
              </div>

              {/* Horizontal Flow Cards with Google colors and Navigation */}
              <div className="relative mb-16 py-8">
                <div className="flex justify-center">
                  {/* Container that limits scroll width to 3 cards */}
                  <div className="relative w-full max-w-[1248px]"> {/* 3 cards * 384px + 2 gaps * 32px = 1248px */}
                    
                    {/* Navigation Arrows - Positioned to span across 3 boxes */}
                    <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-10">
                      <Button
                        onClick={() => scrollToSection('prev')}
                        variant="outline"
                        size="sm"
                        className="w-16 h-16 rounded-full border-2 border-[#e8eaed] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:border-blue-500 transition-colors"
                      >
                        <ChevronLeft className="w-8 h-8 text-[#5f6368]" />
                      </Button>
                    </div>

                    <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 z-10">
                      <Button
                        onClick={() => scrollToSection('next')}
                        variant="outline"
                        size="sm"  
                        className="w-16 h-16 rounded-full border-2 border-[#e8eaed] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:border-blue-500 transition-colors"
                      >
                        <ChevronRight className="w-8 h-8 text-[#5f6368]" />
                      </Button>
                    </div>

                    {/* Scrollable Container */}
                    <div 
                      ref={scrollContainerRef}
                      className="flex overflow-x-auto pb-6 py-4 space-x-8 snap-x snap-mandatory scrollbar-hide"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {[
                        { text: "Tapping into the So-whats??", subtitle: "Strategic questioning drives clarity." },
                        { text: "Data, Data, what do you say?", subtitle: "Let insights guide decisions." },
                        { text: "Actionable roadmap", subtitle: "Clear paths to measurable outcomes." },
                        { text: "AI to Automate", subtitle: "Amplifies the workflows and redundancies." },
                        { text: "Iterate on what the user says.", subtitle: "Continuous feedback loops." },
                        { text: "And, Think Global!", subtitle: "Scale solutions worldwide." }
                      ].map((step, index) => {
                        const color = googleColors[index];
                        return (
                          <div key={index} className="relative flex-shrink-0 snap-start group">
                            <div className={`w-96 h-56 rounded-3xl ${color.bg} ${color.text} p-8 flex flex-col justify-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

                              <div className="relative z-10">
                                <h4 className={`text-2xl font-semibold ${color.text} leading-tight mb-2`}>
                                  {step.text}
                                </h4>
                                <p className={`${color.text} opacity-90 text-sm font-semi-bold`}>
                                  {step.subtitle}
                                </p>
                              </div>
                            </div>
                            

                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced mobile scroll indicator */}
                <div className="flex justify-center mt-8 md:hidden">
                  <div className="flex space-x-2">
                    {googleColors.map((color, i) => (
                      <div key={i} className={`w-3 h-3 ${color.bg} rounded-full opacity-60`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





      </main>

    </div>
  );
} 