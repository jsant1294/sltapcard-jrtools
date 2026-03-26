import { NextResponse } from "next/server";
import { buildJRToolsVCard } from "@/lib/vcard";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug !== "jrtools") {
    return NextResponse.json({ error: "Card not found" }, { status: 404 });
  }
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") === "es" ? "es" : "en";
  const vcard = buildJRToolsVCard(lang);
  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="JR-Tools-USA-${lang}.vcf"`
    }
  });
}
