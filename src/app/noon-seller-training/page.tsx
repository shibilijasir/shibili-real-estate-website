'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, FileSpreadsheet, Image as ImageIcon, Laptop, MessageCircle, Package, Store, TrendingUp, Video } from 'lucide-react';

const WHATSAPP_NUMBER = '966538938641';
const whatsapp = () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I am interested in the Noon Seller Lab Live Training & Practical Internship Program. Please share enrolment details.')}`;

const modules = [
  { n: '01', title: 'Noon Seller Lab Fundamentals', icon: Store, items: ['Seller Lab dashboard and navigation', 'Product catalog and SKU management', 'Categories, product IDs and attributes'] },
  { n: '02', title: 'Single Product Listing', icon: Package, items: ['Add Product workflow', 'Product titles, descriptions and specifications', 'Product information and listing quality checks'] },
  { n: '03', title: 'AI-Powered E-commerce Content', icon: ImageIcon, items: ['Generate titles and descriptions using ChatGPT', 'Create structured product specifications', 'Develop image concepts and prompts', 'Generate and review AI-assisted product visuals'] },
  { n: '04', title: 'Bulk Product Listing', icon: FileSpreadsheet, items: ['Bulk listing templates and spreadsheet preparation', 'AI-assisted content for multiple products', 'Excel-based catalog management', 'Imports, exports and listing error checks'] },
  { n: '05', title: 'Noon Fulfillment Operations', icon: Laptop, items: ['FBN (Fulfilled by noon)', 'FBP (Fulfilled by Partner)', 'Inventory and order processing', 'Returns and fulfillment workflows'] },
  { n: '06', title: 'Finance & Seller Performance', icon: TrendingUp, items: ['Marketplace fees and profitability calculations', 'Statements and transaction reports', 'Advertising and promotions overview', 'Seller performance and inventory health'] },
];

const highlights = [
  { icon: CalendarDays, title: '4-Week Program', text: 'A structured learning journey' },
  { icon: Video, title: '9 Live Sessions', text: 'One hour per live class' },
  { icon: FileSpreadsheet, title: 'Practical Assignments', text: 'Dedicated practice week and trainer feedback' },
  { icon: ImageIcon, title: 'AI-Powered Workflow', text: 'ChatGPT product content and image creation' },
];

