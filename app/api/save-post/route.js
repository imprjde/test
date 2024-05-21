import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Saved from "@/models/saved";

export const POST = async (req, res) => {
  let { savedUserEmail, postId, thumbnail } = await req.json();

  try {
    await connectMongoDB();
    let data = await Saved.create({
      savedUserEmail,
      postId,
      thumbnail,
    });

    return NextResponse.json({
      message: "Post has been saved",
      data,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
export const GET = async (req, { params }) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  console.log(
    "----------------------------------------------------------------------------------------------------------------------------------------"
  );

  console.log("ID IS", id);
  if (id) {
    try {
      await connectMongoDB();
      let posts = await Saved.find({
        savedUserEmail: id,
      });

      // console.log(posts);
      // console.log(slug);

      return NextResponse.json({ data: posts });
    } catch (error) {
      console.error("Error fetching posts:", error);
      return NextResponse.json(
        { error: "An error occurred while fetching posts." },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (req, res) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  try {
    await connectMongoDB();
    let data = await Saved.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Post unsaved successfully!",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
