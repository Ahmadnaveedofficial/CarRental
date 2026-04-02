import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  checkAvailabilityOfCars,
  createBooking,
  userBookings,
  ownerBookings,
  changeBookingStatus,
  userCancelBooking,
} from "../controllers/booking.controller.js";

const bookingRouter = Router();

bookingRouter.route("/check-availability").post(checkAvailabilityOfCars);
bookingRouter.route("/create").post(verifyJWT, createBooking);
bookingRouter.route("/user-bookings").get(verifyJWT, userBookings);
bookingRouter.route("/owner-bookings").get(verifyJWT, ownerBookings);
bookingRouter.route("/change-status").post(verifyJWT, changeBookingStatus);
bookingRouter.route("/cancel").post(verifyJWT, userCancelBooking);

export default bookingRouter;
