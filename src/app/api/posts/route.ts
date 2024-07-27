import { connectdb } from "@/database/db";
import { posts } from "@/models/posts";
import { NextRequest, NextResponse } from "next/server";

const data = connectdb();

export const POST = async (request: NextRequest) => {
  await data;
  const { title, body, author, image, tags, categories } = await request.json();

  const existingPosts = await posts.findOne({ title });
  if (existingPosts) {
    const err = "posts already exist";
    return NextResponse.json(err, { status: 400 });
  }

  const newPosts = new posts({
    title,
    body,
    author,
    image,
    tags,
    categories,
  });
  try {
    await newPosts.save();
    return NextResponse.json(newPosts);
  } catch (err) {
    NextResponse.json(err);
  }
};

export const GET = async (
  res: NextResponse,
  req: NextRequest,
  page: number
) => {
  await data;
  try {
    const products = await posts.find({});

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ "product not found": err });
  }
};
