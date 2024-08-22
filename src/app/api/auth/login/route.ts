import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import { createSession } from "@/app/lib/sessions/createSession";

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { email, password }: LoginRequestBody = await request.json();

    // Inputs validation
    if (!email || !password) {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Invalid email format",
            code: "INVALID_EMAIL",
          },
        },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Invalid credentials",
            code: "INVALID_CREDENTIALS",
          },
        },
        { status: 400 }
      );
    }

    // Compare the user's password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match, return early
    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Invalid password",
            code: "INVALID_PASSWORD",
          },
        },
        { status: 400 }
      );
    }

    // 4. If login successful, create a session for the user and send response
    const userId = user.id.toString();
    await createSession(userId);

    return NextResponse.json(
      {
        success: true,
        data: { message: "User logged in successfully" },
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
