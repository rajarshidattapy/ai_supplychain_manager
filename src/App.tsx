import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileMenuButton } from './components/layout/MobileMenuButton';
import { useDarkMode } from './hooks/useDarkMode';
import { DashboardContent } from './components/pages/DashboardContent';
import { SupplyChainContent } from './components/pages/SupplyChainContent';
import { AlertsContent } from './components/pages/AlertsContent';
import { AnalyticsContent } from './components/pages/AnalyticsContent';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'supply':
        return <SupplyChainContent />;
      case 'alerts':
        return <AlertsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      <MobileMenuButton
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="md:ml-64 p-4 md:p-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="dark:text-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;