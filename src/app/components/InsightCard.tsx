import { Lightbulb } from 'lucide-react';

interface InsightCardProps {
  insight: string;
  impact?: 'high' | 'medium' | 'low';
}

export function InsightCard({ insight, impact = 'medium' }: InsightCardProps) {
  const impactConfig = {
    high: { borderColor: '#FFDA1A', bg: '#FFFBF0' },
    medium: { borderColor: '#0058A3', bg: '#F0F6FC' },
    low: { borderColor: '#e5e5e5', bg: '#ffffff' },
  };

  const config = impactConfig[impact];

  return (
    <div
      className="bg-white rounded-lg p-5 border-2 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200"
      style={{
        borderColor: config.borderColor,
        backgroundColor: config.bg
      }}
    >
      <div
        className="p-2.5 rounded-lg flex-shrink-0"
        style={{ 
          backgroundColor: impact === 'high' ? '#FFDA1A' : '#0058A3',
        }}
      >
        <Lightbulb className="w-5 h-5" style={{ color: impact === 'high' ? '#1a1a1a' : '#ffffff' }} strokeWidth={2.5} />
      </div>
      <div className="flex-1">
        <p className="text-sm leading-relaxed text-[#1a1a1a] font-medium">{insight}</p>
      </div>
    </div>
  );
}