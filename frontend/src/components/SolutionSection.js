import React, { useState } from "react";
import { Button } from "./ui/button";
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
  CheckCircle
} from "lucide-react";

const TabButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      active 
        ? 'bg-[#1a73e8] text-white shadow-md' 
        : 'text-gray-700 hover:text-[#1a73e8] hover:bg-blue-50'
    }`}
  >
    <Icon className="w-4 h-4" />
    <span>{children}</span>
  </button>
);

const MetricCard = ({ label, value, change, trend, unit }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-600">{label}</span>
      {trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
    </div>
    <div className="flex items-baseline space-x-2">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      {unit && <span className="text-sm text-gray-500">{unit}</span>}
    </div>
    {change && (
      <span className={`text-xs font-medium ${
        trend === 'up' ? 'text-green-600' : 'text-gray-500'
      }`}>
        {change}
      </span>
    )}
  </div>
);

const ProviderRow = ({ provider }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Warning': return 'text-yellow-600 bg-yellow-50';
      case 'Error': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-3 px-4 font-medium text-gray-900">{provider.name}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(provider.status)}`}>
          {provider.status}
        </span>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-20 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#1a73e8] h-2 rounded-full" 
              style={{ width: `${provider.quality}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium">{provider.quality}%</span>
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-gray-600">{provider.lastUpdate}</td>
      <td className="py-3 px-4 text-sm text-gray-600">{provider.issues}</td>
    </tr>
  );
};

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'providers', label: 'Data Providers', icon: Database },
    { id: 'quality', label: 'Quality Control', icon: Shield },
    { id: 'pipeline', label: 'Processing Pipeline', icon: Activity },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardData.overview.metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Trends</h3>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {dashboardData.overview.charts.qualityTrends.map((data, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-8 bg-[#1a73e8] rounded-t"
                        style={{ height: `${(data.score / 100) * 160}px` }}
                      ></div>
                      <span className="text-xs text-gray-600">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Distribution</h3>
                <div className="space-y-3">
                  {dashboardData.overview.charts.processingDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'providers':
        return (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Data Provider Management</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Provider</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Quality Score</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Issues</th>
                  </tr>
                </thead>
                <tbody>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Validation Pass Rate</h3>
                  <p className="text-2xl font-bold text-green-600">{dashboardData.qualityControl.validationRate}%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pending Reviews</h3>
                  <p className="text-2xl font-bold text-yellow-600">{dashboardData.qualityControl.pendingReviews}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Critical Issues</h3>
                  <p className="text-2xl font-bold text-red-600">{dashboardData.qualityControl.criticalIssues}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'pipeline':
        return (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Processing Pipeline Status</h3>
            <div className="space-y-4">
              {dashboardData.pipeline.stages.map((stage, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      stage.status === 'Active' ? 'bg-green-500' : 
                      stage.status === 'Warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="font-medium text-gray-900">{stage.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-700">{stage.rate}</span>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      stage.status === 'Active' ? 'text-green-600 bg-green-100' :
                      stage.status === 'Warning' ? 'text-yellow-600 bg-yellow-100' : 'text-red-600 bg-red-100'
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
              <div key={key} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">{key} Usage</h3>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current</span>
                    <span className="font-medium">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        value > 80 ? 'bg-red-500' : value > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
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
    <section id="solution-section" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Data Integration Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Streamlined third-party integrations and quality evaluations through an interactive data management platform
          </p>
          <Button 
            onClick={() => document.querySelector('.dashboard-container').scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1a73e8] hover:bg-[#1557b0] text-white px-8 py-3"
          >
            Explore Dashboard
          </Button>
        </div>

        {/* Interactive Dashboard */}
        <div className="dashboard-container bg-gray-50 rounded-lg border border-gray-200 shadow-lg overflow-hidden">
          <div className="bg-white border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Google Geo Data Integration Platform
            </h3>
            <p className="text-gray-600">Third-Party Data Management Prototype</p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex space-x-2 overflow-x-auto">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  icon={tab.icon}
                >
                  {tab.label}
                </TabButton>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;