import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Users, Activity, Star } from 'lucide-react';

export function AudienceTab() {
  const ageData = [
    { age: '18-24', users: 4200 },
    { age: '25-34', users: 5800 },
    { age: '35-44', users: 4100 },
    { age: '45-54', users: 2400 },
    { age: '55+', users: 1500 },
  ];

  const genderData = [
    { name: 'Female', value: 9800, color: '#0058A3' },
    { name: 'Male', value: 7200, color: '#FFDA1A' },
    { name: 'Non-binary', value: 800, color: '#0076d1' },
    { name: 'Prefer not to say', value: 200, color: '#e5e5e5' },
  ];

  const segmentData = [
    {
      name: 'Power Users',
      count: 2100,
      avgRankings: 12.5,
      engagement: 94,
      description: 'Create 10+ rankings per month',
      icon: Star,
      color: '#FFDA1A',
    },
    {
      name: 'Active Rankers',
      count: 6800,
      avgRankings: 5.8,
      engagement: 76,
      description: 'Create 5-9 rankings per month',
      icon: Activity,
      color: '#0058A3',
    },
    {
      name: 'Casual Users',
      count: 9100,
      avgRankings: 2.1,
      engagement: 48,
      description: 'Create 1-4 rankings per month',
      icon: Users,
      color: '#a3a3a3',
    },
  ];

  return (
    <div>
      {/* Demographics Overview */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[#1a1a1a] font-bold">User Demographics</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Age Distribution */}
          <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
            <h3 className="mb-6 text-[#1a1a1a] font-bold">Age Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                <XAxis
                  dataKey="age"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666666', fontSize: 12, fontWeight: 600 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666666', fontSize: 12, fontWeight: 600 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Bar dataKey="users" fill="#0058A3" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
            <h3 className="mb-6 text-[#1a1a1a] font-bold">Gender Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* User Segmentation */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[#1a1a1a] font-bold">User Segmentation</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {segmentData.map((segment, i) => {
            const Icon = segment.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-[#e5e5e5] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: segment.color }}>
                    <Icon className="w-6 h-6" style={{ color: segment.color === '#FFDA1A' ? '#1a1a1a' : '#ffffff' }} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[#1a1a1a] font-bold">{segment.name}</h3>
                </div>
                <p className="text-sm text-[#666666] mb-4 font-semibold">{segment.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#666666] font-semibold">Users</span>
                    <span className="font-bold text-[#1a1a1a]">{segment.count.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#666666] font-semibold">Avg Rankings</span>
                    <span className="font-bold text-[#1a1a1a]">{segment.avgRankings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#666666] font-semibold">Engagement</span>
                    <span
                      className="font-bold px-3 py-1 rounded-md text-sm"
                      style={{
                        color: segment.color === '#FFDA1A' ? '#1a1a1a' : '#ffffff',
                        backgroundColor: segment.color
                      }}
                    >
                      {segment.engagement}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Behavior Insights */}
      <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[#1a1a1a] font-bold">Behavioral Insights by Segment</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-5 rounded-lg bg-[#FFFBF0] border-2 border-[#FFDA1A]">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-sm text-[#666666] font-bold uppercase tracking-wide">Power Users</p>
            </div>
            <p className="text-3xl mb-2 font-bold text-[#1a1a1a]">12.5</p>
            <p className="text-xs text-[#666666] mb-3 font-semibold">Avg rankings per user</p>
            <div className="mt-4 pt-3 border-t border-[#FFDA1A]">
              <p className="text-xs text-[#1a1a1a] font-semibold">Most active on weekends</p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#F0F6FC] border-2 border-[#0058A3]">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-sm text-[#666666] font-bold uppercase tracking-wide">Active Rankers</p>
            </div>
            <p className="text-3xl mb-2 font-bold text-[#0058A3]">5.8</p>
            <p className="text-xs text-[#666666] mb-3 font-semibold">Avg rankings per user</p>
            <div className="mt-4 pt-3 border-t border-[#0058A3]">
              <p className="text-xs text-[#1a1a1a] font-semibold">Balanced throughout week</p>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5]">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-sm text-[#666666] font-bold uppercase tracking-wide">Casual Users</p>
            </div>
            <p className="text-3xl mb-2 font-bold text-[#666666]">2.1</p>
            <p className="text-xs text-[#666666] mb-3 font-semibold">Avg rankings per user</p>
            <div className="mt-4 pt-3 border-t border-[#e5e5e5]">
              <p className="text-xs text-[#1a1a1a] font-semibold">Peak activity on Sundays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}