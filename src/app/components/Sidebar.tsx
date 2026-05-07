import { BarChart3, TrendingUp, Lightbulb, Users, FileText } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    // { id: 'trends', label: 'Trends', icon: TrendingUp },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-[#e5e5e5] flex flex-col">
      <div className="p-6 pb-8">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#0058A3] flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-xl tracking-tight text-[#1a1a1a] font-bold">Rankster</h1>
        </div>
        <p className="text-sm text-[#666666] ml-10 font-medium">Business Analytics</p>
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[#f5f5f5] relative group"
                style={{
                  background: isActive ? '#0058A3' : 'transparent',
                  color: isActive ? '#ffffff' : '#666666',
                }}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className={isActive ? 'font-semibold' : 'font-medium'}>{item.label}</span>
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#FFDA1A] rounded-l-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 m-3 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5]">
        <div className="text-xs">
          <p className="text-[#666666] mb-1 font-medium">Last updated</p>
          <p className="text-[#1a1a1a] font-semibold">Apr 10, 2026 • 2:34 PM</p>
        </div>
      </div>
    </div>
  );
}