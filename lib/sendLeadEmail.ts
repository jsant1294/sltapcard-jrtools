// lib/sendLeadEmail.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail({ name, phone, need, message }: { name: string; phone: string; need: string; message?: string }) {
  return resend.emails.send({
    from: 'JR Tools Lead <info@jrtoolsusa.com>',
    to: ['info@jrtoolsusa.com'],
    subject: 'New Lead from Tap Card',
    html: `
      <h2>New Lead from Tap Card</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Need:</strong> ${need}</p>
      <p><strong>Message:</strong> ${message || ''}</p>
    `
  });
}
