import React from 'react';
import { LineChart, PieChart, BarChart, Map } from 'lucide-react';

export function AnalyticsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="flex items-center gap-2 text-sm">
          <LineChart className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-gray-500 dark:text-gray-400">Real-time Data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            title: 'Transaction Analysis',
            description: 'Monitor financial patterns and anomalies',
            icon: LineChart,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            darkColor: 'dark:text-blue-300',
            darkBg: 'dark:bg-blue-900',
          },
          {
            title: 'Supply Chain Distribution',
            description: 'Track product movement and inventory',
            icon: PieChart,
            color: 'text-green-600',
            bg: 'bg-green-50',
            darkColor: 'dark:text-green-300',
            darkBg: 'dark:bg-green-900',
          },
          {
            title: 'Risk Assessment',
            description: 'Evaluate and predict potential risks',
            icon: BarChart,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            darkColor: 'dark:text-orange-300',
            darkBg: 'dark:bg-orange-900',
          },
          {
            title: 'Geographic Analysis',
            description: 'View regional distribution and hotspots',
            icon: Map,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            darkColor: 'dark:text-purple-300',
            darkBg: 'dark:bg-purple-900',
          },
        ].map((analysis, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-2 rounded-lg ${analysis.bg} ${analysis.darkBg}`}>
                <analysis.icon className={`h-6 w-6 ${analysis.color} ${analysis.darkColor}`} />
              </div>
              <div>
                <h2 className="font-semibold dark:text-gray-200">{analysis.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{analysis.description}</p>
              </div>
            </div>
            <div className="h-48 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Chart Visualization</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Key Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: 'Average Transaction Time',
              value: '2.3 days',
              change: '+5.2%',
              trend: 'up',
            },
            {
              label: 'Verification Success Rate',
              value: '94.8%',
              change: '+2.1%',
              trend: 'up',
            },
            {
              label: 'Risk Detection Rate',
              value: '89.2%',
              change: '-1.5%',
              trend: 'down',
            },
          ].map((metric, index) => (
            <div key={index} className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</span>
                <span className={`text-sm ${
                  metric.trend === 'up' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-2xl font-semibold dark:text-gray-200">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}