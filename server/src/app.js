import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./utils/errorHandler.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: ["*", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Here
import userRouter from "./routes/user.route.js";
import ownerRouter from "./routes/owner.route.js";
import bookingRouter from "./routes/booking.route.js";
import commentRouter from "./routes/comment.route.js";
import blogRouter from "./routes/blog.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/owners", ownerRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users/blogs", commentRouter);

app.use(errorHandler); // Global error handling middleware

export default app;
