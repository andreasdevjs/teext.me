import { NextRequest, NextResponse } from "next/server";
import { SENSITIVE_WORDS } from "@/app/lib/constants";
import { isValidUsername } from "@/app/lib/utils";

export async function POST(request: NextRequest, response: NextResponse) {
  const res = await request.json();
  const { username } = res;

  // Comprobamos que no es un nombre prohibido
  if (SENSITIVE_WORDS.includes(username)) {
    return NextResponse.json(
      { success: "false", error: "❌ You cannot use this name" },
      { status: 400 }
    );
  }

  // Comprobamos que tiene solamente números, letras y guión medio
  if (!isValidUsername(username)) {
    return NextResponse.json(
      {
        success: "false",
        error: "Only letters, numbers and dashes are allowed",
      },
      { status: 400 }
    );
  }

  // Por último, comprobamos que no esté ya elegido por un usuario
  let isTaken = false; // TODO: BORRAR E IMPLEMENTAR LLAMADA BBDD
  if (isTaken) {
    return NextResponse.json(
      {
        success: "false",
        error: "Username already taken",
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { success: "true", data: { message: `${username} is available` } },
    { status: 200 }
  );
}
