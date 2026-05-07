import { MetricCard } from './MetricCard';
import { TrendChart } from './TrendChart';
import { InsightCard } from './InsightCard';
import { TrendingUp } from 'lucide-react';

export function OverviewTab() {
  const growthData = [
    { date: 'Jan', rankings: 8200, users: 12500, engagement: 58, datapoints: 54400 },
    { date: 'Feb', rankings: 8900, users: 14200, engagement: 62, datapoints: 58200 },
    { date: 'Mar', rankings: 9800, users: 16100, engagement: 65, datapoints: 62100 },
    { date: 'Apr', rankings: 10880, users: 18000, engagement: 67, datapoints: 66400 },
  ];

  const growthLines = [
    // { key: 'rankings', color: '#0058A3', name: 'Total Rankings' },
    // { key: 'users', color: '#0076d1', name: 'Active Users' },
    { key: 'datapoints', color: '#0076d1', name: 'Data Points (Rankings)' },
    { key: 'engagement', color: '#FFDA1A', name: 'Engagement %' },
  ];

  return (
    <div>
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* <MetricCard
          label="Total Rankings"
          value="10,880"
          change={12.5}
          trend="up"
        /> */}
        {/* <MetricCard
          label="Active Users"
          value="18,000"
          change={8.3}
          trend="up"
        /> */}
        <MetricCard
          label="Data Points (Rankings)"
          value="54.4K"
          change={15.7}
          trend="up"
        />
        <MetricCard
          label="Engagement Rate"
          value="67%"
          change={3.2}
          trend="up"
        />
      </div>

      {/* Growth Chart */}
      <div className="mb-8">
        <TrendChart
          title="Growth Trends Over Time"
          data={growthData}
          lines={growthLines}
        />
      </div>

      {/* Trending Topics */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[#1a1a1a] font-bold">Trending Ranking Topics</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { topic: 'Spicy Foods', change: 25 },
            { topic: 'International Flavors', change: 21 },
            { topic: 'Street Food', change: 17 },
            { topic: 'Comfort Food', change: 13 }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 border border-[#e5e5e5] shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-[#1a1a1a]">{item.topic}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#666666] font-semibold">{(1200 + i * 200).toLocaleString()} rankings</p>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFDA1A] text-[#1a1a1a] text-xs font-bold">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{item.change}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Insights */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[#1a1a1a] font-bold">Quick Insights</h2>
          <span className="px-3 py-1 rounded-md bg-[#0058A3] text-white text-xs font-bold uppercase tracking-wide">AI Powered</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InsightCard
            insight="Your category engagement is 23% higher than industry average, driven by active ranker segment."
            impact="high"
          />
          <InsightCard
            insight="Peak ranking activity occurs on weekends between 6-9 PM, suggesting leisure-time engagement."
            impact="medium"
          />
          <InsightCard
            insight="Users who rank more than 5 items have 3.2x higher retention rate than casual users."
            impact="high"
          />
          <InsightCard
            insight="New user onboarding completion rate is 78%, with most drop-off at the category selection step."
            impact="medium"
          />
        </div>
      </div>
    </div>
  );
}