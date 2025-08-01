{/* Section 5: Metrics Dashboard */}
<div className="flex-shrink-0 w-full lg:w-screen snap-start">
  <div className="bg-white p-8 lg:p-12">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-light text-[#202124] mb-4">
          Performance{" "}
          <span className="text-[#1a73e8] font-medium">Metrics</span>
        </h2>
        <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
          Key indicators showing the impact of our solutions
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
        
        <div className="bg-gradient-to-br from-[#e8f0fe] to-[#f1f5fe] rounded-xl p-6 text-center">
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