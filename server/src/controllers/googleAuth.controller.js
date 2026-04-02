import generateAccessAndRefreshToken from "../utils/generateTokens.js";
import { OAuth2Client } from "google-auth-library";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/handler.js";
import { User } from "../models/user.model.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleAuth = asyncHandler(async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    throw new apiError(400, "Google Token missing");
  }

  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const { name, email, picture, sub: googleId } = ticket.getPayload();

  let user = await User.findOne({
    $or: [{ googleId }, { email }],
  });

  if (!user) {
    user = await User.create({
      name,
      email,
      googleId,
      image: { public_id: "", url: picture },
    });
  } else if (!user.googleId) {
    // Pehle email se register tha  link karo
    user.googleId = googleId;
    user.image = { public_id: "", url: picture };
    await user.save({ validateBeforeSave: false });
  } else {
    user.image = { public_id: "", url: picture };
    await user.save({ validateBeforeSave: false });
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json(
      new apiResponse(200, "Google login successful", {
        user: loggedInUser,
      })
    );
});

export { googleAuth };
