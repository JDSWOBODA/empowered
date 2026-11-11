import { useState } from 'react';
import Header from '@/components/empowered/Header';
import Hero from '@/components/empowered/Hero';
import { Categories, HowItWorks } from '@/components/empowered/LearningSections';
import { Mentors, WhyEmpowerEd, Testimonials, MentorCTA } from '@/components/empowered/MentorSections';
import { FAQ, FinalCTA, Footer } from '@/components/empowered/ClosingSections';
import InterestForm from '@/components/empowered/InterestForm';
import type { InterestRole } from '@/components/empowered/Brand';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ role: 'Coach or Mentor' as InterestRole, email: '', session: 0 });
  function openInterest(role: InterestRole = 'Coach or Mentor', email = '') {
    setForm(previous => ({ role, email, session: previous.session + 1 }));
    setOpen(true);
  }
  return <>
    <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-full bg-primary px-5 py-3 text-white focus:not-sr-only">Skip to content</a>
    <Header onJoin={openInterest} />
    <main id="main-content">
      <Hero onJoin={openInterest} />
      <Categories onJoin={openInterest} />
      <HowItWorks />
      <Mentors onJoin={openInterest} />
      <WhyEmpowerEd />
      <Testimonials />
      <MentorCTA onJoin={openInterest} />
      <FAQ onJoin={openInterest} />
      <FinalCTA onJoin={openInterest} />
    </main>
    <Footer />
    <InterestForm key={form.session} open={open} onOpenChange={setOpen} initialRole={form.role} initialEmail={form.email} />
  </>;
}
