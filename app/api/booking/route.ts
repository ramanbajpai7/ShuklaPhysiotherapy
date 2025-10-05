import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, address, serviceType, date, time, message } =
      body;

    // Validate required fields
    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !serviceType ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Send notification to admin
    // 4. Integrate with calendar system

    // For now, we'll just log the booking and return success
    console.log("New booking received:", {
      name,
      phone,
      email,
      address,
      serviceType,
      date,
      time,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        message: "Booking submitted successfully",
        bookingId: `PHYSIO-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
