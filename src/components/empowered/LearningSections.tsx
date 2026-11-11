import { BookOpen, Compass, Sprout, ArrowUpRight, MessageCircle, Users, Video, type LucideIcon } from 'lucide-react';
import { Reveal, type OpenInterest } from './Brand';

const categories = [
  { Icon: BookOpen, title: 'Academic tutoring', description: 'Help learners build understanding, confidence, and a stronger foundation.', topics: ['Math & science', 'Languages', 'Test preparation'], color: 'bg-[#eeecfa]', ink: 'text-primary', number: '01' },
  { Icon: Sprout, title: 'Skill development', description: 'Turn your real-world experience into someone else’s next new skill.', topics: ['Coding & tech', 'Creative skills', 'Communication'], color: 'bg-[#edf1e8]', ink: 'text-[#425a33]', number: '02' },
  { Icon: Compass, title: 'Life & career coaching', description: 'Offer perspective and practical guidance for life’s next chapter.', topics: ['Career transitions', 'Leadership', 'Personal growth'], color: 'bg-[#fbefda]', ink: 'text-[#805820]', number: '03' },
];

function CategoryCard({ category, onJoin }: { category: typeof categories[number]; onJoin: OpenInterest }) {
  const { Icon } = category;
  return <article className={`group flex h-full flex-col rounded-[24px] border border-transparent p-7 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none ${category.color}`}>
    <div className="mb-9 flex items-center justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 ${category.ink}`}><Icon size={23} strokeWidth={1.5} /></span><span className="text-xs font-semibold text-muted-foreground">/{category.number}</span></div>
    <h3 className="text-[21px] font-extrabold tracking-[-0.035em]">{category.title}</h3>
    <p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>
    <div className="mb-7 flex flex-wrap gap-2">{category.topics.map(topic => <span key={topic} className="rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] font-semibold">{topic}</span>)}</div>
    <button className={`mt-auto flex min-h-10 items-center justify-between border-t border-foreground/10 pt-4 text-xs font-bold ${category.ink}`} onClick={() => onJoin('Coach or Mentor')}>Share your expertise <ArrowUpRight size={17} /></button>
  </article>;
}

export function Categories({ onJoin }: { onJoin: OpenInterest }) {
  return <section id="possibilities" className="section-space"><div className="container-page"><Reveal><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4">A place for your expertise</p><h2 className="section-title">Different paths.<br />The same possibility.</h2></div><p className="body-copy max-w-[330px]">Whatever you teach, there’s someone ready to take the next step.</p></div><div className="grid gap-5 md:grid-cols-3">{categories.map(category => <CategoryCard key={category.title} category={category} onJoin={onJoin} />)}</div></Reveal></div></section>;
}

function Step({ number, Icon, title, description }: { number: string; Icon: LucideIcon; title: string; description: string }) {
  return <article className="relative"><div className="mb-6 flex items-center gap-3"><span className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-white text-primary"><Icon size={23} strokeWidth={1.6} /></span><span className="text-[11px] font-bold tracking-wider text-muted-foreground">STEP {number}</span></div><h3 className="text-lg font-extrabold tracking-tight">{title}</h3><p className="mt-3 max-w-[300px] text-sm leading-7 text-muted-foreground">{description}</p></article>;
}

export function HowItWorks() {
  return <section id="how-it-works" className="border-y bg-white/60 section-space"><div className="container-page"><Reveal><div className="mb-12 grid gap-5 md:grid-cols-2"><div><p className="eyebrow mb-4">The connection, made simple</p><h2 className="section-title">Human guidance.<br />A clear next step.</h2></div><div className="md:pl-12"><p className="body-copy max-w-[390px]">Our vision: bring your expertise and a learner’s goals together, one conversation at a time.</p><p className="mt-4 text-xs text-muted-foreground">Planned experience · sessions are not available yet.</p></div></div><div className="grid gap-9 md:grid-cols-3 md:gap-12"><Step number="01" Icon={MessageCircle} title="Tell us what you do" description="Share your expertise as a mentor, or the goal you’re working toward as a learner." /><Step number="02" Icon={Users} title="Find the right connection" description="We’re building a space where the right knowledge meets the right ambition." /><Step number="03" Icon={Video} title="Make progress, one-on-one" description="The goal is personal online guidance that fits real lives and individual needs." /></div></Reveal></div></section>;
}
