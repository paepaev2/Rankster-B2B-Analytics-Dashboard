import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface TrendChartProps {
  title: string;
  data: Array<{ date: string; [key: string]: string | number }>;
  lines: Array<{ key: string; color: string; name: string }>;
}

export function TrendChart({ title, data, lines }: TrendChartProps) {
  return (
    <div className="bg-white rounded-lg p-8 border border-[#e5e5e5] shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-[#1a1a1a] font-bold">{title}</h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
          <XAxis
            dataKey="date"
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
          <Legend
            verticalAlign="top"
            height={36}
            iconType="line"
            wrapperStyle={{ paddingBottom: '20px', fontWeight: 600 }}
          />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.color}
              strokeWidth={3}
              name={line.name}
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2, stroke: 'white' }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}