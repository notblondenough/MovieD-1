import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";

const router= express.Router();

router.use("/users", userRoute);
router.use("/:mediaType", mediaRoute);
router.use("/person", personRoute);
router.use("/review", reviewRoute);

export default router;