import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Wordmark, JoinButton, type OpenInterest } from './Brand';

const links = [{ label: 'How it works', href: '#how-it-works' }, { label: 'Coaches', href: '#coaches' }, { label: 'For Mentors', href: '#for-mentors' }, { label: 'FAQ', href: '#faq' }];

export default function Header({ onJoin }: { onJoin: OpenInterest }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
    <div className="container-page flex h-[88px] items-center justify-between gap-5">
      <Wordmark />
      <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{links.map(link => <a key={link.href} href={link.href} className="text-[13px] font-semibold text-muted-foreground transition-colors hover:text-primary">{link.label}</a>)}</nav>
      <div className="flex items-center gap-3"><JoinButton onJoin={onJoin} className="hidden sm:inline-flex" /><button className="flex h-11 w-11 items-center justify-center rounded-full border lg:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
    </div>
    {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container-page flex flex-col gap-5 border-t pb-6 pt-5 lg:hidden">{links.map(link => <a key={link.href} href={link.href} className="font-semibold" onClick={() => setMenuOpen(false)}>{link.label}</a>)}<JoinButton onJoin={(role) => { setMenuOpen(false); onJoin(role); }} /></nav>}
  </header>;
}
