import {
  resgisterUser,
  getCarBookedDates,
  loginUser,
  getUserData,
  logoutUser,
  getCars,
  updateProfileImage,
  updateUserProfile,
  changeCurrentPassword,
} from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { googleAuth } from "../controllers/googleAuth.controller.js";
import { refreshAccessToken } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter
  .route("/register")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), resgisterUser);

userRouter.route("/login").post(loginUser);
userRouter.route("/data").get(verifyJWT, getUserData);
userRouter.route("/logout").post(logoutUser);
userRouter.route("/cars").get(getCars);
userRouter.route("/update-profile").post(verifyJWT, updateUserProfile);
userRouter
  .route("/update-profile-image")
  .post(verifyJWT, upload.single("image"), updateProfileImage);
userRouter.route("/change-password").post(verifyJWT, changeCurrentPassword);
userRouter.route("/cars/:id/booked-dates").get(getCarBookedDates);
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/auth/google").post(googleAuth);

export default userRouter;
