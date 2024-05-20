import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Post from "@/models/post";

export const GET = async (req, { params }) => {
  try {
    await connectMongoDB();
    let popularPosts = await Post.find().sort({ likes: -1 }).limit(5);

    return NextResponse.json({ data: popularPosts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