const fadeUp = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function NoonSellerTrainingPage() {
  return (
    <>
      <style jsx global>{`
        .noon-page{--yellow:#ffe800;--ink:#171717;--muted:#656565;--line:#e8e5d8;background:#fffef8;color:var(--ink);min-height:100vh;font-family:Arial,Helvetica,sans-serif}
        .noon-page *{box-sizing:border-box}.noon-wrap{width:min(1160px,calc(100% - 40px));margin:auto}
        .noon-header{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--line)}
        .noon-brand{display:flex;align-items:center;gap:10px;color:var(--ink);text-decoration:none;font-weight:900}
        .noon-mark{width:43px;height:43px;border-radius:50%;display:grid;place-items:center;background:var(--yellow);font-size:25px;letter-spacing:-.1em;border:1px solid #e2d000}
        .noon-brand-name{font-size:25px;line-height:1;letter-spacing:-.07em}.noon-brand small{display:block;font-size:9px;letter-spacing:.13em;margin-top:5px;color:#625b00}
        .noon-back{display:flex;align-items:center;gap:7px;color:var(--ink);font-size:13px;text-decoration:none;font-weight:700}
        .noon-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--yellow);border:1px solid var(--ink);border-radius:999px;padding:13px 19px;color:var(--ink);font-size:13px;font-weight:850;text-decoration:none;transition:transform .2s}
        .noon-btn:hover{transform:translateY(-2px)}.noon-btn.dark{background:var(--ink);color:white}
        .noon-hero{background:var(--yellow);position:relative;overflow:hidden;border-bottom:1px solid #e1d000}
        .noon-hero:after{content:'noon';position:absolute;right:-20px;bottom:-80px;font-size:clamp(180px,28vw,350px);font-weight:950;letter-spacing:-.1em;line-height:.8;color:rgba(0,0,0,.05);pointer-events:none}
        .noon-hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center;padding-top:70px;padding-bottom:74px}
        .noon-kicker{display:inline-flex;align-items:center;gap:8px;border:1px solid #b5a700;border-radius:99px;background:#fff9b6;padding:8px 12px;font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;margin:0 0 22px}
        .noon-kicker i{width:7px;height:7px;background:var(--ink);border-radius:50%}
        .noon-hero h1{font-size:clamp(42px,5.5vw,72px);line-height:.99;letter-spacing:-.065em;margin:0;font-weight:950;max-width:720px}
        .noon-hero h1 span{text-decoration:underline;text-decoration-thickness:5px;text-underline-offset:8px}
        .noon-lead{font-size:16px;line-height:1.8;color:#38341d;max-width:620px;margin:23px 0 28px}
        .noon-actions{display:flex;flex-wrap:wrap;gap:11px}.noon-actions .noon-btn:not(.dark){background:#fffdf0}
        .noon-proof{display:flex;flex-wrap:wrap;gap:12px 18px;margin-top:25px;font-size:12px;font-weight:750}.noon-proof span{display:flex;align-items:center;gap:6px}.noon-proof svg{width:15px;height:15px}
        .noon-price-card{background:#fffdf4;border:1px solid #d6cf85;border-radius:24px;padding:27px;box-shadow:8px 8px 0 #00000018;transform:rotate(1deg)}
        .noon-card-top{display:flex;align-items:center;justify-content:space-between;gap:12px}.noon-card-icon{width:49px;height:49px;border-radius:14px;background:var(--yellow);display:grid;place-items:center}
        .noon-badge{background:var(--ink);color:white;border-radius:99px;padding:8px 10px;font-size:9px;font-weight:900;letter-spacing:.08em}
        .noon-price-card h2{font-size:25px;letter-spacing:-.04em;margin:22px 0 8px}.noon-price-card>p{font-size:13px;line-height:1.7;color:var(--muted);margin:0 0 18px}
        .noon-checks{list-style:none;margin:0;padding:0;display:grid;gap:11px}.noon-checks li{display:flex;gap:9px;font-size:13px;line-height:1.5}.noon-checks svg{flex:0 0 auto;color:#766b00}
        .noon-price-row{display:flex;align-items:end;justify-content:space-between;gap:12px;border-top:1px solid var(--line);padding-top:18px;margin-top:20px}
        .noon-price{font-size:38px;line-height:1;font-weight:950;letter-spacing:-.06em}.noon-price small{display:block;font-size:11px;letter-spacing:0;color:var(--muted);margin-top:7px}
        .noon-price-meta{text-align:right;color:var(--muted);font-size:11px;line-height:1.6}
        .noon-section{padding:76px 0}.noon-section-head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:30px}
        .noon-overline{font-size:10px;text-transform:uppercase;letter-spacing:.15em;font-weight:950;color:#756900;margin:0 0 13px}
        .noon-section h2{font-size:clamp(30px,4vw,44px);line-height:1.06;letter-spacing:-.055em;margin:0;font-weight:950}
        .noon-section-head>p{max-width:480px;color:var(--muted);font-size:14px;line-height:1.8;margin:0}
        .noon-highlights{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px}.noon-highlight{background:white;border:1px solid var(--line);border-radius:17px;padding:21px}
        .noon-highlight-icon{width:42px;height:42px;display:grid;place-items:center;background:var(--yellow);border-radius:13px;margin-bottom:18px}
        .noon-highlight h3{font-size:16px;letter-spacing:-.03em;margin:0 0 7px}.noon-highlight p{font-size:12px;line-height:1.6;color:var(--muted);margin:0}
        .noon-curriculum{background:#f6f4e9}.noon-modules{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
        .noon-module{background:white;border:1px solid #e7e2cc;border-radius:20px;padding:25px}.noon-module-top{display:flex;align-items:center;justify-content:space-between}
        .noon-module-icon{width:46px;height:46px;border-radius:14px;background:var(--yellow);display:grid;place-items:center}.noon-module-num{font-size:10px;font-weight:950;letter-spacing:.13em;color:#817800}
        .noon-module h3{font-size:20px;letter-spacing:-.04em;margin:18px 0 15px}
        .noon-module .noon-checks{gap:10px}.noon-module .noon-checks li{font-size:13px;color:#48473e}
        .noon-journey{display:grid;grid-template-columns:1fr 1fr;gap:16px}.noon-week{border:1px solid var(--line);background:white;border-radius:20px;padding:27px}
        .noon-week.featured{background:var(--yellow);border-color:#dfce00}.noon-week-label{font-size:10px;font-weight:950;text-transform:uppercase;letter-spacing:.12em}
        .noon-week h3{font-size:24px;letter-spacing:-.04em;margin:13px 0 10px}.noon-week p{font-size:13px;line-height:1.75;color:#565448;margin:0 0 17px}
        .noon-week ul{padding-left:19px;margin:0;display:grid;gap:9px;font-size:13px;line-height:1.55}
        .noon-details{background:var(--ink);color:white}.noon-details .noon-overline{color:var(--yellow)}.noon-details .noon-section-head>p{color:#c6c6c6}
        .noon-detail-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.noon-detail{padding:19px;border:1px solid #393939;background:#202020;border-radius:15px}
        .noon-detail span{display:block;color:#bdbdbd;font-size:11px;margin-bottom:8px}.noon-detail strong{font-size:16px}
        .noon-audience{display:grid;grid-template-columns:.85fr 1.15fr;gap:42px;align-items:start}.noon-muted{font-size:14px;line-height:1.8;color:var(--muted)}
        .noon-audience-list{display:grid;grid-template-columns:1fr 1fr;gap:12px}.noon-audience-item{display:flex;align-items:flex-start;gap:9px;padding:15px;border:1px solid var(--line);border-radius:14px;background:white;font-size:13px;line-height:1.5}
        .noon-audience-item svg{flex:0 0 auto}
        .noon-cta{background:var(--yellow);border:1px solid #e0d000;border-radius:23px;padding:38px;display:flex;align-items:center;justify-content:space-between;gap:25px}
        .noon-cta h2{font-size:clamp(29px,4vw,43px);line-height:1.04;letter-spacing:-.055em;margin:0 0 12px;max-width:650px}
        .noon-cta p{font-size:14px;line-height:1.75;color:#4b472b;margin:0;max-width:630px}.noon-cta .noon-btn{flex:0 0 auto}
        .noon-disclaimer{font-size:11px;line-height:1.8;color:var(--muted);margin-top:18px}
        .noon-footer{border-top:1px solid var(--line);padding:23px 0;font-size:11px;color:var(--muted)}.noon-footer-inner{display:flex;justify-content:space-between;gap:18px}
        .noon-outcome-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px}.noon-outcome{padding:22px;border-radius:17px;border:1px solid var(--line);background:#fff}.noon-outcome>span{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--yellow);font-size:11px;font-weight:950}.noon-outcome h3{font-size:16px;letter-spacing:-.03em;margin:17px 0 8px}.noon-outcome p{font-size:12px;line-height:1.75;color:var(--muted);margin:0}.noon-process{background:#f6f4e9}.noon-process-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:start}.noon-process-steps{display:grid;gap:11px}.noon-process-steps>div{display:flex;align-items:flex-start;gap:14px;padding:17px;border:1px solid #e4dfc9;border-radius:15px;background:#fff}.noon-process-steps b{width:34px;height:34px;flex:0 0 auto;border-radius:50%;background:var(--yellow);display:grid;place-items:center}.noon-process-steps strong{display:block;font-size:14px;margin:2px 0 5px}.noon-process-steps small{display:block;font-size:12px;color:var(--muted);line-height:1.6}
        @media(max-width:850px){.noon-outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.noon-process-grid{grid-template-columns:1fr;gap:25px}.noon-hero-grid{grid-template-columns:1fr;gap:35px;padding-top:53px;padding-bottom:58px}.noon-price-card{max-width:570px;transform:none}.noon-highlights{grid-template-columns:repeat(2,minmax(0,1fr))}.noon-audience{grid-template-columns:1fr;gap:22px}}
        .noon-page { overflow: hidden; }
        .noon-hero-grid { animation: noonHeroIn .75s cubic-bezier(.2,.7,.2,1) both; }
        .noon-mark { animation: noonMarkPop .7s .2s both; }
        .noon-price-card { animation: noonCardFloat 6s ease-in-out infinite; }
        .noon-highlight, .noon-module, .noon-week, .noon-detail, .noon-audience-item { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .noon-highlight:hover, .noon-module:hover { transform: translateY(-5px); box-shadow: 0 18px 38px rgba(30,26,0,.08); border-color: #d7c800; }
        .noon-module:hover .noon-module-icon, .noon-highlight:hover .noon-highlight-icon { transform: rotate(-5deg) scale(1.05); }
        .noon-module-icon, .noon-highlight-icon { transition: transform .25s ease; }
