export default function SiteStyles() {
  return (
    <style>{`
      .page { min-height: 100vh; background: #090909; color: #fff; }
      .container { width: min(1180px, calc(100% - 28px)); margin: 0 auto; }
      .topbar { position: sticky; top: 0; z-index: 30; backdrop-filter: blur(10px); background: rgba(7,7,7,.82); border-bottom: 1px solid rgba(255,255,255,.08); }
      .topbarInner { display:flex; align-items:center; justify-content:space-between; gap:14px; padding: 14px 0; }
      .brand { display:flex; align-items:center; gap:12px; }
      .brandMark { width: 40px; height: 40px; border-radius: 12px; display:grid; place-items:center; background: rgba(193,39,45,.12); border:1px solid rgba(193,39,45,.4); color:#f3d08f; font-weight:900; }
      .brandTitle { font-size: 20px; font-weight: 900; line-height: 1; }
      .brandSub { margin-top: 4px; font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.45); }
      .langSwitch { display:flex; gap:8px; }
      .langBtn, .ctaBtn, .ghostBtn, .secondaryBtn, .accentBtn { border-radius: 16px; padding: 13px 18px; font-weight: 800; border: 1px solid transparent; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; transition: .2s ease; }
      .langBtn { background: rgba(255,255,255,.06); color: rgba(255,255,255,.8); border-color: rgba(255,255,255,.1); }
      .langBtn.active { background: #fff; color: #111; }
      .ctaBtn { background:#c61f2a; color:#fff; }
      .ctaBtn:hover { background:#df2f3a; }
      .secondaryBtn { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.1); color:#fff; }
      .secondaryBtn:hover { background: rgba(255,255,255,.1); }
      .ghostBtn { background: transparent; border-color: rgba(255,255,255,.12); color:#fff; }
      .ghostBtn:hover { background: rgba(255,255,255,.06); }
      .accentBtn { background: rgba(214,160,47,.13); border-color: rgba(214,160,47,.28); color: #f5d895; }
      .accentBtn:hover { background: rgba(214,160,47,.22); }
      .hero { position: relative; overflow: hidden; min-height: 100vh; }
      .heroBg { position:absolute; inset:0; background: linear-gradient(0deg, rgba(7,7,7,.88), rgba(7,7,7,.72)), radial-gradient(circle at top left, rgba(193,39,45,.25), transparent 32%), radial-gradient(circle at top right, rgba(214,160,47,.16), transparent 28%), url('/images/jrtools-hero.jpg') center/cover no-repeat; }
      .heroInner { position: relative; padding: 58px 0 34px; }
      .eyebrow { margin: 0 0 14px; color:#f0cf8c; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; font-weight: 800; }
      .heroTitle { margin: 0; font-size: clamp(46px, 8vw, 96px); line-height: .95; letter-spacing: -.05em; font-weight: 900; max-width: 900px; }
      .heroText { margin: 18px 0 0; max-width: 840px; font-size: clamp(18px, 2vw, 24px); line-height: 1.6; color: rgba(255,255,255,.8); }
      .actionRow { display:flex; flex-wrap:wrap; gap:12px; margin-top: 26px; }
      .trustGrid { display:grid; gap:12px; grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 24px; }
      .trustItem { border:1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03); border-radius: 18px; padding: 15px 12px; text-align:center; font-weight:700; color: rgba(255,255,255,.9); }
      .sections { display:grid; gap:18px; margin-top: 42px; }
      .panel { border:1px solid rgba(255,255,255,.1); background: rgba(18,18,18,.78); border-radius: 28px; padding: 22px; box-shadow: 0 20px 50px rgba(0,0,0,.28); }
      .panelTitle { margin: 8px 0 0; font-size: clamp(32px,5vw,58px); line-height: .96; letter-spacing: -.04em; font-weight: 900; }
      .panelText { margin: 16px 0 0; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.75; }
      .miniLabel { color:#f0cf8c; font-size:11px; letter-spacing:.18em; text-transform:uppercase; font-weight:800; }
      .grid2 { display:grid; gap:16px; }
      .innerCard { border:1px solid rgba(255,255,255,.08); background: rgba(0,0,0,.36); border-radius: 22px; padding: 18px; }
      .list { margin: 12px 0 0; padding-left: 18px; line-height: 1.9; color: rgba(255,255,255,.88); }
      .formGrid { display:grid; gap:12px; margin-top:18px; }
      .input, .textarea { width:100%; border-radius: 16px; border:1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.04); color:#fff; padding: 14px 16px; outline:none; }
      .textarea { min-height: 112px; resize: vertical; }
      .formNote { margin-top: 10px; color: rgba(255,255,255,.55); font-size: 14px; }
      .placeholderNote { margin-top: 18px; border:1px dashed rgba(240,207,140,.32); background: rgba(214,160,47,.06); border-radius: 18px; padding: 14px; color: rgba(255,255,255,.75); font-size: 14px; line-height: 1.6; }
      @media (min-width: 900px) {
        .sections { grid-template-columns: 1.06fr .94fr; }
        .grid2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .trustGrid { grid-template-columns: repeat(4, minmax(0,1fr)); }
      }
    `}</style>
  );
}
