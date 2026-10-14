'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Check, ChevronRight, House, MapPin, Menu, MessageCircle, Search, ShieldCheck, SlidersHorizontal, X, Mail, Phone, KeyRound } from 'lucide-react';

const PHONE = '966538938641';
const email = 'shibilikkm@gmail.com';
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const services = [
  { title: 'Properties for Sale', desc: 'Explore residential options based on your budget, preferred location and requirements.', image: '/assets/property-villa.webp', icon: House, action: 'Enquire about buying', message: 'I would like to enquire about buying a property in Jeddah.' },
  { title: 'Properties for Rent', desc: 'Find apartments, villas and other residential options that match your needs and timing.', image: '/assets/property-interior.webp', icon: KeyRound, action: 'Enquire about renting', message: 'I would like to enquire about renting a property in Jeddah.' },
  { title: 'Property Search Assistance', desc: 'Share your requirements and coordinate follow-up on relevant available listings through the agency.', image: 'assets/Coastal City Real Estate Consultation.png', icon: Search, action: 'Start your search', message: 'I would like help searching for a property in Jeddah.' },
];
const steps = [
  ['01','Understand Your Requirements','Tell me what you are looking for, your budget and preferred area.'],
  ['02','Identify Suitable Options','Review relevant available properties through the agency network.'],
  ['03','Coordinate with the Agency','Arrange follow-up and, where appropriate, viewing requests with the agency.'],
  ['04','Support the Next Steps','Stay informed as the agency guides you through the next steps.'],
];
function wa(message: string) { return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`; }
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', type: 'Apartment', purpose: 'Buy', area: '', budget: '', message: '' });
  const nav = [['Home','#home'],['Services','#services'],['How it works','#process'],['About','#about'],['Enquiry','#contact']];
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Property Enquiry\nName: ${form.name}\nPhone: ${form.phone}\nProperty type: ${form.type}\nPurpose: ${form.purpose}\nPreferred location: ${form.area || 'Not specified'}\nBudget (SAR): ${form.budget || 'Not specified'}\nMessage: ${form.message || 'Not specified'}`;
    window.open(wa(message), '_blank', 'noopener,noreferrer');
  }
  return <>
    <header className="header"><div className="wrap nav">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><Image src="/assets/logo.svg" alt="" width={46} height={46}/><span><b>MUHAMMED<br/>SHIBILI JASIR</b><small>PROPERTY CONSULTANT</small></span></a>
      <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#contact">Make an enquiry <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={16}/></a>)}</motion.nav>}</header>
    <main>
      <section className="hero" id="home"><div className="hero-image"/><div className="hero-shade"/><div className="wrap hero-inner">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .12, delayChildren: .1 } } }}>
          <motion.p className="eyebrow" variants={fadeUp}><span/> JEDDAH REAL ESTATE</motion.p>
          <motion.h1 variants={fadeUp}>Find Your Next<br/><em>Property in Jeddah.</em></motion.h1>
          <motion.h2 variants={fadeUp}>Property Sales &amp; Rentals Made Simpler</motion.h2>
          <motion.p className="hero-desc" variants={fadeUp}>Get assistance in finding suitable residential properties for sale or rent in Jeddah through a professional and organised enquiry process.</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}><a className="btn primary" href={wa('Hello Muhammed, I would like to enquire about a property in Jeddah.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Contact on WhatsApp <ArrowUpRight size={16}/></a><a className="btn secondary" href="#contact"><Mail size={17}/> Make an enquiry</a></motion.div>
          <motion.div className="hero-note" variants={fadeUp}><span><Check size={14}/></span> Residential sales <i/> Rentals <i/> Jeddah, Saudi Arabia</motion.div>
        </motion.div>
        <motion.div className="hero-stamp" initial={{ opacity: 0, scale: .85, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .65, duration: .7 }}><span className="stamp-icon"><House size={21}/></span><span><b>Find a place to call home</b><small>Personalised property enquiry support</small></span></motion.div>
      </div><a className="scroll-cue" href="#services" aria-label="Scroll to services"><ArrowDown size={17}/></a></section>

      <section className="section services" id="services"><div className="wrap"><Reveal className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2>How I Can Help</h2></div><p>Share your requirements and get assistance identifying suitable properties through the real estate agency network.</p></Reveal>
        <div className="service-grid">{services.map((s,i) => { const Icon=s.icon; return <Reveal key={s.title} delay={i*.1}><motion.article className="service-card" whileHover={{ y: -7 }} transition={{ duration: .25 }}><div className="service-image"><Image src={s.image} alt={s.title} fill sizes="(max-width: 680px) 100vw, 33vw"/><span className="service-icon"><Icon size={22}/></span></div><div className="service-body"><span className="card-number">0{i+1} / SERVICE</span><h3>{s.title}</h3><p>{s.desc}</p><a href={wa(`Hello Muhammed, ${s.message}`)} target="_blank" rel="noreferrer" className="text-link">{s.action}<ArrowUpRight size={16}/></a></div></motion.article></Reveal> })}</div>
      </div></section>

      <section className="process section" id="process"><div className="process-bg"/><div className="wrap process-inner"><Reveal className="section-head light"><div><p className="eyebrow">OUR PROCESS</p><h2>A Simple and<br/>Transparent Process</h2></div><p>Four straightforward steps to start your property enquiry, with clear communication at every stage.</p></Reveal><div className="steps">{steps.map(([num,title,desc],i)=><Reveal key={num} delay={i*.08}><div className="step"><span className="step-num">{num}</span><span className="step-icon">{[<MessageCircle key="a"/>,<Search key="b"/>,<SlidersHorizontal key="c"/>,<ShieldCheck key="d"/>][i]}</span><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></div></section>

      <section className="about section" id="about"><div className="wrap about-grid"><Reveal className="portrait-wrap"><div className="portrait-frame"><Image src="/assets/muhammed-shibili-jasir.png" alt="Portrait of Muhammed Shibili Jasir" fill sizes="(max-width: 680px) 280px, 320px"/></div><div className="portrait-caption"><span className="caption-mark"><House size={19}/></span><span><b>Muhammed Shibili Jasir</b><small>Property Consultant · Jeddah</small></span></div><div className="portrait-orbit"/></Reveal><Reveal className="about-copy" delay={.1}><p className="eyebrow">ABOUT ME</p><h2>Your Property Consultant<br/><em>in Jeddah</em></h2><p className="about-lead">I'm Muhammed Shibili Jasir. I help buyers and tenants begin their property search in Jeddah through clear communication, organised enquiries and a structured search process.</p><p className="muted">My approach is focused on understanding your requirements first, then coordinating relevant enquiries with the real estate agency.</p><div className="values"><div><MapPin/><b>Focused on Jeddah</b></div><div><MessageCircle/><b>Client-focused approach</b></div><div><Check/><b>Clear communication</b></div><div><SlidersHorizontal/><b>Organised process</b></div></div><a className="text-link about-link" href="#contact">Let’s discuss your requirements <ArrowUpRight size={16}/></a></Reveal></div></section>

      <section className="contact section" id="contact"><div className="wrap contact-grid"><Reveal className="contact-copy"><p className="eyebrow">GET IN TOUCH</p><h2>Start Your Property Search</h2><p>Tell me what you're looking for and I'll help coordinate your enquiry with the agency.</p><div className="contact-actions"><a className="btn primary" href={wa('Hello Muhammed, I would like to start a property search in Jeddah.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Chat on WhatsApp <ArrowUpRight size={16}/></a><a className="btn outline" href={`tel:+${PHONE}`}><Phone size={17}/><span>Call me<small>+966 53 893 8641</small></span></a></div><div className="contact-meta"><MapPin/><span>Jeddah, Saudi Arabia</span></div><div className="contact-meta"><Mail/><a href={`mailto:${email}`}>{email}</a></div></Reveal>
        <Reveal delay={.1}><form className="lead-form" onSubmit={submit}><div className="form-title"><span>PROPERTY ENQUIRY</span><h3>Tell me what you’re looking for.</h3><p>Share a few details to start your enquiry on WhatsApp.</p></div><div className="form-grid"><label>Name <b>*</b><input required autoComplete="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Phone number <b>*</b><input required type="tel" autoComplete="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+966..."/></label><label>Property type<select value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option>Apartment</option><option>Villa</option><option>Land</option><option>Commercial</option><option>Other / Not sure</option></select></label><label>Purpose<select value={form.purpose} onChange={e=>setForm({...form,purpose:e.target.value})}><option>Buy</option><option>Rent</option></select></label><label className="full">Preferred location<input value={form.area} onChange={e=>setForm({...form,area:e.target.value})} placeholder="e.g. North Jeddah, Al Salamah"/></label><label>Budget (SAR)<input value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} placeholder="e.g. 500,000"/></label><label>Message (optional)<input value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your requirements"/></label></div><p className="form-note">Your details will be included in a WhatsApp message to help respond to your enquiry. Avoid sharing sensitive financial information.</p><button className="btn primary submit" type="submit"><MessageCircle size={18}/> Send enquiry on WhatsApp <ArrowUpRight size={16}/></button></form></Reveal>
      </div></section>
    </main>
    <footer className="footer"><div className="wrap footer-main"><a className="brand footer-brand" href="#home"><Image src="/assets/logo-light.svg" alt="" width={46} height={46}/><span><b>MUHAMMED<br/>SHIBILI JASIR</b><small>PROPERTY CONSULTANT</small></span></a><div className="footer-col"><a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"><MessageCircle/> +966 53 893 8641</a><a href={`mailto:${email}`}><Mail/> {email}</a></div><div className="footer-col"><b>Jeddah, Saudi Arabia</b><span>Property sales &amp; rental enquiries</span></div><div className="footer-col quick"><b>Quick Links</b>{nav.filter(([label])=>label!=='How it works').map(([label,href])=><a key={label} href={href}>{label}</a>)}</div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Muhammed Shibili Jasir. All rights reserved.</span><span>Property enquiries are coordinated through the relevant real estate agency. Listings, prices and transactions are subject to agency confirmation and applicable Saudi regulations.</span></div></footer>
    <motion.a className="floating-wa" href={wa('Hello Muhammed, I would like to enquire about a property in Jeddah.')} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring' }} whileHover={{ scale: 1.08 }}><MessageCircle size={24}/></motion.a>
  </>;
}
