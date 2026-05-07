import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface TierDistributionProps {
  title: string;
  data: Array<{ tier: string; count: number; items: string[] }>;
}

export function TierDistribution({ title, data }: TierDistributionProps) {
  const tierColors: Record<string, string> = {
    S: '#FFDA1A',
    A: '#0058A3',
    B: '#0076d1',
    C: '#a3a3a3',
    D: '#e5e5e5',
  };

  return (
    <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-[#1a1a1a] font-bold">{title}</h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
          <XAxis
            dataKey="tier"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666666', fontSize: 13, fontWeight: 600 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666666', fontSize: 13, fontWeight: 600 }}
          />
          <Tooltip
            cursor={{ fill: '#f5f5f5' }}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white border border-border rounded-lg p-3 shadow-lg">
                    <p className="font-bold mb-2">Tier {data.tier}</p>
                    <p className="text-sm text-muted-foreground mb-2 font-semibold">{data.count} rankings</p>
                    <div className="text-xs text-muted-foreground">
                      <p className="mb-1 font-semibold">Top items:</p>
                      {data.items.slice(0, 3).map((item: string, i: number) => (
                        <p key={i}>• {item}</p>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={tierColors[entry.tier]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}