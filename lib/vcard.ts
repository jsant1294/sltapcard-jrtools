import { jrtoolsCard } from "@/lib/jrtools-card";

export function buildJRToolsVCard(lang: "en" | "es" = "en") {
  const note =
    lang === "es"
      ? "Herramientas profesionales a precios de contratista. Milwaukee, DeWalt y Makita. Inventario nuevo y open box. Llama, envía texto, usa WhatsApp o compra en línea."
      : "Pro-grade power tools at contractor prices. Milwaukee, DeWalt, and Makita. New and open box inventory. Call, text, WhatsApp, or shop online.";

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:JR Tools USA",
    "ORG:JR Tools USA",
    "TITLE:Power Tool Sales & Inventory",
    `TEL;TYPE=CELL,VOICE:${jrtoolsCard.phone}`,
    `TEL;TYPE=WORK,VOICE:${jrtoolsCard.phone}`,
    `EMAIL;TYPE=WORK:${jrtoolsCard.email}`,
    `URL:${jrtoolsCard.url}`,
    "ADR;TYPE=WORK:;;Atlanta Metro Area;Atlanta;GA;;USA",
    `X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/${jrtoolsCard.whatsapp.replace(/[^\d]/g, "")}`,
    `NOTE:${note}`,
    "END:VCARD"
  ].join("\n");
}
