import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import { connectdb } from "@/database/db";

export async function POST (req: NextRequest) {
  const data = connectdb();
  await data;

  const { email, firstName, lastName, image, _id } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json(
      { err: "email already registered" },
      { status: 400 }
    );
  }

  const newUser = new User({
    email,
    firstName,
    lastName,
    image,
    _id,
  });
  try {
    await newUser.save();
    return NextResponse.json(
      { message: "user is registered" },
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(err, {
      status: 400,
    });
  }
};


export const GET = async (
  request: NextRequest,
  response: NextResponse,
 
  page: number
) => {
  const data = connectdb()
  await data;
  try {
    const user = await User.find({});

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ "product not found": err });
  }
};
