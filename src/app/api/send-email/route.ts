import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, emailHtml } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'YourApp wael.business@outlook.com',
      to: [email],
      subject: `New message from ${name}`,
      html: emailHtml, // Use the HTML passed from the client
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
