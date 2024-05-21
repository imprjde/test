import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongodbConnect";
import Comment from "@/models/comment";
import Post from "@/models/post";

export const POST = async (req, res) => {
  let { postId, userEmail, userName, userThumbnail, comment } =
    await req.json();

  try {
    await connectMongoDB();
    let newComment = await Comment.create({
      postId,
      userEmail,
      userName,
      userThumbnail,
      comment,
    });

    let updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { totalComments: 1 } },
      { new: true }
    );

    return NextResponse.json({
      message: "Your Comment was added!!",
      data: newComment,
      post: updatedPost,
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
  const slug = searchParams.get("slug");

  try {
    await connectMongoDB();
    let allComments = await Comment.find({ postId: slug });

    return NextResponse.json({
      data: allComments,
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
  const slug = searchParams.get("slug");
  try {
    let updatedComment = await Comment.findByIdAndUpdate(
      slug,
      { $inc: { likes: 1 } },
      { new: true }
    );

    return NextResponse.json({
      message: "Comment Liked Successfully!",
      data: updatedComment,
    });
  } catch (error) {
    console.error("Error updating comment:", error);
    return NextResponse.json(
      { error: "An error occurred while Liking the comment." },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, res) => {
  const url = new URL(req.url, process.env.CORS);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    await connectMongoDB();
    let deletedComment = await Comment.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Comment Deleted Successfully",
      data: { id, deletedComment },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while Liking the comment." },
      { status: 500 }
    );
  }
};
