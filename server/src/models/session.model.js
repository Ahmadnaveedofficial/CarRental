import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },

    refreshTokenHash: {
      type: String,
      required: [true, "Refresh token hash is required"],
    },

    ip: {
      type: String,
      required: [true, "Refresh token hash is required"],
    },

    userAgent: {
      type: String,
      required: [true, "User agent is required"],
    },

    revoked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Session = mongoose.model("Session", sessionSchema);
