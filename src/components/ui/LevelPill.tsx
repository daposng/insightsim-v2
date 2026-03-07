interface LevelPillProps {
  level: string;
}

export default function LevelPill({ level }: LevelPillProps) {
  return (
    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/25">
      {level}
    </span>
  );
}
