import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down';
}

export function MetricCard({ label, value, change, trend }: MetricCardProps) {
  const showTrend = change !== undefined && trend;
  const isPositive = trend === 'up';

  return (
    <div className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm hover:shadow-md transition-all duration-200">
      <p className="text-sm text-[#666666] mb-3 font-semibold uppercase tracking-wide">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-3xl text-[#1a1a1a] font-bold">{value}</p>
        {showTrend && (
          <div
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold"
            style={{
              color: isPositive ? '#1a1a1a' : '#EF4444',
              backgroundColor: isPositive ? '#FFDA1A' : '#FEF2F2'
            }}
          >
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span>{Math.abs(change!)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}