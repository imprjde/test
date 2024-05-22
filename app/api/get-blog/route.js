import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Post from "@/models/post";


export const GET = async (req, { params }) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const slug = searchParams.get("slug");
  const id = slug.charAt(0).toUpperCase() + slug.slice(1);

  try {
    await connectMongoDB();
    let blog = await Post.findById(id);

    return NextResponse.json({ data: blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching blog." },
      { status: 500 }
    );
  }
};
