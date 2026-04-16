import apiError from "./apiError.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new apiError(404, "user not found while generating the tokens");
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

     const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // Create a new session document for this device
    await Session.create({
      userId: user._id,
      refreshTokenHash,
      ip: ip || "unknown",
      userAgent: userAgent || "unknown",
    });

    // user.refreshToken = refreshToken;
    // await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(
      500,
      error.message ||
        "Something went Wrong while using the access and refresh token"
    );
  }
};

export default generateAccessAndRefreshToken;
