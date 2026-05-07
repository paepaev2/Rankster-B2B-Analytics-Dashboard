import { ChevronDown, Search } from 'lucide-react';

interface TopBarProps {
  category: string;
  timeRange: string;
  onCategoryChange: (value: string) => void;
  onTimeRangeChange: (value: string) => void;
}

export function TopBar({
  category,
  timeRange,
  onCategoryChange,
  onTimeRangeChange,
}: TopBarProps) {
  return (
    <div className="h-20 bg-white border-b border-[#e5e5e5] flex items-center justify-between px-8 sticky top-0 z-10">
      <div>
        <h2 className="text-xl text-[#1a1a1a] font-bold">Consumer Insights</h2>
        <p className="text-xs text-[#666666] mt-0.5 font-medium">Real-time ranking analytics</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
          <input
            type="text"
            placeholder="Search insights..."
            className="pl-11 pr-4 py-2.5 bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg text-sm focus:outline-none focus:border-[#0058A3] focus:bg-white transition-all w-64 placeholder:text-[#999999]"
          />
        </div>

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

        <div className="ml-2 w-10 h-10 rounded-lg bg-[#0058A3] flex items-center justify-center text-white text-sm font-bold shadow-md">
          JD
        </div>
      </div>
    </div>
  );
}

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

function FilterSelect({ value, onChange, options }: FilterSelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white text-[#1a1a1a] px-4 py-2.5 pr-10 rounded-lg border border-[#e5e5e5] cursor-pointer hover:border-[#0058A3] transition-all font-medium text-sm"
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