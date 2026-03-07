import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LevelPill from '../ui/LevelPill';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/simulator', label: 'Simulator' },
  { to: '/dashboard', label: 'Dashboard' },
];

function linkClass({ isActive }: { isActive: boolean }) {
  return `text-sm font-medium transition-colors ${
    isActive ? 'text-blue' : 'text-muted hover:text-white'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[60px] flex items-center justify-between px-4 sm:px-6 bg-bg/80 backdrop-blur-md border-b border-white/5">
      {/* Left — brand */}
      <div className="flex items-center gap-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-white tracking-tight">
            <span className="text-blue">/</span> InsightSim
          </span>
        </NavLink>
        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-muted bg-white/5 px-2 py-0.5 rounded">
          Engineering Simulator
        </span>
      </div>

      {/* Centre — desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
            {l.label}
          </NavLink>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <LevelPill level="Intermediate" />
        </div>
        <div
          className="w-8 h-8 rounded-full bg-blue/20 text-blue text-xs font-bold flex items-center justify-center border border-blue/30"
          aria-label="User avatar"
        >
          AD
        </div>
        <button
          className="md:hidden p-1 text-muted hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[60px] left-0 right-0 bg-surface border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue/10 text-blue'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
