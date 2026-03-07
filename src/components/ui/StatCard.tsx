import { useEffect, useState } from 'react';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
}

export default function StatCard({ label, value, suffix = '' }: StatCardProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const id = setInterval(() => {
      current += step;
      if (current >= value) {
        setDisplay(value);
        clearInterval(id);
      } else {
        setDisplay(current);
      }
    }, 30);
    return () => clearInterval(id);
  }, [value]);

  return (
    <div className="bg-surface border border-white/5 rounded-xl p-4 text-center min-w-[100px]">
      <p className="text-2xl md:text-3xl font-bold text-white">
        {display}
        {suffix}
      </p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}
