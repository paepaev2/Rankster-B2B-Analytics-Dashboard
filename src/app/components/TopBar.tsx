import { ChevronDown, Search, Menu } from 'lucide-react';

interface TopBarProps {
  category: string;
  timeRange: string;
  onCategoryChange: (value: string) => void;
  onTimeRangeChange: (value: string) => void;
  onMenuToggle: () => void;
}

export function TopBar({
  category,
  timeRange,
  onCategoryChange,
  onTimeRangeChange,
  onMenuToggle,
}: TopBarProps) {
  return (
    <div className="bg-white border-b border-[#e5e5e5] sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-[#f5f5f5] text-[#666666] flex-shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <h2 className="text-base md:text-xl text-[#1a1a1a] font-bold truncate">Consumer Insights</h2>
            <p className="text-xs text-[#666666] mt-0.5 font-medium hidden sm:block">Real-time ranking analytics</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
            <input
              type="text"
              placeholder="Search insights..."
              className="pl-11 pr-4 py-2.5 bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg text-sm focus:outline-none focus:border-[#0058A3] focus:bg-white transition-all w-64 placeholder:text-[#999999]"
            />
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <FilterSelect
              value={category}
              onChange={onCategoryChange}
              options={['Food & Beverage', 'Music', 'Movies', 'Entertainment', 'Technology']}
            />
            <FilterSelect
              value={timeRange}
              onChange={onTimeRangeChange}
              options={['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months']}
            />
          </div>

          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-[#0058A3] flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0">
            JD
          </div>
        </div>
      </div>

      {/* Filters row on mobile */}
      <div className="sm:hidden flex items-center gap-2 px-4 pb-3">
        <div className="flex-1">
          <FilterSelect
            value={category}
            onChange={onCategoryChange}
            options={['Food & Beverage', 'Music', 'Movies', 'Entertainment', 'Technology']}
            fullWidth
          />
        </div>
        <div className="flex-1">
          <FilterSelect
            value={timeRange}
            onChange={onTimeRangeChange}
            options={['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months']}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  fullWidth?: boolean;
}

function FilterSelect({ value, onChange, options, fullWidth }: FilterSelectProps) {
  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none bg-white text-[#1a1a1a] px-4 py-2.5 pr-10 rounded-lg border border-[#e5e5e5] cursor-pointer hover:border-[#0058A3] transition-all font-medium text-sm ${fullWidth ? 'w-full' : ''}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
    </div>
  );
}