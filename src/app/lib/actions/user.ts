"use server";

import User from "@/app/models/User";
import dbConnect from "../db";

export async function getUserByUsername(username: string) {
  try {
    await dbConnect();
    return User.findOne({ username }).exec(); // Executes the query as a Promise
  } catch (error) {
    console.error(`Error fetching user by username: ${username}`, error);
    throw new Error("Error fetching user data");
  }
}
