import express from "express";
import { handleGuestMessage } from "../controllers/messageController.js";

const router= express.Router();


router.post("/message", handleGuestMessage);

export default router;