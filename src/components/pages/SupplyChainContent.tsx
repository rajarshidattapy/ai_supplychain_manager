import React from 'react';
import { Wheat, Users, Factory, Truck, Store, ChevronRight, Clock } from 'lucide-react';

export function SupplyChainContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Supply Chain Tracking</h1>
        <div className="flex items-center gap-2 text-sm">
          <Wheat className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-gray-500 dark:text-gray-400">Case Study: Rice Supply Chain</span>
        </div>
      </div>

      {/* Supply Chain Flow */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Supply Chain Flow</h2>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
          {[
            { icon: Users, label: 'Farmers', count: '2,451' },
            { icon: Factory, label: 'Processors', count: '183' },
            { icon: Truck, label: 'Distributors', count: '342' },
            { icon: Store, label: 'Retailers', count: '1,256' },
          ].map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded-lg mb-2">
                <stage.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="font-medium dark:text-gray-200">{stage.label}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{stage.count}</span>
              {index < 3 && <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-600 mx-4 hidden md:block" />}
            </div>
          ))}
        </div>
      </div>

      {/* Active Batches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Active Batches</h2>
          <div className="space-y-4">
            {[
              {
                id: 'RICE-45892',
                location: 'Bihar Processing Center',
                stage: 'Processing',
                quantity: '2,500 kg',
                status: 'On Track',
              },
              {
                id: 'RICE-45893',
                location: 'Delhi Distribution Hub',
                stage: 'Distribution',
                quantity: '1,800 kg',
                status: 'Delayed',
              },
              {
                id: 'RICE-45894',
                location: 'Mumbai Retail Chain',
                stage: 'Retail',
                quantity: '950 kg',
                status: 'Completed',
              },
            ].map((batch, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium dark:text-gray-200">{batch.id}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{batch.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium dark:text-gray-300">{batch.quantity}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    batch.status === 'On Track'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-300'
                      : batch.status === 'Delayed'
                      ? 'bg-orange-50 text-orange-600 dark:bg-orange-900 dark:text-orange-300'
                      : 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {batch.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Smart Contract Status</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Farmer Payment Contract',
                id: 'SC-7829',
                value: '₹1.2M',
                status: 'Pending',
              },
              {
                title: 'Quality Verification',
                id: 'SC-7830',
                value: '₹850K',
                status: 'Completed',
              },
              {
                title: 'Distribution Agreement',
                id: 'SC-7831',
                value: '₹2.1M',
                status: 'Active',
              },
            ].map((contract, index) => (
              <div key={index} className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium dark:text-gray-200">{contract.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    contract.status === 'Completed'
                      ? 'bg-green-50 text-green-600 dark:bg-green-900 dark:text-green-300'
                      : contract.status === 'Pending'
                      ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {contract.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{contract.id}</span>
                  <span>{contract.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}