import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer transporter
// Note: In production, use environment variables for sensitive data
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com', // For QQ Mail. Change for other providers
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'your-email@qq.com', // Use environment variable
    pass: process.env.EMAIL_PASS || 'your-app-password', // Use environment variable
  },
});



export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phoneOrEmail, address, preferredTime, service, price } = body;

    // Validate required fields
    if (!name || !phoneOrEmail || !address || !preferredTime || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to:  process.env.EMAIL_RECEIVER || 'chenxinhu2000@gmail.com', // Send to yourself, or use a different recipient
      subject: `New Car Wash Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Booking Request</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${phoneOrEmail}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>

            <h3 style="color: #374151; margin-top: 20px;">Service Details:</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Price:</strong> ${price || 'Not specified'}</p>
          </div>

          <p style="color: #6b7280; font-size: 14px;">
            This booking was submitted through the AquaShine Car Wash website.
          </p>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);

    // Send email
    return NextResponse.json(
      { message: 'Booking submitted successfully! We will contact you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking. Please try again.' },
      { status: 500 }
    );
  }
}

