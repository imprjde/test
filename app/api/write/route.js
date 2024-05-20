import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectMongoDB } from "@/utils/mongodbConnect";
let HBC = "123";
export const POST = async (req, res) => {
  let {
    thumbnail,
    title,
    category,
    description,
    createdUserEmail,
    createdUserName,
    createdUserPic,
  } = await req.json();

  await connectMongoDB();
  let data = await Post.create({
    thumbnail,
    title,
    category,
    description,
    createdUserEmail,
    createdUserName,
    createdUserPic,
  });

  console.log("DATA RECEIVED", data);
  return NextResponse.json({ message: "GOT IT JII", data });
};

export const GET = async (req, res) => {
  const url = new URL(req.url, HBC);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 345;

  const limit = 5;
  const skip = (page - 1) * limit;
  try {
    await connectMongoDB();
    const totalBlogs = await Post.countDocuments();
    const posts = await Post.find().skip(skip).limit(limit).exec();

    return NextResponse.json({
      message: "Success",
      data: { posts, totalBlogs },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", { statusCode: 500 });
  }
};
