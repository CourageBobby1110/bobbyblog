import { connectdb } from "@/database/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
  const data = connectdb();

  await data;

  try {
    const { id } = params;
    const { role, whatsapp,  description,  tutor_image,   courses,  department,  price } = await request.json();

  

    const Xpros = await User.findByIdAndUpdate(id, {
      role: role, 
      whatsapp: whatsapp,
      description: description,
      tutor_image: tutor_image,
      courses: courses,
      department: department,
      price: price,
    });
    if (!Xpros) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
     
    }

    const Ures = await User.findById(id);

    return NextResponse.json(Ures, {status : 200});
  } catch (error) {
    NextResponse.json({ message: "error", error: error }, {status: 500});
  }
}
