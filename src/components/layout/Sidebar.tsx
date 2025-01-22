import React from 'react';
import { BarChart3, Box, AlertTriangle, Activity } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
  { icon: Box, label: 'Supply Chain', id: 'supply' },
  { icon: AlertTriangle, label: 'Alerts', id: 'alerts' },
  { icon: Activity, label: 'Analytics', id: 'analytics' },
];

export function Sidebar({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  return (
    <div className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-200 transform 
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img src="https://i.imgur.com/6DQUw0c.png" alt="SupplyGuard AI" className="h-8 w-8" />
          <span className="text-xl font-bold dark:text-white font-righteous">
            SupplyGuard AI
          </span>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}