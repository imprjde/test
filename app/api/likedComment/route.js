import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import LikedComment from "@/models/likedComments";
import Comment from "@/models/comment";

export const POST = async (req, res) => {
  let { userId, commentId } = await req.json();

  try {
    await connectMongoDB();
    let data = await LikedComment.create({
      commentId,
      userId,
    });

    return NextResponse.json({
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

export const GET = async (req, res) => {
  console.log(
    " RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG RUNNNG "
  );
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const userId = searchParams.get("slug");
  const commentId = searchParams.get("postId");

  try {
    await connectMongoDB();

    let data = await LikedComment.find({ userId });
    return NextResponse.json({
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

export const PUT = async (req, res) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("slug");
  const slug = searchParams.get("ID");

  try {
    await connectMongoDB();

    let data = await LikedComment.findByIdAndDelete(id);

    let updatedComment = await Comment.findByIdAndUpdate(
      slug,
      { $inc: { likes: -1 } },
      { new: true }
    );
    return NextResponse.json({
      message: "Comment Disliked Successfully",
      data: { data, updatedComment },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching posts." },
      { status: 500 }
    );
  }
};
