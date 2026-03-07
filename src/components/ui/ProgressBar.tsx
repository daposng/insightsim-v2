import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

export default function ProgressBar({
  label,
  value,
  color = '#58a6ff',
}: ProgressBarProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted">{label}</span>
        <span className="text-muted">{value}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
