import mongoose, { Schema, models } from "mongoose";

const likedCommentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    commentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LikedComment =
  models.LikedComment || mongoose.model("LikedComment", likedCommentSchema);
export default LikedComment;
