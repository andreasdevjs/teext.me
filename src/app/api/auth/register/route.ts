import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import { createSession } from "@/app/lib/sessions/createSession";

interface RegisterRequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { username, email, password }: RegisterRequestBody =
      await request.json();

    // Input validation
    if (!username || !email || !password) {
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

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Password must be at least 6 characters long",
            code: "INVALID_PASSWORD_LENGTH",
          },
        },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Check if username or email already exists (and which one is causing the conflict)
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return NextResponse.json(
          {
            success: false,
            error: {
              message: "Username is already taken",
              code: "USERNAME_TAKEN",
            },
          },
          { status: 409 }
        );
      }
      if (existingUser.email === email) {
        return NextResponse.json(
          {
            success: false,
            error: {
              message: "Email is already in use",
              code: "EMAIL_TAKEN",
            },
          },
          { status: 409 }
        );
      }
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Creamos la sesión del usuario
    const userId = newUser.id.toString();
    await createSession(userId);

    return NextResponse.json(
      {
        success: true,
        data: { message: "User created successfully" },
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

// TODO: check username again.. (manually add a username by parameter)
