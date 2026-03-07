import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Play, BarChart3 } from 'lucide-react';

const items = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/courses', icon: BookOpen, label: 'Courses' },
  { to: '/simulator', icon: Play, label: 'Simulator' },
  { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
];

export default function BottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-white/5"
      aria-label="Bottom navigation"
    >
      <div className="flex justify-around py-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors ${
                isActive ? 'text-blue' : 'text-muted'
              }`
            }
            aria-label={item.label}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
