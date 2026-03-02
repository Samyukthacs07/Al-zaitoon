import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { firstName, lastName, email, subject, message } = await request.json();

        // Validate required fields
        if (!firstName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: 'Al Zaitoon Website <onboarding@resend.dev>',
            to: 'info@alzaitoonbeauty.com',
            replyTo: email,
            subject: `New Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #4a5a3a; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Name:</td>
                            <td style="padding: 8px 12px;">${firstName} ${lastName || ''}</td>
                        </tr>
                        <tr style="background: #f9f9f9;">
                            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email:</td>
                            <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Subject:</td>
                            <td style="padding: 8px 12px;">${subject}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #555;">Message:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #999;">
                        This message was sent from the Al Zaitoon website contact form.
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
