import Card from '../components/Card';
import StatsWidget from '../components/StatsWidget';
import { Zap, TrendingUp, Activity, Battery, Droplets, Wind, Sun, Flame, BarChart3, AlertCircle } from 'lucide-react';

export default function GenerationPage() {
  const reportDate = 'Monday, February 16, 2026';

  const generationSources = [
    { label: 'CEB Hydro', value: 10.82, color: '#3B82F6' },
    { label: 'CEB Thermal Coal', value: 16.83, color: '#92400E' },
    { label: 'CEB Thermal Oil', value: 6.01, color: '#D97706' },
    { label: 'CEB Wind', value: 0.86, color: '#10B981' },
    { label: 'SPP Solar¹', value: 9.14, color: '#EAB308' },
    { label: 'SPP Biomass', value: 0.27, color: '#111827' },
    { label: 'SPP Minihydro²', value: 1.6, color: '#B7D7A8' },
    { label: 'SPP Wind', value: 0.73, color: '#9CA3AF' },
    { label: 'IPP Thermal Oil', value: 4.45, color: '#F59E0B' },
  ];

  const totalNetEnergy = 50.71;

  let cumulative = 0;
  const pieGradient = `conic-gradient(${generationSources
    .map((segment) => {
      const start = cumulative;
      const percentage = (segment.value / totalNetEnergy) * 100;
      cumulative += percentage;
      return `${segment.color} ${start}% ${cumulative}%`;
    })
    .join(', ')})`;

  const powerPlants = [
    { name: 'Victoria Hydro', type: 'Hydro', capacity: '210 MW', status: 'Online', output: '195 MW', efficiency: '92.8%', icon: Droplets, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'Norochcholai Coal', type: 'Coal', capacity: '900 MW', status: 'Online', output: '850 MW', efficiency: '94.4%', icon: Flame, color: 'text-gray-700', bgColor: 'bg-gray-50' },
    { name: 'Kelanitissa Gas', type: 'Gas', capacity: '165 MW', status: 'Online', output: '155 MW', efficiency: '93.9%', icon: Flame, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { name: 'Mannar Wind', type: 'Wind', capacity: '100 MW', status: 'Online', output: '78 MW', efficiency: '78.0%', icon: Wind, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    { name: 'Hambantota Solar', type: 'Solar', capacity: '50 MW', status: 'Online', output: '42 MW', efficiency: '84.0%', icon: Sun, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  ];

  const generationMix = [
    { source: 'Hydro', percentage: 35, color: 'bg-blue-500', icon: Droplets },
    { source: 'Coal', percentage: 30, color: 'bg-gray-700', icon: Flame },
    { source: 'Wind', percentage: 15, color: 'bg-cyan-500', icon: Wind },
    { source: 'Solar', percentage: 12, color: 'bg-yellow-500', icon: Sun },
    { source: 'Gas', percentage: 8, color: 'bg-orange-500', icon: Flame },
  ];

  return (
    <div className="min-h-screen bg-base">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Power Generation Dashboard</h1>
          </div>
          <p className="text-gray-100 text-lg">Real-time monitoring of Sri Lanka's power generation facilities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsWidget
            title="Total Capacity"
            value="2,845 MW"
            icon={Zap}
            iconColor="text-primary"
            iconBgColor="bg-primary/10"
            trend={{ direction: 'up', value: '5.2%', label: 'vs last month' }}
          />

          <StatsWidget
            title="Current Output"
            value="2,320 MW"
            icon={Activity}
            iconColor="text-accent"
            iconBgColor="bg-accent/10"
            trend={{ direction: 'up', value: '3.1%', label: 'vs last hour' }}
          />

          <StatsWidget
            title="Renewable Share"
            value="47.3%"
            icon={TrendingUp}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
            trend={{ direction: 'up', value: '8.5%', label: 'yearly increase' }}
          />

          <StatsWidget
            title="System Load"
            value="81.5%"
            icon={Battery}
            iconColor="text-blue-600"
            iconBgColor="bg-blue-100"
            trend={{ direction: 'down', value: '2.3%', label: 'optimal range' }}
          />
        </div>

        {/* System Alert */}
        <div className="mb-8">
          <Card className="bg-green-50 border-green-200">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-900 mb-1">System Status: Optimal</h3>
                <p className="text-sm text-green-700">
                  All generation facilities are operating within normal parameters. Grid stability at 99.8%.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Daily Net Electricity Generation */}
        <div className="mb-10">
          <Card className="border-primary/20">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-secondary mb-2">DAILY NET ELECTRICITY GENERATION</h2>
              <p className="text-gray-600 font-medium">Date: {reportDate}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-accent/30 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 border-b border-accent/20">
                  <h3 className="font-bold text-secondary">Total Net Energy</h3>
                </div>
                <div className="bg-accent/10 p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-secondary">• Renewable</span>
                    <span className="bg-green-500 text-white px-2.5 py-1 rounded font-bold text-sm">23.41 GWh (46.17%)</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-secondary">• Fossil Fuel</span>
                    <span className="bg-gray-900 text-white px-2.5 py-1 rounded font-bold text-sm">27.30 GWh (53.83%)</span>
                  </div>
                </div>
              </div>

              <div className="border border-accent/30 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-accent/20 to-accent/10 px-4 py-2 border-b border-accent/20">
                  <h3 className="font-bold text-secondary">Peak Demand</h3>
                </div>
                <div className="bg-accent/10 p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-secondary">• Renewable</span>
                    <span className="bg-green-500 text-white px-2.5 py-1 rounded font-bold text-sm">1118.6 MW (40.2%)</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-secondary">• Fossil Fuel</span>
                    <span className="bg-gray-900 text-white px-2.5 py-1 rounded font-bold text-sm">1667.2 MW (59.8%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="flex justify-center items-center">
                <div
                  className="w-64 h-64 rounded-full shadow-md border border-border"
                  style={{ background: pieGradient }}
                  aria-label="Daily generation mix pie chart"
                />
              </div>

              <div className="space-y-2">
                {generationSources.map((source) => (
                  <div key={source.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: source.color }} />
                      <span className="font-medium text-secondary">{source.label}</span>
                    </div>
                    <span className="font-bold text-secondary">{source.value.toFixed(2)} GWh</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-surface border-b border-border">
                <div className="px-4 py-3 font-semibold text-secondary">Total Net Energy</div>
                <div className="px-4 py-3 font-bold text-secondary text-right">50.71 GWh</div>
              </div>
              <div className="grid grid-cols-2 bg-surface border-b border-border">
                <div className="px-4 py-3 font-semibold text-secondary">Auxiliary Consumption</div>
                <div className="px-4 py-3 font-bold text-secondary text-right">2.06 GWh</div>
              </div>
              <div className="grid grid-cols-2 bg-surface">
                <div className="px-4 py-3 font-semibold text-secondary">Total Gross Energy</div>
                <div className="px-4 py-3 font-bold text-secondary text-right">52.77 GWh</div>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-2 mb-6 leading-relaxed">
              <p className="font-semibold text-secondary">Note:</p>
              <p>1. Telemetered values of 10MW Solar Parks, estimated values of Bulk 01-10 MW Solar plants and Rooftop Solar plants were included.</p>
              <p>2. Telemetered values of 195 Nos. of Mini Hydro Plants and estimated values of remaining Mini Hydro Plants were included.</p>
              <p>* IPP: independent power producers; SPP: small power producers.</p>
              <p>* Information not available in daily records will be included in annual publications.</p>
            </div>

            <a
              href="https://cebcare.ceb.lk/gensum/details"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-md hover:bg-accent/90 transition-colors"
            >
              MORE INFO
            </a>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Power Plants List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-secondary flex items-center">
                <BarChart3 className="h-6 w-6 text-primary mr-2" />
                Active Power Plants
              </h2>
              <span className="text-sm text-gray-500 bg-surface px-3 py-1 rounded-full border border-border">
                {powerPlants.length} facilities
              </span>
            </div>
            <div className="space-y-4">
              {powerPlants.map((plant, index) => {
                const Icon = plant.icon;
                return (
                  <Card key={index} hover className="border-l-4 border-l-primary">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`${plant.bgColor} p-4 rounded-xl`}>
                          <Icon className={`h-8 w-8 ${plant.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="font-bold text-lg text-secondary">{plant.name}</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                              {plant.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Type</p>
                              <p className="font-semibold text-secondary">{plant.type}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Capacity</p>
                              <p className="font-semibold text-secondary">{plant.capacity}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Current Output</p>
                              <p className="font-semibold text-primary">{plant.output}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Efficiency</p>
                              <p className="font-semibold text-accent text-xl">{plant.efficiency}</p>
                            </div>
                          </div>
                          {/* Progress bar */}
                          <div className="mt-3 w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full transition-all duration-500"
                              style={{ width: plant.efficiency }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Generation Mix */}
          <div>
            <h2 className="text-xl font-bold text-secondary mb-6 flex items-center">
              <Activity className="h-5 w-5 text-primary mr-2" />
              Generation Mix
            </h2>
            <Card className="mb-6">
              <div className="space-y-5">
                {generationMix.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`${item.color} p-2 rounded-lg`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-bold text-secondary">{item.source}</span>
                        </div>
                        <span className="text-lg font-bold text-secondary">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all duration-700 shadow-sm`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-border space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-semibold text-green-900">Total Renewable</span>
                  <span className="text-2xl font-bold text-green-600">62%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-semibold text-gray-900">Total Fossil</span>
                  <span className="text-2xl font-bold text-gray-600">38%</span>
                </div>
              </div>
            </Card>

            {/* Additional Stats */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="font-bold text-secondary mb-4">Today's Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-sm text-gray-600">Peak Demand</span>
                  <span className="font-bold text-secondary">2,650 MW</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-sm text-gray-600">CO₂ Saved</span>
                  <span className="font-bold text-green-600">1,840 tons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Grid Frequency</span>
                  <span className="font-bold text-accent">50.02 Hz</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
