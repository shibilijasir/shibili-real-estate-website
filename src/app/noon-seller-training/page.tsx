'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, ClipboardList, Package, Store, TrendingUp } from 'lucide-react';

const WHATSAPP_NUMBER = '966538938641';

const modules = [
  {
    number: '01',
    icon: Store,
    title: 'Seller account setup',
    description: 'Understand the seller registration journey, account requirements, and the information to prepare before applying.',
    topics: ['Registration overview', 'Seller and business details', 'Document checklist'],
  },
  {
    number: '02',
    icon: Package,
    title: 'Product listing',
    description: 'Learn how to prepare clear, complete product listings that are easier for shoppers to understand.',
    topics: ['Product titles and descriptions', 'SKU and product attributes', 'Images, variations, and catalog checks'],
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Orders and operations',
    description: 'Get familiar with day-to-day seller workflows and the checks that help keep orders organised.',
    topics: ['Order workflow overview', 'Inventory and stock checks', 'Returns and seller performance basics'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimisation and growth',
    description: 'Learn practical ways to review listing quality and monitor store performance over time.',
    topics: ['Listing quality review', 'Sales and performance reports', 'Common issues and troubleshooting'],
  },
];

function makeWhatsAppLink() {
  const message = 'Hello, I am interested in Noon Seller Account Training. Please share the syllabus, format, duration, and fees.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function NoonSellerTrainingPage() {
  return (
    <>
      <style jsx global>{`
        .noon-training-page {
          --nt-ink: #14201d;
          --nt-muted: #64716c;
          --nt-green: #087f5b;
          --nt-green-dark: #075e45;
          --nt-line: #e2e9e5;
          color: var(--nt-ink);
          background: #f7faf8;
          min-height: 100vh;
        }
        .noon-training-page * { box-sizing: border-box; }
        .nt-wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .nt-topbar { height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .nt-back { color: var(--nt-ink); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 650; }
        .nt-brand { display: flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: -.03em; }
        .nt-brand-mark { width: 38px; height: 38px; border-radius: 12px; background: var(--nt-green); color: white; display: grid; place-items: center; }
        .nt-brand small { display: block; color: var(--nt-muted); font-size: 10px; font-weight: 700; letter-spacing: .13em; margin-top: 3px; }
        .nt-button { display: inline-flex; justify-content: center; align-items: center; gap: 9px; border-radius: 999px; padding: 13px 19px; background: var(--nt-green); color: white; font-weight: 750; text-decoration: none; border: 1px solid var(--nt-green); transition: background .2s ease, transform .2s ease; }
        .nt-button:hover { background: var(--nt-green-dark); transform: translateY(-1px); }
        .nt-button.secondary { background: transparent; color: var(--nt-ink); border-color: #cbd8d1; }
        .nt-hero { padding: 68px 0 76px; background: radial-gradient(circle at 86% 15%, rgba(8,127,91,.12), transparent 28%), linear-gradient(135deg,#f7faf8 0%,#edf6f1 100%); border-bottom: 1px solid var(--nt-line); }
        .nt-eyebrow { color: var(--nt-green); font-size: 11px; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; margin: 0 0 18px; }
        .nt-hero-grid { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(280px,.8fr); align-items: center; gap: 52px; }
        .nt-hero h1 { font-size: clamp(38px,5.4vw,66px); line-height: 1.04; letter-spacing: -.055em; max-width: 720px; margin: 0; }
        .nt-hero h1 em { color: var(--nt-green); font-style: normal; }
        .nt-lead { color: var(--nt-muted); font-size: 17px; line-height: 1.8; max-width: 630px; margin: 22px 0 28px; }
        .nt-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .nt-proof { display: flex; flex-wrap: wrap; gap: 15px 22px; color: #53625b; font-size: 13px; margin-top: 28px; }
        .nt-proof span { display: inline-flex; align-items: center; gap: 7px; }
        .nt-hero-card { background: white; border: 1px solid var(--nt-line); border-radius: 24px; padding: 28px; box-shadow: 0 24px 70px rgba(22,54,41,.08); }
        .nt-card-icon { width: 52px; height: 52px; display: grid; place-items: center; border-radius: 16px; background: #e7f5ee; color: var(--nt-green); }
        .nt-hero-card h2 { font-size: 23px; letter-spacing: -.035em; margin: 20px 0 8px; }
        .nt-hero-card p { color: var(--nt-muted); line-height: 1.7; font-size: 14px; margin: 0 0 18px; }
        .nt-mini-list { display: grid; gap: 12px; padding: 0; margin: 0; list-style: none; }
        .nt-mini-list li { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; line-height: 1.5; }
        .nt-mini-list svg { flex: 0 0 auto; color: var(--nt-green); margin-top: 1px; }
        .nt-section { padding: 76px 0; }
        .nt-section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 30px; }
        .nt-section-heading h2 { font-size: clamp(29px,3.5vw,42px); letter-spacing: -.045em; line-height: 1.1; margin: 0; }
        .nt-section-heading p { color: var(--nt-muted); line-height: 1.7; max-width: 460px; margin: 0; }
        .nt-modules { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; }
        .nt-module { padding: 26px; border: 1px solid var(--nt-line); border-radius: 20px; background: white; }
        .nt-module-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .nt-module-number { color: #95a69d; font-size: 12px; font-weight: 800; letter-spacing: .12em; }
        .nt-module h3 { font-size: 21px; letter-spacing: -.03em; margin: 19px 0 9px; }
        .nt-module p { color: var(--nt-muted); font-size: 14px; line-height: 1.7; margin: 0 0 18px; }
        .nt-module .nt-mini-list { gap: 9px; }
        .nt-module .nt-mini-list li { font-size: 13px; color: #3d4c45; }
        .nt-note { margin-top: 20px; padding: 15px 17px; background: #eef5f1; border-radius: 14px; color: #52635a; font-size: 13px; line-height: 1.65; }
        .nt-cta { background: #11251e; color: white; border-radius: 26px; padding: 42px; display: flex; align-items: center; justify-content: space-between; gap: 30px; }
        .nt-cta h2 { font-size: clamp(27px,3.6vw,40px); line-height: 1.12; letter-spacing: -.045em; margin: 0 0 12px; }
        .nt-cta p { color: #c1d0c8; max-width: 600px; line-height: 1.7; margin: 0; }
        .nt-cta .nt-button { flex: 0 0 auto; background: #fff; border-color: #fff; color: #11251e; }
        .nt-cta .nt-button:hover { background: #eaf5ef; }
        .nt-footer { border-top: 1px solid var(--nt-line); padding: 24px 0; color: var(--nt-muted); font-size: 12px; }
        @media (max-width: 760px) {
          .nt-wrap { width: min(100% - 30px, 600px); }
          .nt-topbar { height: 66px; }
          .nt-topbar > .nt-button { padding: 10px 13px; font-size: 12px; }
          .nt-hero { padding: 48px 0 52px; }
          .nt-hero-grid { grid-template-columns: 1fr; gap: 30px; }
          .nt-hero-card { padding: 23px; }
          .nt-section { padding: 54px 0; }
          .nt-section-heading { display: block; }
          .nt-section-heading p { margin-top: 14px; }
          .nt-modules { grid-template-columns: 1fr; }
          .nt-cta { display: block; padding: 28px 23px; }
          .nt-cta .nt-button { margin-top: 22px; }
        }
      `}</style>

      <div className="noon-training-page">
        <header className="nt-wrap nt-topbar">
          <Link href="/" className="nt-back"><ArrowLeft size={16} /> Back to main website</Link>
          <a className="nt-button" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">
            Ask about training <ArrowUpRight size={16} />
          </a>
        </header>

        <main>
          <section className="nt-hero">
            <div className="nt-wrap nt-hero-grid">
              <div>
                <p className="nt-eyebrow">Marketplace skills · Saudi Arabia</p>
                <h1>Learn to manage a <em>Noon Seller Account.</em></h1>
                <p className="nt-lead">
                  Practical training for beginners who want to understand seller registration, product listing, order workflows, and day-to-day marketplace operations on Noon.
                </p>
                <div className="nt-hero-actions">
                  <a className="nt-button" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp <ArrowUpRight size={17} />
                  </a>
                  <a className="nt-button secondary" href="#curriculum">
                    View training modules <BookOpen size={17} />
                  </a>
                </div>
                <div className="nt-proof">
                  <span><CheckCircle2 size={16} /> Beginner-friendly outline</span>
                  <span><CheckCircle2 size={16} /> Practical marketplace workflows</span>
                </div>
              </div>

              <aside className="nt-hero-card">
                <div className="nt-card-icon"><Store size={25} /></div>
                <h2>What you’ll learn</h2>
                <p>A structured introduction to the core tasks involved in operating a Noon seller account.</p>
                <ul className="nt-mini-list">
                  <li><CheckCircle2 size={17} /> Understand account setup and requirements</li>
                  <li><CheckCircle2 size={17} /> Prepare product information for listings</li>
                  <li><CheckCircle2 size={17} /> Follow stock and order workflows</li>
                  <li><CheckCircle2 size={17} /> Review listing quality and store performance</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="nt-section" id="curriculum">
            <div className="nt-wrap">
              <div className="nt-section-heading">
                <div>
                  <p className="nt-eyebrow">Training outline</p>
                  <h2>From setup to store operations</h2>
                </div>
                <p>Use this outline as a starting point. Exact session content can be tailored to your experience level and the seller account’s needs.</p>
              </div>

              <div className="nt-modules">
                {modules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <article className="nt-module" key={module.number}>
                      <div className="nt-module-top">
                        <div className="nt-card-icon"><Icon size={23} /></div>
                        <span className="nt-module-number">MODULE {module.number}</span>
                      </div>
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                      <ul className="nt-mini-list">
                        {module.topics.map((topic) => (
                          <li key={topic}><CheckCircle2 size={16} /> {topic}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>

              <p className="nt-note">
                Training scope, duration, delivery format, and fees should be confirmed before booking. Account approval and marketplace policies are controlled by Noon; training cannot guarantee seller approval or sales results.
              </p>
            </div>
          </section>

          <section className="nt-wrap" style={{ paddingBottom: 76 }}>
            <div className="nt-cta">
              <div>
                <h2>Want to learn Noon seller operations?</h2>
                <p>Message to request the detailed syllabus, training format, duration, and fees before you decide.</p>
              </div>
              <a className="nt-button" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">
                Request details <ArrowUpRight size={17} />
              </a>
            </div>
          </section>
        </main>

        <footer className="nt-footer">
          <div className="nt-wrap">Noon Seller Account Training · Independent training page · Noon is a third-party marketplace.</div>
        </footer>
      </div>
    </>
  );
}
