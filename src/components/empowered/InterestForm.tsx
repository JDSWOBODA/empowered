import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { InterestRole } from './Brand';

export default function InterestForm({ open, onOpenChange, initialRole, initialEmail }: { open: boolean; onOpenChange: (open: boolean) => void; initialRole: InterestRole; initialEmail: string }) {
  const [role, setRole] = useState<InterestRole>(initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) { setError('Please enter your name.'); return; }
    setError('');
    // FORM SERVICE INTEGRATION POINT: connect a form provider here before collecting
    // real submissions. This static demo does not transmit or persist personal data.
    setSuccess(true);
  }

  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-[470px] overflow-y-auto rounded-[24px] border bg-background p-7 sm:rounded-[24px] sm:p-9">
    {success ? <><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary"><Check size={27} /></span><DialogTitle className="mt-2 text-2xl font-extrabold tracking-tight">You’re ready for the next step.</DialogTitle><DialogDescription className="text-sm leading-7">Your form passed validation. This is a demo: your details have not been saved or sent, and you haven’t been added to a waitlist.</DialogDescription><p className="rounded-xl border bg-white p-4 text-xs leading-6 text-muted-foreground">A form service must be connected before EmpowerEd can accept interest submissions.</p><button className="primary-button mt-2 w-full" onClick={() => onOpenChange(false)}>Back to exploring <ArrowUpRight size={17} /></button></> : <><span className="mb-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary"><Mail size={23} /></span><DialogTitle className="text-[28px] font-extrabold tracking-[-0.04em]">A little interest. A big possibility.</DialogTitle><DialogDescription className="text-sm leading-6">Tell us how you’d like to be part of EmpowerEd.</DialogDescription><form onSubmit={submit} className="mt-2 space-y-5"><div className="space-y-2"><Label htmlFor="interest-name" className="text-xs font-bold">Your name</Label><Input id="interest-name" autoComplete="name" placeholder="Full name" required maxLength={100} value={name} onChange={e => { setName(e.target.value); setError(''); }} aria-invalid={!!error} aria-describedby={error ? 'name-error' : undefined} className="h-12 rounded-xl bg-white px-4 text-sm" />{error && <p id="name-error" className="text-xs text-destructive" role="alert">{error}</p>}</div><div className="space-y-2"><Label htmlFor="interest-email" className="text-xs font-bold">Email address</Label><Input id="interest-email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} className="h-12 rounded-xl bg-white px-4 text-sm" /></div><fieldset><legend className="mb-3 text-xs font-bold">I’m a…</legend><div className="grid grid-cols-2 gap-3">{(['Learner', 'Coach or Mentor'] as const).map(option => <label key={option} className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-xs font-semibold ${role === option ? 'border-primary bg-secondary text-primary' : 'bg-white'}`}><input type="radio" name="interest-role" value={option} checked={role === option} onChange={() => setRole(option)} className="h-4 w-4 accent-[var(--brand)]" />{option}</label>)}</div></fieldset><button type="submit" className="primary-button w-full">Join the waitlist <ArrowUpRight size={17} /></button><p className="text-[11px] leading-5 text-muted-foreground">Demo form only. No data is sent or stored, and submitting will not register you. A form service will be connected before launch.</p></form></>}
  </DialogContent></Dialog>;
}
