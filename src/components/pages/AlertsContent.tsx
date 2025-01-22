import React from 'react';
import { AlertTriangle, Bell, Activity, Clock } from 'lucide-react';

export function AlertsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Alert Center</h1>
        <div className="flex items-center gap-2 text-sm">
          <Activity className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-gray-500 dark:text-gray-400">Real-time Monitoring</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Critical Alerts',
            count: 3,
            icon: AlertTriangle,
            color: 'text-red-600',
            bg: 'bg-red-50',
            darkBg: 'dark:bg-red-900',
            darkColor: 'dark:text-red-300',
          },
          {
            title: 'Warnings',
            count: 8,
            icon: Bell,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50',
            darkBg: 'dark:bg-yellow-900',
            darkColor: 'dark:text-yellow-300',
          },
          {
            title: 'Information',
            count: 12,
            icon: Activity,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            darkBg: 'dark:bg-blue-900',
            darkColor: 'dark:text-blue-300',
          },
        ].map((alert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${alert.bg} ${alert.darkBg}`}>
                <alert.icon className={`h-6 w-6 ${alert.color} ${alert.darkColor}`} />
              </div>
              <span className="text-2xl font-bold dark:text-white">{alert.count}</span>
            </div>
            <h3 className="text-gray-500 dark:text-gray-400">{alert.title}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Alert Timeline</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Suspicious Price Pattern',
              description: 'Unusual price fluctuation detected in Bihar market',
              time: '10 minutes ago',
              type: 'critical',
              icon: AlertTriangle,
            },
            {
              title: 'Quality Check Failed',
              description: 'Batch RICE-45894 failed moisture content verification',
              time: '25 minutes ago',
              type: 'warning',
              icon: Bell,
            },
            {
              title: 'New Supplier Verification',
              description: 'Supplier S-198 requires additional documentation',
              time: '1 hour ago',
              type: 'info',
              icon: Activity,
            },
          ].map((alert, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className={`p-2 rounded-lg ${
                alert.type === 'critical'
                  ? 'bg-red-50 dark:bg-red-900'
                  : alert.type === 'warning'
                  ? 'bg-yellow-50 dark:bg-yellow-900'
                  : 'bg-blue-50 dark:bg-blue-900'
              }`}>
                <alert.icon className={`h-5 w-5 ${
                  alert.type === 'critical'
                    ? 'text-red-600 dark:text-red-300'
                    : alert.type === 'warning'
                    ? 'text-yellow-600 dark:text-yellow-300'
                    : 'text-blue-600 dark:text-blue-300'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1 dark:text-gray-200">{alert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{alert.description}</p>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="text-xs text-gray-400 dark:text-gray-500">{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}