import { NextRequest, NextResponse } from "next/server";

interface MessageRequest {
  username: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { username, message }: MessageRequest = await request.json();

    // Inputs validation
    if (!username || !message) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "All fields are required",
            code: "REQUIRED_FIELDS",
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: { message: "Message sent" },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Internal server error",
          code: "SERVER_ERROR",
        },
      },
      { status: 500 }
    );
  }
}
