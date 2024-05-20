import mongoose, { Schema, models } from "mongoose";

const savedSchema = new Schema({
  savedUserEmail: {
    type: String,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  postId: {
    type: String,
    required: true,
  },
});

const Saved = models.Saved || mongoose.model("Saved", savedSchema);
export default Saved;
