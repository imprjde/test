import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Post from "@/models/post";
let HBC = "123";
export const DELETE = async (req, { params }) => {
  const url = new URL(req.url, HBC);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  try {
    await connectMongoDB();
    let blog = await Post.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Blog deleted successfully!",
      data: id,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching blog." },
      { status: 500 }
    );
  }
};
