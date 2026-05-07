import { TrendChart } from './TrendChart';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function TrendsTab() {
  const momentumData = [
    { date: 'Week 1', trending: 45, declining: 28 },
    { date: 'Week 2', trending: 52, declining: 24 },
    { date: 'Week 3', trending: 68, declining: 19 },
    { date: 'Week 4', trending: 85, declining: 15 },
  ];

  const momentumLines = [
    { key: 'trending', color: '#0058A3', name: 'Rising Items' },
    { key: 'declining', color: '#EF4444', name: 'Declining Items' },
  ];

  const trendingItems = [
    { name: 'Spicy Chicken Wings', change: 42, velocity: 'Fast', rankings: 1240 },
    { name: 'Truffle Fries', change: 38, velocity: 'Fast', rankings: 980 },
    { name: 'Korean BBQ Tacos', change: 35, velocity: 'Medium', rankings: 756 },
    { name: 'Matcha Desserts', change: 28, velocity: 'Medium', rankings: 623 },
  ];

  const decliningItems = [
    { name: 'Plain Salads', change: -32, velocity: 'Fast', rankings: 445 },
    { name: 'Basic Sandwiches', change: -24, velocity: 'Medium', rankings: 521 },
    { name: 'Boiled Vegetables', change: -18, velocity: 'Slow', rankings: 389 },
  ];

  return (
    <div>
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

      {/* Momentum Chart */}
      <div className="mb-8">
        <TrendChart
          title="Rising vs Declining Trend Momentum"
          data={momentumData}
          lines={momentumLines}
        />
      </div>

      {/* Detailed Lists */}
      <div className="grid grid-cols-2 gap-6">
        {/* Rising */}
        <div className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="text-[#1a1a1a] font-bold">Most Improved Items</span>
          </h3>
          <div className="space-y-3">
            {trendingItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#F0F6FC] rounded-lg border border-[#0058A3]">
                <div>
                  <p className="font-bold text-sm text-[#1a1a1a]">{item.name}</p>
                  <p className="text-xs text-[#666666] mt-0.5 font-semibold">{item.rankings} rankings</p>
                </div>
                <div className="text-right">
                  <p className="text-[#0058A3] font-bold">+{item.change}%</p>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-white text-[#0058A3] border border-[#0058A3] font-bold">{item.velocity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Declining */}
        <div className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="text-[#1a1a1a] font-bold">Most Dropped Items</span>
          </h3>
          <div className="space-y-3">
            {decliningItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#FEF2F2] rounded-lg border border-[#FEE2E2]">
                <div>
                  <p className="font-bold text-sm text-[#1a1a1a]">{item.name}</p>
                  <p className="text-xs text-[#666666] mt-0.5 font-semibold">{item.rankings} rankings</p>
                </div>
                <div className="text-right">
                  <p className="text-[#EF4444] font-bold">{item.change}%</p>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-white text-[#EF4444] border border-[#FEE2E2] font-bold">{item.velocity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}