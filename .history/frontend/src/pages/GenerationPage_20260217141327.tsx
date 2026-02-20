import Card from '../components/Card';
import { Zap, ExternalLink, Sun, Wind, Droplets, Flame, Battery, Factory } from 'lucide-react';

export default function GenerationPage() {
  // Daily generation data
  const generationData = {
    date: 'Monday, February 16, 2026',
    totalNetEnergy: 50.71,
    renewable: { gwh: 23.41, percentage: 46.17 },
    fossilFuel: { gwh: 27.30, percentage: 53.83 },
    peakDemand: 2785.8,
    peakRenewable: { mw: 1118.6, percentage: 40.2 },
    peakFossilFuel: { mw: 1667.2, percentage: 59.8 }
  };

  const energySources = [
    { name: 'CEB Hydro', value: 10.82, color: 'bg-blue-500', percentage: 21.3 },
    { name: 'CEB Thermal Coal', value: 16.83, color: 'bg-amber-900', percentage: 33.2 },
    { name: 'CEB Thermal Oil', value: 6.01, color: 'bg-orange-600', percentage: 11.9 },
    { name: 'CEB Wind', value: 0.86, color: 'bg-cyan-500', percentage: 1.7 },
    { name: 'SPP Solar¹', value: 9.14, color: 'bg-yellow-400', percentage: 18.0 },
    { name: 'SPP Biomass', value: 0.27, color: 'bg-gray-800', percentage: 0.5 },
    { name: 'SPP Minihydro²', value: 1.6, color: 'bg-teal-400', percentage: 3.2 },
    { name: 'SPP Wind', value: 0.73, color: 'bg-gray-500', percentage: 1.4 },
    { name: 'IPP Thermal Oil', value: 4.45, color: 'bg-orange-500', percentage: 8.8 }
  ];

  const dataTable = [
    { label: 'Total Net Energy', value: '50.71 GWh' },
    { label: 'Auxiliary Consumption', value: '2.06 GWh' },
    { label: 'Total Gross Energy', value: '52.77 GWh' }
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
