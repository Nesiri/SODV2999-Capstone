import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import userRouter from "./routes/userRoute.js";
import {aiMatcherService} from "./services/aiMatcherService.js";
import chatRoutes from "./routes/aiChatRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
   origin: [process.env.FRONTEND_URL, 'http://localhost:5173'], // Explicitly allow ONLY your  domains
  credentials: true, // Allow cookies/auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); 

// Routes
app.use("/api/auth", userRouter);
app.use('/api/chat', chatRoutes);

  // Load the AI model once during deployment/startup
    await aiMatcherService.initialize();
    console.log(' AI Matcher Service initialized and ready');

// Simple wake-up // endpoint to prevent idling on platforms like Heroku, render, etc on free tiers.

app.get('/wake', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Render backend is awake!'
  });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});