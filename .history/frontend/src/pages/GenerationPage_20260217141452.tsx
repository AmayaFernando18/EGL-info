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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <Zap className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Daily Net Electricity Generation</h1>
          </div>
          <p className="text-gray-100 text-lg">Date: {generationData.date}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Total Net Energy & Breakdown */}
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b-2 border-yellow-300">
                <h3 className="text-lg font-bold text-secondary">Total Net Energy</h3>
                <span className="text-3xl font-bold text-primary">{generationData.totalNetEnergy} GWh</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="h-5 w-5 text-green-600" />
                    <p className="text-sm font-semibold text-green-900">Renewable</p>
                  </div>
                  <p className="text-2xl font-bold text-green-700">{generationData.renewable.gwh} GWh</p>
                  <p className="text-sm font-bold text-green-600 mt-1">({generationData.renewable.percentage}%)</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Factory className="h-5 w-5 text-gray-700" />
                    <p className="text-sm font-semibold text-gray-900">Fossil Fuel</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{generationData.fossilFuel.gwh} GWh</p>
                  <p className="text-sm font-bold text-gray-600 mt-1">({generationData.fossilFuel.percentage}%)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Peak Demand */}
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b-2 border-yellow-300">
                <h3 className="text-lg font-bold text-secondary">Peak Demand</h3>
                <span className="text-3xl font-bold text-primary">{generationData.peakDemand} MW</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="h-5 w-5 text-green-600" />
                    <p className="text-sm font-semibold text-green-900">Renewable</p>
                  </div>
                  <p className="text-2xl font-bold text-green-700">{generationData.peakRenewable.mw} MW</p>
                  <p className="text-sm font-bold text-green-600 mt-1">({generationData.peakRenewable.percentage}%)</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Factory className="h-5 w-5 text-gray-700" />
                    <p className="text-sm font-semibold text-gray-900">Fossil Fuel</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{generationData.peakFossilFuel.mw} MW</p>
                  <p className="text-sm font-bold text-gray-600 mt-1">({generationData.peakFossilFuel.percentage}%)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pie Chart Visualization */}
          <Card>
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
              <Zap className="h-5 w-5 text-primary mr-2" />
              Generation Breakdown
            </h3>
            
            {/* Simple CSS Pie Chart Representation */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{
                background: `conic-gradient(
                  from 0deg,
                  rgb(59 130 246) 0% ${energySources[0].percentage}%,
                  rgb(146 64 14) ${energySources[0].percentage}% ${energySources[0].percentage + energySources[1].percentage}%,
                  rgb(234 88 12) ${energySources[0].percentage + energySources[1].percentage}% ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage}%,
                  rgb(6 182 212) ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage}% ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage + energySources[3].percentage}%,
                  rgb(250 204 21) ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage + energySources[3].percentage}% ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage + energySources[3].percentage + energySources[4].percentage}%,
                  rgb(31 41 55) ${energySources[0].percentage + energySources[1].percentage + energySources[2].percentage + energySources[3].percentage + energySources[4].percentage}% ${energySources.slice(0, 6).reduce((sum, s) => sum + s.percentage, 0)}%,
                  rgb(20 184 166) ${energySources.slice(0, 6).reduce((sum, s) => sum + s.percentage, 0)}% ${energySources.slice(0, 7).reduce((sum, s) => sum + s.percentage, 0)}%,
                  rgb(107 114 128) ${energySources.slice(0, 7).reduce((sum, s) => sum + s.percentage, 0)}% ${energySources.slice(0, 8).reduce((sum, s) => sum + s.percentage, 0)}%,
                  rgb(249 115 22) ${energySources.slice(0, 8).reduce((sum, s) => sum + s.percentage, 0)}% 100%
                )`
              }}></div>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {energySources.map((source, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded ${source.color}`}></div>
                    <span className="text-sm font-medium text-secondary">{source.name}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{source.value} GWh</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Data Table */}
          <Card>
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
              <Battery className="h-5 w-5 text-primary mr-2" />
              Energy Summary
            </h3>
            
            <div className="space-y-4 mb-6">
              {dataTable.map((row, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                  index === 0 ? 'bg-primary/10' : 'bg-gray-50'
                }`}>
                  <span className="text-sm font-semibold text-secondary">{row.label}</span>
                  <span className={`text-lg font-bold ${index === 0 ? 'text-primary' : 'text-secondary'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Notes Section */}
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold text-secondary mb-3">Note:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>Telemetered values of 10MW Solar Parks, estimated values of Bulk 01-10 MW Solar plants and Rooftop Solar plants were included.</li>
                <li>Telemetered values of 195 Nos. of Mini Hydro Plants and estimated values of remaining Mini Hydro Plants were included.</li>
              </ol>
              <p className="text-xs text-gray-600 mt-3">
                * IPP: independent power producers; SPP: small power producers
              </p>
              <p className="text-xs text-gray-600">
                * Information not available in daily records will be included in annual publications.
              </p>
            </div>

            {/* More Info Button */}
            <a
              href="https://cebcare.ceb.lk/gensum/details"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              MORE INFO
              <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
