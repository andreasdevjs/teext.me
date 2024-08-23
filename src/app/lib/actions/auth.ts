import { redirect } from "next/navigation";
import { deleteSession } from "../sessions/deleteSession";

export async function logout() {
  deleteSession();
  redirect("/login");
}
