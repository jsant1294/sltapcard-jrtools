"use client";

import { useState } from "react";

type Props = {
  lang: "en" | "es";
  labels: {
    title: string;
    text: string;
    name: string;
    phone: string;
    need: string;
    message: string;
    button: string;
    success: string;
    note: string;
  };
};

export default function LeadForm({ lang, labels }: Props) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError("");
    const payload = {
      lang,
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      need: String(formData.get("need") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not submit lead.");
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit lead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <p className="miniLabel">{labels.title}</p>
      <h2 className="panelTitle">{labels.text}</h2>
      {done ? (
        <div className="placeholderNote" style={{ marginTop: 18 }}>{labels.success}</div>
      ) : (
        <form action={onSubmit} className="formGrid">
          <input className="input" name="name" placeholder={labels.name} required />
          <input className="input" name="phone" placeholder={labels.phone} required />
          <input className="input" name="need" placeholder={labels.need} required />
          <textarea className="textarea" name="message" placeholder={labels.message} />
          <button className="ctaBtn" type="submit" disabled={loading}>{loading ? "Sending..." : labels.button}</button>
          {error ? <div style={{ color: "#fca5a5", fontSize: 14 }}>{error}</div> : null}
          <div className="formNote">{labels.note}</div>
        </form>
      )}
    </div>
  );
}
