import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ComparisonChartProps {
  title: string;
  data: Array<{ name: string; premium: number; popular: number; underrated: number }>;
}

export function ComparisonChart({ title, data }: ComparisonChartProps) {
  return (
    <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-[#1a1a1a] font-bold">{title}</h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" horizontal={false} />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666666', fontSize: 12, fontWeight: 600 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666666', fontSize: 12, fontWeight: 600 }}
            width={120}
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
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ paddingBottom: '20px', fontWeight: 600 }}
          />
          <Bar dataKey="premium" fill="#0058A3" name="Premium Tier (S/A)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="popular" fill="#FFDA1A" name="Popular Tier (B/C)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="underrated" fill="#e5e5e5" name="Underrated (D)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}