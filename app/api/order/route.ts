import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Console par print karein taake pata chale frontend kya bhej raha hai
    console.log("Frontend Se Aaya Hua Data:", body);

    const order = await Order.create(body);

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    // Sabse important line: Yeh aapko terminal mein batayegi ke asal masla kya hai
    console.error("MongoDB Core Crash Error:", error); 

    return NextResponse.json(
      { success: false, error: "Order failed" },
      { status: 500 }
    );
  }
}

