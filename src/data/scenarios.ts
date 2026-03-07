export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMin: number;
  featured: boolean;
}

export const scenarios: Scenario[] = [
  {
    id: 'full-plant',
    title: 'Full Plant Chain',
    description: 'End-to-end hydropower simulation: reservoir to grid connection with governor and AVR control.',
    icon: '🏭',
    difficulty: 'Advanced',
    durationMin: 45,
    featured: true,
  },
  {
    id: 'vfd-basics',
    title: 'VFD Speed Control',
    description: 'Ramp a motor from standstill to rated speed using V/Hz control and observe current behaviour.',
    icon: '⚙️',
    difficulty: 'Beginner',
    durationMin: 15,
    featured: false,
  },
  {
    id: 'plc-interlock',
    title: 'PLC Interlocking',
    description: 'Wire forward-reverse motor control with safety interlocks in ladder logic.',
    icon: '🔌',
    difficulty: 'Intermediate',
    durationMin: 25,
    featured: false,
  },
  {
    id: 'grid-disturbance',
    title: 'Grid Disturbance',
    description: 'Respond to a frequency excursion event: load shedding, governor action, and UFLS relays.',
    icon: '📡',
    difficulty: 'Advanced',
    durationMin: 30,
    featured: false,
  },
];
