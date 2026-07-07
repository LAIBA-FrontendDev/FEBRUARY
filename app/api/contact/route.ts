import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const contact = await Contact.create(body);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Message failed" },
      { status: 500 }
    );
  }
}
