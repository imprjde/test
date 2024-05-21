import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Post from "@/models/post";

export const GET = async (req, { params }) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const slug = searchParams.get("slug");
  const query = slug.charAt(0).toUpperCase() + slug.slice(1);

  try {
    await connectMongoDB();
    let posts = await Post.find({ category: query });

    console.log(posts);
    console.log(slug);

    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
