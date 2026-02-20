import Card from '../components/Card';
import StatsWidget from '../components/StatsWidget';
import { Zap, TrendingUp, Activity, Battery, Droplets, Wind, Sun, Flame, BarChart3, AlertCircle } from 'lucide-react';

export default function GenerationPage() {
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
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Capacity</p>
              <p className="text-2xl font-bold text-secondary">2,845 MW</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Output</p>
              <p className="text-2xl font-bold text-secondary">2,320 MW</p>
            </div>
            <div className="bg-accent/10 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Renewable Share</p>
              <p className="text-2xl font-bold text-secondary">47.3%</p>
            </div>
            <div className="bg-green-500/10 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">System Load</p>
              <p className="text-2xl font-bold text-secondary">81.5%</p>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Battery className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Power Plants List */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-secondary mb-4">Active Power Plants</h2>
          <div className="space-y-4">
            {powerPlants.map((plant, index) => (
              <Card key={index} hover>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-secondary">{plant.name}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                        {plant.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Type</p>
                        <p className="font-medium text-secondary">{plant.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Capacity</p>
                        <p className="font-medium text-secondary">{plant.capacity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Output</p>
                        <p className="font-medium text-primary">{plant.output}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm text-gray-500">Efficiency</p>
                    <p className="text-2xl font-bold text-accent">{plant.efficiency}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Generation Mix */}
        <div>
          <h2 className="text-xl font-bold text-secondary mb-4">Generation Mix</h2>
          <Card>
            <div className="space-y-4">
              {generationMix.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-secondary">{item.source}</span>
                      </div>
                      <span className="text-sm font-bold text-secondary">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Renewable</span>
                <span className="text-lg font-bold text-green-600">62%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Fossil</span>
                <span className="text-lg font-bold text-gray-600">38%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
