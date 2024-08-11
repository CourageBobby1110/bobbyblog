import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/database/db";
import { email } from "@/models/email";


const data = connectdb();

export const POST = async (request: NextRequest) => {
  await data;
  const { mail, userId } = await request.json();

  const existingEmail = await email.findOne({ userId });
  if (existingEmail) {
    const err = "email already exist";
    return NextResponse.json(err, { status: 400 });
  }

  const newEmail = new email({
   mail,
   userId
  });
  try {
    await newEmail.save();
    return NextResponse.json(newEmail);
  } catch (err) {
    NextResponse.json(err);
  }
};