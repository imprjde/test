import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Post from "@/models/post";
import User from "@/models/user";

export const GET = async (req, { params }) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const slug = searchParams.get("slug");

  console.log("API SLUG=", slug);

  try {
    await connectMongoDB();
    let posts = await Post.find({ createdUserEmail: slug });

    let user = await User.find({ email: slug });

    console.log("API USER =", user);

    return NextResponse.json({ data: { posts, user } });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
