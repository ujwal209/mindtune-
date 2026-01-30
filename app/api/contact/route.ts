import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // 1. Validate fields
    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Configure Transporter (Using GMAIL as the sender)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL, // Your Gmail address
        pass: process.env.SENDER_PASSWORD, // Your Gmail App Password
      },
    });

    // 3. Email Options
    const mailOptions = {
      from: `"Mind Tune Website" <${process.env.SENDER_EMAIL}>`, // SENDER: Your Gmail
      to: process.env.RECEIVER_EMAIL, // RECEIVER: Your Zoho Mail
      replyTo: email, // When you click reply, it goes to the client's email
      subject: `New Inquiry: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #17144B;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <h3>Message:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px; border-left: 4px solid #552D30;">
            ${message}
          </p>
        </div>
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}