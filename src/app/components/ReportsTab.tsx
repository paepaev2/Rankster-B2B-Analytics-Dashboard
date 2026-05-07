import { InsightCard } from './InsightCard';
import { Download, FileText } from 'lucide-react';

export function ReportsTab() {
  const surveyComparison = [
    {
      topic: 'Healthy Food Preference',
      surveyResponse: 'I prefer healthy options',
      surveySays: 78,
      actualRankings: 42,
      gap: -36,
    },
    {
      topic: 'Spicy Food Preference',
      surveyResponse: 'I enjoy spicy foods',
      surveySays: 62,
      actualRankings: 85,
      gap: 23,
    },
    {
      topic: 'Premium Dining',
      surveyResponse: 'I value quality over price',
      surveySays: 71,
      actualRankings: 54,
      gap: -17,
    },
    {
      topic: 'Traditional Foods',
      surveyResponse: 'I prefer classic dishes',
      surveySays: 55,
      actualRankings: 68,
      gap: 13,
    },
  ];

  return (
    <div>
      {/* Report Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-[#1a1a1a] font-bold">Analytics Reports</h2>
          </div>
          <p className="text-sm text-[#666666] font-semibold">
            Compare survey responses with actual ranking behavior
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-[#0058A3] text-white rounded-lg hover:shadow-md transition-all font-bold hover:bg-[#003d73]">
          <Download className="w-4 h-4" />
          <span>Download Report</span>
        </button>
      </div>

      {/* Key Insights */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#1a1a1a] font-bold">Key Findings</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InsightCard
            insight="Users say they prefer healthy food, but rankings show 36% lower actual preference. Actions speak louder than words."
            impact="high"
          />
          <InsightCard
            insight="Spicy food rankings are 23% higher than stated preferences, indicating social desirability bias in surveys."
            impact="high"
          />
          <InsightCard
            insight="Traditional comfort foods rank 13% higher than survey responses suggest, showing gap between aspiration and behavior."
            impact="medium"
          />
          <InsightCard
            insight="Premium dining preference gap of -17% indicates price sensitivity despite stated quality preference."
            impact="medium"
          />
        </div>
      </div>

      {/* Survey vs Ranking Comparison */}
      {/* <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm mb-8">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[#1a1a1a] font-bold">Survey vs. Ranking Behavior Analysis</h3>
        </div>
        <div className="space-y-4">
          {surveyComparison.map((item, i) => {
            const isPositiveGap = item.gap > 0;
            const gapColor = isPositiveGap ? '#0058A3' : '#EF4444';
            const gapBg = isPositiveGap ? '#F0F6FC' : '#FEF2F2';

            return (
              <div
                key={i}
                className="flex items-center justify-between p-5 rounded-lg border border-[#e5e5e5] bg-white"
              >
                <div className="flex-1">
                  <p className="font-bold mb-2 text-[#1a1a1a]">{item.topic}</p>
                  <p className="text-sm text-[#666666] font-semibold">\"{item.surveyResponse}\"</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-[#666666]">{item.surveySays}%</p>
                    <p className="text-xs text-[#666666] mt-1 font-bold uppercase tracking-wide">Survey Says</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-[#0058A3]">{item.actualRankings}%</p>
                    <p className="text-xs text-[#666666] mt-1 font-bold uppercase tracking-wide">Actual Rankings</p>
                  </div>
                  <div className="text-center min-w-[90px]">
                    <div
                      className="inline-block px-4 py-2 rounded-md"
                      style={{ backgroundColor: gapBg }}
                    >
                      <p className="text-xl font-bold" style={{ color: gapColor }}>
                        {isPositiveGap ? '+' : ''}{item.gap}%
                      </p>
                    </div>
                    <p className="text-xs text-[#666666] mt-1 font-bold uppercase tracking-wide">Gap</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Report Templates */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#1a1a1a] font-bold">Available Reports</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Weekly Analytics Summary', date: 'Apr 3 - Apr 10, 2026' },
            { title: 'Monthly Trends Report', date: 'March 2026' },
            { title: 'Audience Demographics', date: 'Q1 2026' },
            { title: 'Competitive Analysis', date: 'Last 90 days' },
            { title: 'Category Performance', date: 'Year to Date' },
            { title: 'Custom Export', date: 'Select date range' },
          ].map((report, i) => (
            <button
              key={i}
              className="flex items-start gap-3 p-5 bg-white border border-[#e5e5e5] rounded-lg hover:border-[#0058A3] hover:shadow-md transition-all text-left"
            >
              <div className="p-2.5 rounded-lg bg-[#0058A3]">
                <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm mb-1 text-[#1a1a1a]">{report.title}</p>
                <p className="text-xs text-[#666666] font-semibold">{report.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}