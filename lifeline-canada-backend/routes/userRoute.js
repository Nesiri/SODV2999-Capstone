import express from "express";
import * as UserController from "../controller/userController.js";
import { signLimiter } from "../middware/limiter.js";
import authMiddleware from "../middware/authMiddleware.js";

const router = express.Router();

router.get("/me",  authMiddleware,UserController.getUser);
router.get("/:id", UserController.getUser);
router.post("/signup",signLimiter, UserController.signup);
router.patch("/verify-email",UserController.verifyEmail)
router.post("/login", UserController.login);
router.post("/social-login",UserController.socialLogin)
router.put("/:id", UserController.updateProfile);
router.delete("/:id", UserController.deleteUser);

export default router;