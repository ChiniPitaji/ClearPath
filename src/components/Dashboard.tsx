import React, { useState } from 'react';
import { Activity, Wind, AlertTriangle, TrendingUp, MapPin, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const StatCard = ({ title, value, icon: Icon, color, bgColor, textColor }: any) => (
    <div
      className={`glass-effect rounded-xl shadow-lg p-6 card-hover cursor-pointer
        ${hoveredCard === title ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setHoveredCard(title)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className={`p-2 rounded-full ${bgColor}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
      <div className={`text-3xl font-bold ${textColor} animate-float`}>{value}</div>
      <p className="text-sm text-gray-600 mt-2">Current city-wide average</p>
      {hoveredCard === title && (
        <div className={`flex items-center mt-4 text-sm font-medium ${color} group`}>
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-city-pattern py-6">
      <div className="container mx-auto px-4 space-y-6">
        <header className="glass-effect mb-8 p-6 rounded-xl animate-float">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-purple-100 rounded-lg animate-pulse-ring">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ClearPath Dashboard</h1>
              <p className="text-gray-600 mt-2">Real-time insights for smarter urban planning</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Traffic Density"
            value="75%"
            icon={Activity}
            color="text-cyan-600"
            bgColor="bg-cyan-100"
            textColor="text-cyan-700"
          />
          <StatCard
            title="Air Quality"
            value="42 AQI"
            icon={Wind}
            color="text-emerald-600"
            bgColor="bg-emerald-100"
            textColor="text-emerald-700"
          />
          <StatCard
            title="Active Alerts"
            icon={AlertTriangle}
            value="3"
            color="text-rose-600"
            bgColor="bg-rose-100"
            textColor="text-rose-700"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="glass-effect rounded-xl shadow-lg p-6 card-hover">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-fuchsia-100 rounded-lg">
                <MapPin className="h-5 w-5 text-fuchsia-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Traffic Map</h3>
            </div>
            <div className="aspect-video bg-gradient-to-br from-white/50 to-white/30 rounded-lg flex items-center justify-center border border-white/50 group cursor-pointer hover:border-fuchsia-200 transition-colors">
              <div className="text-center">
                <p className="text-gray-600 group-hover:text-fuchsia-700 transition-colors">
                  Interactive map visualization coming soon
                </p>
                <div className="mt-2 text-sm text-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl shadow-lg p-6 card-hover">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Wind className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Pollution Hotspots</h3>
            </div>
            <div className="aspect-video bg-gradient-to-br from-white/50 to-white/30 rounded-lg flex items-center justify-center border border-white/50 group cursor-pointer hover:border-amber-200 transition-colors">
              <div className="text-center">
                <p className="text-gray-600 group-hover:text-amber-700 transition-colors">
                  Pollution data visualization coming soon
                </p>
                <div className="mt-2 text-sm text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;