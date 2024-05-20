import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema(
  {
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    totalComments: {
      type: Number,
      default: 0,
    },
    createdUserEmail: {
      type: String,
      required: true,
    },
    createdUserName: {
      type: String,
      required: true,
    },
    createdUserPic: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", postSchema);
export default Post;
