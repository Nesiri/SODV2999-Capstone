import express from "express";
import { chatController } from "../controller/aiChatContoller.js";
const router = express.Router();

// Only one endpoint - matches what frontend expects
router.post('/match', chatController.match);
export default router;