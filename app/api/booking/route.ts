import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, address, serviceType, date, time, message } = body

    // Validate required fields
    if (!name || !phone || !email || !address || !serviceType || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Appointment Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">
            📅 New Appointment Request
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Patient Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Time:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${time}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Additional Notes:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="margin-top: 20px; padding: 15px; background-color: #f0fdfa; border-radius: 8px; color: #0d9488;">
            <strong>Action Required:</strong> Please contact the patient to confirm the appointment.
          </p>
          
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            This email was sent from Dr. Shukla Physiotherapy booking system.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true, 
      message: "Booking submitted successfully",
      bookingId: `PHYSIO-${Date.now()}` 
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send booking email" },
      { status: 500 }
    )
  }
}
