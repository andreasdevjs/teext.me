import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/app/lib/db";
import User from "@/app/models/User";
import { SENSITIVE_WORDS } from "@/app/lib/constants";
import { isValidUsername } from "@/app/lib/utils";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { username } = res;

  // Comprobamos que no venga vacío
  if (!username) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Username cannot be empty",
          code: "INVALID_USERNAME",
        },
      },
      { status: 400 }
    );
  }

  if (SENSITIVE_WORDS.includes(username)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "❌ You cannot use this name",
          code: "INVALID_USERNAME",
        },
      },
      { status: 400 }
    );
  }

  // Comprobamos que tiene solamente números, letras y guión medio
  if (!isValidUsername(username)) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Only letters, numbers and dashes are allowed",
          code: "INVALID_USERNAME_CHARACTERS",
        },
      },
      { status: 400 }
    );
  }

  // Connect to the database
  await dbConnect();

  // Check if the username already exists
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
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

  return NextResponse.json(
    { success: "true", data: { message: `${username} is available` } },
    { status: 200 }
  );
}
