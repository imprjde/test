import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectMongoDB } from "@/utils/mongodbConnect";

export const GET = async (req, res) => {
  console.log("GET Random Running");
  try {
    await connectMongoDB();

    const count = await Post.countDocuments();
    const random = Math.floor(Math.random() * count);
    const randomPost = await Post.findOne().skip(random);
    return NextResponse.json({ message: "Success", data: randomPost });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", { statusCode: 500 });
  }
};
