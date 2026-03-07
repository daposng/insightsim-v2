import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import StatCard from '../components/ui/StatCard';
import ProgressBar from '../components/ui/ProgressBar';
import TopicChip from '../components/ui/TopicChip';
import Button from '../components/ui/Button';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { tracks } from '../data/tracks';
import { scenarios } from '../data/scenarios';
import { milestones } from '../data/milestones';

// ─── Animation Variants ──────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

// ─── Mock user data ──────────────────────────────────────────────────────────

const user = { name: 'Ade', labsDone: 12, milestones: 3, overallPct: 42 };

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12"
    >
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Welcome back, <span className="text-blue">{user.name}</span>{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="text-muted mt-2 text-sm md:text-base max-w-md">
          Pick up where you left off or explore a new simulation track.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex gap-3">
        <StatCard label="Labs Done" value={user.labsDone} />
        <StatCard label="Milestones" value={user.milestones} />
        <StatCard label="Overall" value={user.overallPct} suffix="%" />
      </motion.div>
    </motion.section>
  );
}

// ─── Getting Started ─────────────────────────────────────────────────────────

function GettingStartedBanner() {
  if (user.overallPct > 0) return null;

  return (
    <section className="mb-12">
      <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-blue to-gold overflow-hidden">
        <div className="bg-surface rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0">
            <Rocket size={24} className="text-blue" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold mb-1 inline-block">
              Getting Started
            </span>
            <h2 className="text-lg font-bold text-white mb-1">
              Begin your engineering simulation journey
            </h2>
            <p className="text-sm text-muted mb-4 max-w-lg">
              Start with the Control & Automation fundamentals or dive into Power
              Generation basics. Each track has guided labs, quizzes, and hands-on
              simulators.
            </p>
            <Link to="/courses">
              <Button>
                Browse All Courses <ArrowRight size={14} className="inline ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Learning Tracks ─────────────────────────────────────────────────────────

function LearningTracks() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section ref={ref} className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Learning Tracks</h2>
        <Link
          to="/courses"
          className="text-sm text-muted hover:text-blue transition-colors flex items-center gap-1"
        >
          View all tracks <ArrowRight size={14} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {tracks.map((track) => {
          const accent = track.color === 'gold' ? '#f0a500' : '#58a6ff';
          const overall = Math.round(
            track.levels.reduce((s, l) => s + l.progress, 0) / track.levels.length,
          );

          return (
            <motion.div
              key={track.id}
              variants={fadeUp}
              className="group bg-surface border border-white/5 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: `0 0 0 0 ${accent}00`,
              }}
              whileHover={{
                boxShadow: `0 0 20px 0 ${accent}22`,
                borderColor: `${accent}44`,
              }}
            >
              {/* Accent bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
                }}
              />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: `${accent}15` }}
                  >
                    {track.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white">{track.title}</h3>
                    <p className="text-xs text-muted mt-0.5 line-clamp-2">
                      {track.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-muted bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">
                    {track.milestoneCount} milestones
                  </span>
                </div>

                {/* Progress bars */}
                <div className="mb-3">
                  {track.levels.map((level) => (
                    <ProgressBar
                      key={level.name}
                      label={level.name}
                      value={level.progress}
                      color={accent}
                    />
                  ))}
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {track.topics.map((t) => (
                    <TopicChip key={t} label={t} color={track.color} />
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {overall}% complete
                  </span>
                  <Button variant={track.color === 'gold' ? 'gold' : 'primary'}>
                    Continue <ArrowRight size={13} className="inline ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

// ─── Quick Simulator Launch ──────────────────────────────────────────────────

function QuickSimulator() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section ref={ref} className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Quick Simulator Launch</h2>
        <Link
          to="/simulator"
          className="text-sm text-muted hover:text-blue transition-colors flex items-center gap-1"
        >
          All scenarios <ArrowRight size={14} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {scenarios.map((s) => {
          const diffColor =
            s.difficulty === 'Beginner'
              ? 'text-green bg-green/10 border-green/20'
              : s.difficulty === 'Intermediate'
                ? 'text-gold bg-gold/10 border-gold/20'
                : 'text-red-400 bg-red-400/10 border-red-400/20';

          return (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className={`group bg-surface border rounded-xl p-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                s.featured
                  ? 'border-blue/30 shadow-[0_0_20px_0_rgba(88,166,255,0.08)]'
                  : 'border-white/5'
              }`}
              whileHover={{
                borderColor: '#58a6ff66',
                backgroundColor: '#58a6ff08',
              }}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-muted mb-3 line-clamp-2">{s.description}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${diffColor}`}
                >
                  {s.difficulty}
                </span>
                <span className="text-[10px] text-muted">{s.durationMin} min</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

// ─── Milestone Path ──────────────────────────────────────────────────────────

function MilestonePath() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section ref={ref} className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-white">Milestone Path</h2>
        <Link
          to="/dashboard"
          className="text-sm text-muted hover:text-blue transition-colors flex items-center gap-1"
        >
          View full roadmap <ArrowRight size={14} />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {milestones.map((m) => (
          <motion.div
            key={m.id}
            variants={fadeUp}
            className="bg-surface border border-white/5 rounded-xl p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  m.locked
                    ? 'bg-white/5 text-muted border border-white/10'
                    : 'bg-blue/15 text-blue border border-blue/30'
                }`}
              >
                {m.number}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{m.title}</h3>
                <p className="text-xs text-muted mt-1 line-clamp-2">{m.description}</p>
              </div>
            </div>
            <p
              className={`text-xs font-semibold ${
                m.locked ? 'text-muted' : 'text-blue'
              }`}
            >
              {m.locked ? '🔒 Locked' : '▶ Start here'}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <GettingStartedBanner />
      <LearningTracks />
      <QuickSimulator />
      <MilestonePath />
    </PageWrapper>
  );
}
