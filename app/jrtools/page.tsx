"use client";

import { useMemo, useState } from "react";
import SiteStyles from "@/components/SiteStyles";
import LeadForm from "@/components/LeadForm";
import { jrtoolsCard } from "@/lib/jrtools-card";

type Lang = "en" | "es";

export default function JRToolsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = useMemo(() => jrtoolsCard.content[lang], [lang]);

  return (
    <main className="page">
      <SiteStyles />
      <div className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandMark">⚔️</div>
            <div>
              <div className="brandTitle">JR Tools USA</div>
              <div className="brandSub">Tools for less</div>
            </div>
          </div>
          <div className="langSwitch">
            <button type="button" className={`langBtn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            <button type="button" className={`langBtn ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")}>ES</button>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="heroBg" />
        <div className="container heroInner">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="heroTitle">{t.headline}</h1>
          <p className="heroText">{t.subheadline}</p>

          <div className="actionRow">
            <a className="ctaBtn" href={`tel:${jrtoolsCard.phone}`}>{t.actions.call}</a>
            <a className="secondaryBtn" href={`sms:${jrtoolsCard.smsPhone}`}>{t.actions.text}</a>
            <a className="secondaryBtn" href={`https://wa.me/${jrtoolsCard.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noreferrer">{t.actions.whatsapp}</a>
            <a className="ghostBtn" href={`/api/vcard/jrtools?lang=${lang}`}>{t.actions.save}</a>
            <a className="accentBtn" href={jrtoolsCard.shopUrl} target="_blank" rel="noreferrer">{t.actions.shop}</a>
          </div>

          <div className="trustGrid">
            {t.trust.map((item) => <div key={item} className="trustItem">{item}</div>)}
          </div>

          <div className="sections">
            <div className="panel">
              <p className="miniLabel">{lang === "en" ? "SMART TAP CARD" : "TARJETA INTELIGENTE"}</p>
              <h2 className="panelTitle">{t.info.title}</h2>
              <p className="panelText">{t.info.text}</p>
              <div className="grid2" style={{ marginTop: 22 }}>
                <div className="innerCard">
                  <p className="miniLabel">{t.info.actionsLabel}</p>
                  <ul className="list">
                    {t.info.actionsItems.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div className="innerCard">
                  <p className="miniLabel">{t.info.useLabel}</p>
                  <ul className="list">
                    {t.info.useItems.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <LeadForm lang={lang} labels={t.lead} />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">JR Tools USA</div>
          <div className="footerCopy">&copy; {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
