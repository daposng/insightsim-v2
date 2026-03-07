export interface TrackLevel {
  name: string;
  progress: number;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'blue' | 'gold';
  topics: string[];
  milestoneCount: number;
  levels: TrackLevel[];
}

export const tracks: Track[] = [
  {
    id: 'control',
    title: 'Control & Automation',
    description:
      'Master PLC programming, ladder logic, VFD drives, and industrial process control from fundamentals to advanced troubleshooting.',
    icon: '⚡',
    color: 'blue',
    topics: ['PLC', 'Ladder Logic', 'VFD Drives', 'PID Control', 'SCADA', 'Interlocks'],
    milestoneCount: 6,
    levels: [
      { name: 'Fundamentals', progress: 75 },
      { name: 'Intermediate', progress: 40 },
      { name: 'Advanced', progress: 10 },
    ],
  },
  {
    id: 'power',
    title: 'Power Generation',
    description:
      'Explore hydropower systems, turbine governors, synchronous generators, grid protection, and plant-wide dynamic simulation.',
    icon: '🔋',
    color: 'gold',
    topics: ['Hydro Turbines', 'Governors', 'Generators', 'AVR', 'Protection', 'Grid Sync'],
    milestoneCount: 6,
    levels: [
      { name: 'Fundamentals', progress: 60 },
      { name: 'Intermediate', progress: 25 },
      { name: 'Advanced', progress: 0 },
    ],
  },
];
