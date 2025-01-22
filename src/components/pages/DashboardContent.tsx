import React from 'react';
import { IndianRupee, Fingerprint, Package, Shield, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  {
    title: 'Suspicious Transactions',
    value: '₹2.4M',
    change: '+12.5%',
    trend: 'up',
    icon: IndianRupee,
  },
  {
    title: 'Counterfeit Attempts',
    value: '156',
    change: '-8.3%',
    trend: 'down',
    icon: Fingerprint,
  },
  {
    title: 'Active Smart Contracts',
    value: '1,893',
    change: '+23.1%',
    trend: 'up',
    icon: Package,
  },
  {
    title: 'Blockchain Verifications',
    value: '15.2K',
    change: '+18.7%',
    trend: 'up',
    icon: Shield,
  },
];

export function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
              <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
            </div>
            <span className={`flex items-center gap-1 text-sm ${
              stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.change}
              {stat.trend === 'up' ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownRight className="h-4 w-4" />
              )}
            </span>
          </div>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-1">{stat.title}</h3>
          <p className="text-2xl font-semibold dark:text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}