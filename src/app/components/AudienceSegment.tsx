import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AudienceSegmentProps {
  title: string;
  data: Array<{ name: string; value: number; description: string }>;
}

export function AudienceSegment({ title, data }: AudienceSegmentProps) {
  const COLORS = ['#7B61FF', '#A78BFA', '#C4B5FD', '#DDD6FE'];

  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <h3 className="mb-6">{title}</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '12px',
            }}
            formatter={(value: number, name: string, props: any) => {
              return [
                <div key="tooltip">
                  <p className="font-medium">{value} users</p>
                  <p className="text-xs text-muted-foreground mt-1">{props.payload.description}</p>
                </div>,
                ''
              ];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
