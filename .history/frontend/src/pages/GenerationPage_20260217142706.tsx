import Card from '../components/Card';
import StatsWidget from '../components/StatsWidget';
import { Zap, TrendingUp, Activity, Battery, Droplets, Wind, Sun, Flame, BarChart3, AlertCircle, ArrowUpRight } from 'lucide-react';

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

  const dailySummary = {
    date: 'Monday, February 16, 2026',
    totalNetEnergy: '50.71 GWh',
    renewable: { value: '23.41 GWh', share: '46.17%' },
    fossil: { value: '27.30 GWh', share: '53.83%' },
    peakDemand: '2,785.8 MW',
    peakRenewable: { value: '1,118.6 MW', share: '40.2%' },
    peakFossil: { value: '1,667.2 MW', share: '59.8%' },
  };

  const totalNetEnergyNumber = 50.71;
  const generationDetails = [
    { label: 'CEB Hydro', value: 10.82, color: 'bg-blue-500', hex: '#2563eb' },
    { label: 'CEB Thermal Coal', value: 16.83, color: 'bg-amber-700', hex: '#b45309' },
    { label: 'CEB Thermal Oil', value: 6.01, color: 'bg-orange-500', hex: '#f97316' },
    { label: 'CEB Wind', value: 0.86, color: 'bg-cyan-500', hex: '#06b6d4' },
    { label: 'SPP Solar', value: 9.14, color: 'bg-yellow-400', hex: '#facc15' },
    { label: 'SPP Biomass', value: 0.27, color: 'bg-green-700', hex: '#15803d' },
    { label: 'SPP Minihydro', value: 1.6, color: 'bg-green-500', hex: '#22c55e' },
    { label: 'SPP Wind', value: 0.73, color: 'bg-sky-400', hex: '#38bdf8' },
    { label: 'IPP Thermal Oil', value: 4.45, color: 'bg-red-500', hex: '#ef4444' },
  ];

  const energyLedger = [
    { label: 'Total Net Energy', value: '50.71 GWh' },
    { label: 'Auxiliary Consumption', value: '2.06 GWh' },
    { label: 'Total Gross Energy', value: '52.77 GWh' },
  ];

  const numberedNotes = [
    'Telemetered values of 10MW Solar Parks, estimated values of Bulk 01-10 MW Solar plants and Rooftop Solar plants were included.',
    'Telemetered values of 195 Mini Hydro Plants and estimated values of remaining Mini Hydro Plants were included.',
  ];

  const noteFooters = [
    'IPP: independent power producers; SPP: small power producers.',
    'Information not available in daily records will be included in annual publications.',
  ];

  const moreInfoUrl = 'https://cebcare.ceb.lk/gensum/details';

  const pieGradientStops: string[] = [];
  let cumulative = 0;
  generationDetails.forEach((item) => {
    const start = (cumulative / totalNetEnergyNumber) * 360;
    cumulative += item.value;
    const end = (cumulative / totalNetEnergyNumber) * 360;
    pieGradientStops.push(`${item.hex} ${start}deg ${end}deg`);
  });
  const pieGradientStyle = {
    background: `conic-gradient(${pieGradientStops.join(', ')})`,
  };

  const highlightSource = generationDetails.find((item) => item.label === 'CEB Thermal Coal');
  const formatShare = (value: number) => ((value / totalNetEnergyNumber) * 100).toFixed(1);

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

        {/* Daily Generation Summary */}
        <section className="mb-10">
          <div className="flex flex-col space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-primary font-semibold">Daily Net Electricity Generation</p>
                  <h2 className="text-3xl font-bold text-secondary mt-2">{dailySummary.totalNetEnergy}</h2>
                  <p className="text-sm text-gray-500">Date: {dailySummary.date}</p>
                </div>
                <a
                  href={moreInfoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-soft hover:bg-primary/90 transition"
                >
                  More Info
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border-2 border-[#8c3f20] bg-[#fdf2c4] p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#8c3f20] uppercase tracking-wide">Total Net Energy</span>
                    <span className="text-3xl font-black text-[#611313]">{dailySummary.totalNetEnergy}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#1e824c] text-white p-3">
                      <p className="text-xs uppercase">Renewable</p>
                      <p className="text-xl font-bold">{dailySummary.renewable.value}</p>
                      <p className="text-sm font-semibold">{dailySummary.renewable.share}</p>
                    </div>
                    <div className="rounded-lg bg-[#2b2b2b] text-white p-3">
                      <p className="text-xs uppercase">Fossil Fuel</p>
                      <p className="text-xl font-bold">{dailySummary.fossil.value}</p>
                      <p className="text-sm font-semibold">{dailySummary.fossil.share}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-[#8c3f20] bg-[#fdf2c4] p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-[#8c3f20] uppercase tracking-wide">Peak Demand</span>
                    <span className="text-3xl font-black text-[#611313]">{dailySummary.peakDemand}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#1e824c] text-white p-3">
                      <p className="text-xs uppercase">Renewable</p>
                      <p className="text-xl font-bold">{dailySummary.peakRenewable.value}</p>
                      <p className="text-sm font-semibold">{dailySummary.peakRenewable.share}</p>
                    </div>
                    <div className="rounded-lg bg-[#2b2b2b] text-white p-3">
                      <p className="text-xs uppercase">Fossil Fuel</p>
                      <p className="text-xl font-bold">{dailySummary.peakFossil.value}</p>
                      <p className="text-sm font-semibold">{dailySummary.peakFossil.share}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 rounded-full shadow-inner border-4 border-white" style={pieGradientStyle}>
                      {highlightSource && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 text-center px-4 py-3 rounded-xl shadow-lg border border-[#8c3f20]/30">
                            <p className="text-xs uppercase text-[#8c3f20] tracking-wide">{highlightSource.label}</p>
                            <p className="text-2xl font-black text-secondary">{formatShare(highlightSource.value)}%</p>
                            <p className="text-sm font-semibold text-gray-600">({highlightSource.value.toFixed(2)} GWh)</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {generationDetails.map((item) => (
                      <div key={item.label} className="flex items-center justify-between border border-border rounded-xl px-4 py-2 bg-white shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                          <span className="font-semibold text-secondary text-sm">{item.label}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-secondary">{item.value.toFixed(2)} GWh</p>
                          <p className="text-xs text-gray-500">{formatShare(item.value)}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Energy Ledger</h3>
                    <div className="overflow-hidden rounded-2xl border border-border bg-white">
                      <table className="w-full text-sm text-secondary">
                        <tbody>
                          {energyLedger.map((row, idx) => (
                            <tr key={row.label} className="border-b border-border last:border-0">
                              <td className="px-4 py-3 font-semibold">{row.label}</td>
                              <td className="px-4 py-3 text-right">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-white p-5 shadow-sm text-sm text-gray-700">
                    <p className="font-semibold text-secondary uppercase text-xs tracking-wide mb-3">Note:</p>
                    <ol className="list-decimal pl-5 space-y-2 mb-4">
                      {numberedNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ol>
                    <div className="space-y-1 text-xs italic text-gray-500">
                      {noteFooters.map((note) => (
                        <p key={note}>* {note}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

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
