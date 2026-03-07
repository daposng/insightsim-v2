export interface Milestone {
  id: string;
  number: number;
  title: string;
  description: string;
  locked: boolean;
}

export const milestones: Milestone[] = [
  {
    id: 'm1',
    number: 1,
    title: 'First Principles',
    description: 'Complete all fundamentals labs and pass the Module 1 quiz with 80%+ score.',
    locked: false,
  },
  {
    id: 'm2',
    number: 2,
    title: 'Control Loop Mastery',
    description: 'Tune a PID controller, commission a VFD, and demonstrate stable closed-loop response.',
    locked: true,
  },
  {
    id: 'm3',
    number: 3,
    title: 'Plant Operator Ready',
    description: 'Run a full plant simulation end-to-end, handle a fault injection, and pass the capstone assessment.',
    locked: true,
  },
];
