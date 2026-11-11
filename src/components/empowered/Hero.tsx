import { ArrowRight, Sparkles, BookOpen, Sprout, Compass, MoveUpRight } from 'lucide-react';
import { JoinButton, Portrait, type OpenInterest } from './Brand';

export default function Hero({ onJoin }: { onJoin: OpenInterest }) {
  return <section id="home" className="overflow-hidden">
    <div className="container-page grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-20 lg:pt-24">
      <div className="hero-enter relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary px-3.5 py-2 text-[11px] font-bold text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> BIG POSSIBILITIES. HUMAN CONNECTIONS.</div>
        <h1 className="max-w-[610px] text-[40px] font-extrabold leading-[1.1] tracking-[-0.055em] sm:text-[54px] lg:text-[64px]">Your expertise.<br />Their breakthrough.<br /><span className="relative inline-block text-primary">More possibilities.<svg aria-hidden="true" viewBox="0 0 450 18" className="absolute -bottom-3 left-0 h-4 w-full" fill="none"><path d="M3 12C103 1 252 0 447 8" stroke="var(--amber)" strokeWidth="6" strokeLinecap="round" /></svg></span></h1>
        <p className="body-copy mb-8 mt-9 max-w-[450px]">A new home for independent tutors, coaches, and mentors. Share what you know. Connect with learners. Grow on your terms.</p>
        <div className="flex flex-wrap items-center gap-5"><JoinButton onJoin={onJoin}>Join as a founding mentor</JoinButton><button className="inline-flex min-h-12 items-center gap-2 text-sm font-bold hover:text-primary" onClick={() => onJoin('Learner')}>Here to learn? <ArrowRight size={16} /></button></div>
        <div className="mt-7 flex items-center gap-2 text-xs text-muted-foreground"><Sparkles size={15} className="text-primary" /><span>Learn anything. Succeed everywhere.</span></div>
      </div>
      <div className="hero-art relative mx-auto w-full max-w-[490px] py-5 lg:py-0">
        <div aria-hidden="true" className="absolute inset-x-5 inset-y-10 rounded-[48%] bg-[#eeecf6]" />
        <svg aria-hidden="true" viewBox="0 0 80 80" className="absolute -right-2 -top-1 h-16 w-16 text-[var(--amber)]" fill="none"><path d="M40 4v72M4 40h72M14 14l52 52M14 66l52-52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
        <div className="relative grid grid-cols-[1.08fr_0.9fr] items-center gap-4 sm:gap-5">
          <div className="relative mt-7 -rotate-[4deg] rounded-[22px] bg-white p-2.5 pb-3 shadow-[0_10px_35px_-15px_rgba(49,39,143,0.25)] transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none">
            <Portrait index={0} label="Illustrative portrait of a tutor" className="rounded-[16px]" />
            <div className="px-2 pt-3"><p className="text-sm font-extrabold">[Maya R.]</p><p className="mt-1 text-[11px] text-muted-foreground">Making learning click.</p><span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[9px] font-bold text-primary"><BookOpen size={11} /> Academic tutoring</span></div>
          </div>
          <div className="space-y-5">
            <div className="relative rotate-[5deg] rounded-[22px] bg-white p-2 pb-3 shadow-[0_10px_35px_-15px_rgba(49,39,143,0.2)] transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none"><Portrait index={1} label="Illustrative portrait of a skill coach" className="rounded-[16px]" /><div className="px-2 pt-2"><p className="text-xs font-extrabold">[Jordan A.]</p><span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#edf2e8] px-2 py-1 text-[9px] font-bold text-[#425a33]"><Sprout size={10} /> Skill development</span></div></div>
            <div className="relative -rotate-[3deg] rounded-[22px] bg-white p-2 pb-3 shadow-[0_10px_35px_-15px_rgba(49,39,143,0.2)] transition-transform duration-300 hover:rotate-0 motion-reduce:transition-none"><Portrait index={2} label="Illustrative portrait of a career mentor" className="rounded-[16px]" /><div className="px-2 pt-2"><p className="text-xs font-extrabold">[Elena K.]</p><span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#fbefda] px-2 py-1 text-[9px] font-bold text-[#805820]"><Compass size={10} /> Life & career</span></div></div>
          </div>
        </div>
        <div className="absolute -left-2 bottom-12 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-sm sm:-left-7"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2d8] text-[#8d611c]"><MoveUpRight size={18} /></span><div><p className="text-xs font-extrabold">Small conversations.</p><p className="mt-0.5 text-[10px] text-muted-foreground">Big steps forward.</p></div></div>
        <p className="relative mt-5 text-right text-[10px] text-muted-foreground">Illustrative portraits · sample profiles</p>
      </div>
    </div>
    <div className="border-y bg-white/50"><div className="container-page flex flex-wrap items-center justify-center gap-x-9 gap-y-4 py-6 sm:justify-between"><p className="text-xs font-medium text-muted-foreground">One mission. Many ways to grow.</p>{[{ Icon: BookOpen, label: 'Academic tutoring' }, { Icon: Sprout, label: 'Skill development' }, { Icon: Compass, label: 'Life & career coaching' }].map(({ Icon, label }) => <span key={label} className="flex items-center gap-2.5 text-xs font-bold"><Icon size={17} strokeWidth={1.5} className="text-primary" />{label}</span>)}</div></div>
  </section>;
}
