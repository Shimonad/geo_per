import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { dashboardData } from "../data/mockData";
import { 
  BarChart3, 
  Database, 
  Shield, 
  Activity, 
  Monitor,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

const MetricCard = ({ label, value, change, trend, unit, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        {Icon && (
          <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#1a73e8]" />
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium text-[#5f6368] mb-1">{label}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-light text-[#202124]">{value}</span>
            {unit && <span className="text-sm text-[#5f6368]">{unit}</span>}
          </div>
        </div>
      </div>
      {trend && (
        <div className={`p-1 rounded-full ${
          trend === 'up' ? 'bg-[#e8f5e8]' : 
          trend === 'down' ? 'bg-[#fce8e6]' : 'bg-[#f8f9fa]'
        }`}>
          {trend === 'up' && <ArrowUp className="w-4 h-4 text-[#137333]" />}
          {trend === 'down' && <ArrowDown className="w-4 h-4 text-[#ea4335]" />}
          {trend === 'stable' && <Minus className="w-4 h-4 text-[#5f6368]" />}
        </div>
      )}
    </div>
    {change && (
      <div className={`text-sm font-medium ${
        trend === 'up' ? 'text-[#137333]' : 
        trend === 'down' ? 'text-[#ea4335]' : 'text-[#5f6368]'
      }`}>
        {change}
      </div>
    )}
  </div>
);

const TabButton = ({ active, onClick, children, icon: Icon, badge }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 relative ${
      active 
        ? 'bg-[#1a73e8] text-white shadow-md' 
        : 'text-[#5f6368] hover:text-[#1a73e8] hover:bg-[#f8f9fa] border border-[#dadce0] bg-white'
    }`}
  >
    <Icon className="w-4 h-4" />
    <span>{children}</span>
    {badge && (
      <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
        active ? 'bg-white/20 text-white' : 'bg-[#ea4335] text-white'
      }`}>
        {badge}
      </span>
    )}
  </button>
);

const ProviderRow = ({ provider }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-[#137333] bg-[#e8f5e8]';
      case 'Warning': return 'text-[#f57c00] bg-[#fff3e0]';
      case 'Error': return 'text-[#ea4335] bg-[#fce8e6]';
      default: return 'text-[#5f6368] bg-[#f8f9fa]';
    }
  };

  return (
    <tr className="border-b border-[#e8eaed] hover:bg-[#f8f9fa] transition-colors duration-150">
      <td className="py-4 px-6 font-medium text-[#202124]">{provider.name}</td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(provider.status)}`}>
          {provider.status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-24 bg-[#e8eaed] rounded-full h-2">
            <div 
              className="bg-[#1a73e8] h-2 rounded-full transition-all duration-300" 
              style={{ width: `${provider.quality}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-[#202124]">{provider.quality}%</span>
        </div>
      </td>
      <td className="py-4 px-6 text-sm text-[#5f6368]">{provider.lastUpdate}</td>
      <td className="py-4 px-6">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          provider.issues === 0 ? 'bg-[#e8f5e8] text-[#137333]' : 'bg-[#fce8e6] text-[#ea4335]'
        }`}>
          {provider.issues} issues
        </span>
      </td>
    </tr>
  );
};

const SolutionPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'providers', label: 'Data Providers', icon: Database, badge: '5' },
    { id: 'quality', label: 'Quality Control', icon: Shield, badge: '12' },
    { id: 'pipeline', label: 'Processing Pipeline', icon: Activity },
    { id: 'monitoring', label: 'System Monitoring', icon: Monitor }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div>
              <h3 className="text-lg font-medium text-[#202124] mb-6">Key Performance Indicators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardData.overview.metrics.map((metric, index) => (
                  <MetricCard 
                    key={index} 
                    {...metric} 
                    icon={index === 0 ? Shield : index === 1 ? Database : index === 2 ? Activity : Monitor}
                  />
                ))}
              </div>
            </div>
            
            {/* Charts Section */}
            <div>
              <h3 className="text-lg font-medium text-[#202124] mb-6">Analytics Overview</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Quality Trends Chart */}
                <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-base font-medium text-[#202124]">Quality Trends</h4>
                    <div className="flex items-center space-x-2 text-sm text-[#5f6368]">
                      <div className="w-3 h-3 bg-[#1a73e8] rounded-full"></div>
                      <span>Monthly Score</span>
                    </div>
                  </div>
                  <div className="h-48 flex items-end justify-between space-x-3">
                    {dashboardData.overview.charts.qualityTrends.map((data, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                        <div 
                          className="w-full bg-gradient-to-t from-[#1a73e8] to-[#4285f4] rounded-t-md transition-all duration-500 hover:shadow-lg"
                          style={{ height: `${(data.score / 100) * 160}px` }}
                        ></div>
                        <span className="text-xs text-[#5f6368] font-medium">{data.month}</span>
                        <span className="text-xs text-[#202124] font-bold">{data.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Processing Distribution */}
                <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                  <h4 className="text-base font-medium text-[#202124] mb-6">Processing Distribution</h4>
                  <div className="space-y-4">
                    {dashboardData.overview.charts.processingDistribution.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-sm font-medium text-[#202124]">{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-20 bg-[#e8eaed] rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-300"
                              style={{ 
                                width: `${item.value}%`,
                                backgroundColor: item.color 
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-[#202124] w-8">{item.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'providers':
        return (
          <div className="bg-white rounded-lg border border-[#e8eaed] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#e8eaed] bg-[#f8f9fa]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-[#202124]">Data Provider Management</h3>
                  <p className="text-sm text-[#5f6368] mt-1">Monitor and manage third-party data integrations</p>
                </div>
                <Button className="bg-[#1a73e8] hover:bg-[#1557b1] text-white">
                  Add Provider
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8f9fa]">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-medium text-[#5f6368] uppercase tracking-wider">Provider</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-[#5f6368] uppercase tracking-wider">Status</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-[#5f6368] uppercase tracking-wider">Quality Score</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-[#5f6368] uppercase tracking-wider">Last Update</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-[#5f6368] uppercase tracking-wider">Issues</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#e8eaed]">
                  {dashboardData.providers.map((provider, index) => (
                    <ProviderRow key={index} provider={provider} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'quality':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f5e8] flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#137333]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#5f6368] mb-1">Validation Pass Rate</h3>
                    <p className="text-3xl font-light text-[#137333]">{dashboardData.qualityControl.validationRate}%</p>
                  </div>
                </div>
                <div className="text-xs text-[#137333]">↑ 2.3% from last month</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#fff3e0] flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#f57c00]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#5f6368] mb-1">Pending Reviews</h3>
                    <p className="text-3xl font-light text-[#f57c00]">{dashboardData.qualityControl.pendingReviews}</p>
                  </div>
                </div>
                <div className="text-xs text-[#f57c00]">↓ 15 from yesterday</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#fce8e6] flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-[#ea4335]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#5f6368] mb-1">Critical Issues</h3>
                    <p className="text-3xl font-light text-[#ea4335]">{dashboardData.qualityControl.criticalIssues}</p>
                  </div>
                </div>
                <div className="text-xs text-[#ea4335]">↑ 3 from last week</div>
              </div>
            </div>
          </div>
        );
      
      case 'pipeline':
        return (
          <div className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
            <h3 className="text-lg font-medium text-[#202124] mb-6">Processing Pipeline Status</h3>
            <div className="space-y-4">
              {dashboardData.pipeline.stages.map((stage, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-lg border border-[#e8eaed]">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      stage.status === 'Active' ? 'bg-[#137333]' : 
                      stage.status === 'Warning' ? 'bg-[#f57c00]' : 'bg-[#ea4335]'
                    }`}></div>
                    <div>
                      <h4 className="font-medium text-[#202124]">{stage.name}</h4>
                      <p className="text-sm text-[#5f6368]">Processing Rate: {stage.rate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stage.status === 'Active' ? 'text-[#137333] bg-[#e8f5e8]' :
                      stage.status === 'Warning' ? 'text-[#f57c00] bg-[#fff3e0]' : 'text-[#ea4335] bg-[#fce8e6]'
                    }`}>
                      {stage.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'monitoring':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(dashboardData.monitoring.systemHealth).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-lg border border-[#e8eaed] shadow-sm">
                <h3 className="text-base font-medium text-[#202124] mb-4 capitalize">{key} Usage</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#5f6368]">Current Usage</span>
                    <span className="font-bold text-[#202124]">{value}%</span>
                  </div>
                  <div className="w-full bg-[#e8eaed] rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        value > 80 ? 'bg-[#ea4335]' : value > 60 ? 'bg-[#f57c00]' : 'bg-[#137333]'
                      }`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
                <div className={`text-xs font-medium ${
                  value > 80 ? 'text-[#ea4335]' : value > 60 ? 'text-[#f57c00]' : 'text-[#137333]'
                }`}>
                  {value > 80 ? 'High Usage' : value > 60 ? 'Moderate Usage' : 'Optimal'}
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-[#202124] leading-tight">
              Data Integration{" "}
              <span className="text-[#1a73e8] font-medium">Solutions</span>
            </h1>
            <p className="text-xl text-[#5f6368] leading-relaxed font-light">
              Comprehensive analytics dashboard showcasing streamlined third-party integrations 
              and quality evaluations for Google's geo-location platform ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Dashboard Header */}
          <div className="bg-white rounded-t-lg border border-[#e8eaed] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-[#202124] mb-2">
                  Google Geo Data Integration Platform
                </h2>
                <p className="text-[#5f6368]">Third-Party Data Management & Quality Control Dashboard</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#137333] rounded-full"></div>
                <span className="text-sm text-[#5f6368]">System Operational</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-x border-[#e8eaed] p-4 border-b border-[#e8eaed]">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  icon={tab.icon}
                  badge={tab.badge}
                >
                  {tab.label}
                </TabButton>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-[#f8f9fa] rounded-b-lg border-x border-b border-[#e8eaed] p-8 shadow-sm">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;