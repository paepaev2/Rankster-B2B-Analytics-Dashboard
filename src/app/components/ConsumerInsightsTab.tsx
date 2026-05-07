import { TierDistribution } from './TierDistribution';
import { ComparisonChart } from './ComparisonChart';
import { Crown, TrendingDown } from 'lucide-react';

export function ConsumerInsightsTab() {
  const tierData = [
    { tier: 'S', count: 1240, items: ['Spicy Chicken Wings', 'Truffle Fries', 'Classic Burger'] },
    { tier: 'A', count: 2180, items: ['BBQ Ribs', 'Caesar Salad', 'Margherita Pizza'] },
    { tier: 'B', count: 3450, items: ['French Fries', 'Garden Salad', 'Onion Rings'] },
    { tier: 'C', count: 2890, items: ['Plain Toast', 'Steamed Broccoli', 'Plain Rice'] },
    { tier: 'D', count: 1120, items: ['Boiled Carrots', 'Plain Crackers', 'Celery Sticks'] },
  ];

  const comparisonData = [
    { name: 'Street Food', premium: 45, popular: 65, underrated: 15 },
    { name: 'Fine Dining', premium: 78, popular: 35, underrated: 8 },
    { name: 'Fast Food', premium: 28, popular: 82, underrated: 22 },
    { name: 'Casual Dining', premium: 42, popular: 58, underrated: 12 },
  ];

  const topRanked = [
    { name: 'Spicy Chicken Wings', tier: 'S', score: 94, count: 1240 },
    { name: 'Truffle Fries', tier: 'S', score: 92, count: 1180 },
    { name: 'Classic Burger', tier: 'S', score: 91, count: 1156 },
    { name: 'BBQ Ribs', tier: 'A', score: 88, count: 1089 },
    { name: 'Korean BBQ Tacos', tier: 'A', score: 86, count: 987 },
  ];

  const lowestRanked = [
    { name: 'Boiled Carrots', tier: 'D', score: 23, count: 445 },
    { name: 'Plain Crackers', tier: 'D', score: 26, count: 389 },
    { name: 'Celery Sticks', tier: 'D', score: 28, count: 367 },
    { name: 'Plain Toast', tier: 'C', score: 32, count: 412 },
  ];

  const preferenceData = [
    { category: 'Spicy', value: 85, change: 12 },
    { category: 'Savory', value: 78, change: 5 },
    { category: 'Sweet', value: 42, change: -8 },
    { category: 'Healthy', value: 38, change: -3 },
  ];

  return (
    <div>
      {/* Tier Distribution */}
      <div className="mb-8">
        <TierDistribution
          title="Tier Distribution Across All Items"
          data={tierData}
        />
      </div>

      {/* Top vs Bottom */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Top Ranked */}
        <div className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="text-[#1a1a1a] font-bold">Top Ranked Items</span>
          </h3>
          <div className="space-y-3">
            {topRanked.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border-2 border-[#FFDA1A] bg-[#FFFBF0]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-md bg-[#0058A3]"
                  >
                    {item.tier}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1a1a1a]">{item.name}</p>
                    <p className="text-xs text-[#666666] font-semibold">{item.count} rankings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#0058A3]">{item.score}</p>
                  <p className="text-xs text-[#666666] font-semibold">Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lowest Ranked */}
        <div className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="text-[#1a1a1a] font-bold">Lowest Ranked Items</span>
          </h3>
          <div className="space-y-3">
            {lowestRanked.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#f5f5f5] rounded-lg border border-[#e5e5e5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e5e5e5] flex items-center justify-center text-[#666666] text-sm font-bold">
                    {item.tier}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1a1a1a]">{item.name}</p>
                    <p className="text-xs text-[#666666] font-semibold">{item.count} rankings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-[#666666]">{item.score}</p>
                  <p className="text-xs text-[#999999] font-semibold">Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preference Comparison */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-[#1a1a1a] font-bold">Flavor Preference Breakdown</h3>
          </div>
          <div className="space-y-5">
            {preferenceData.map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#1a1a1a]">{item.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#1a1a1a]">{item.value}%</span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md font-bold ${
                        item.change > 0
                          ? 'bg-[#FFDA1A] text-[#1a1a1a]'
                          : 'bg-[#FEF2F2] text-[#EF4444]'
                      }`}
                    >
                      {item.change > 0 ? '+' : ''}{item.change}%
                    </span>
                  </div>
                </div>
                <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all bg-[#0058A3]"
                    style={{
                      width: `${item.value}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ComparisonChart
          title="Category Positioning Analysis"
          data={comparisonData}
        />
      </div>
    </div>
  );
}