import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/sendLeadEmail";

const schema = z.object({
  lang: z.enum(["en", "es"]).optional().default("en"),
  name: z.string().min(1),
  phone: z.string().min(7),
  need: z.string().min(1),
  message: z.string().optional().default("")
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    // Send email via Resend
    await sendLeadEmail(parsed);
    return NextResponse.json({
      ok: true,
      received: parsed,
      message: parsed.lang === "es"
        ? "Lead recibido y enviado por email."
        : "Lead received and emailed."
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 }
    );
  }
}
