import { useEffect, useRef, type ReactNode } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export type InterestRole = 'Learner' | 'Coach or Mentor';
export type OpenInterest = (role?: InterestRole, email?: string) => void;

export function Wordmark({ light = false }: { light?: boolean }) {
  return <a href="#home" aria-label="EmpowerEd Learnings home" className="inline-flex items-center gap-2.5">
    <span className={`relative flex h-10 w-10 items-center justify-center rounded-xl ${light ? 'bg-white/15 text-white' : 'bg-primary text-white'}`}><BookOpen size={22} strokeWidth={1.8} /><span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[var(--amber)] ring-2 ring-background" /></span>
    <span className="flex flex-col"><span className={`text-[23px] font-extrabold leading-none tracking-[-0.055em] ${light ? 'text-white' : 'text-[var(--ink)]'}`}>Empower<span className={light ? 'text-[#f4cf80]' : 'text-primary'}>Ed</span></span><span className={`mt-1 text-[9px] font-bold uppercase tracking-[0.24em] ${light ? 'text-indigo-100' : 'text-muted-foreground'}`}>Learnings</span></span>
  </a>;
}

export function Portrait({ index, className = '', label }: { index: number; className?: string; label?: string }) {
  return <div role={label ? 'img' : undefined} aria-label={label} aria-hidden={!label} className={`portrait aspect-square ${className}`} style={{ backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%` }} />;
}

export function JoinButton({ onJoin, role = 'Coach or Mentor', children = 'Join the waitlist', className = '' }: { onJoin: OpenInterest; role?: InterestRole; children?: ReactNode; className?: string }) {
  return <button className={`primary-button ${className}`} onClick={() => onJoin(role)}>{children}<ArrowUpRight size={17} aria-hidden="true" /></button>;
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    node.classList.add('reveal-pending');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.remove('reveal-pending'); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
