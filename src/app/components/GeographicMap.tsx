interface GeographicMapProps {
  title: string;
  data: Array<{ region: string; score: number; topItem: string }>;
}

export function GeographicMap({ title, data }: GeographicMapProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#7B61FF';
    if (score >= 60) return '#A78BFA';
    if (score >= 40) return '#C4B5FD';
    return '#DDD6FE';
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <h3 className="mb-6">{title}</h3>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
            <div className="flex-1">
              <p className="font-medium">{item.region}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Most popular: {item.topItem}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Engagement</p>
                <p className="text-lg">{item.score}</p>
              </div>
              <div
                className="w-2 h-12 rounded-full"
                style={{ backgroundColor: getScoreColor(item.score) }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
