interface TopicChipProps {
  label: string;
  color?: 'blue' | 'gold';
}

export default function TopicChip({ label, color = 'blue' }: TopicChipProps) {
  const cls =
    color === 'gold'
      ? 'bg-gold/10 text-gold border-gold/20'
      : 'bg-blue/10 text-blue border-blue/20';

  return (
    <span
      className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full border ${cls}`}
    >
      {label}
    </span>
  );
}
