import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { OverviewTab } from './components/OverviewTab';
import { TrendsTab } from './components/TrendsTab';
import { ConsumerInsightsTab } from './components/ConsumerInsightsTab';
import { AudienceTab } from './components/AudienceTab';
import { ReportsTab } from './components/ReportsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [category, setCategory] = useState('Food & Beverage');
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'trends':
        return <TrendsTab />;
      case 'insights':
        return <ConsumerInsightsTab />;
      case 'audience':
        return <AudienceTab />;
      case 'reports':
        return <ReportsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <Sidebar
        activeTab={activeTab}
        onTabChange={(tab) => { setActiveTab(tab); setSidebarOpen(false); }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar
          category={category}
          timeRange={timeRange}
          onCategoryChange={setCategory}
          onTimeRangeChange={setTimeRange}
          onMenuToggle={() => setSidebarOpen((o) => !o)}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-4 md:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}