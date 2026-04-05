// src/controllers/chatController.js
import { aiMatcherService } from "../services/aiMatcherService.js";

/**
 * Simple controller that just accepts message from frontend,
 * calls the matcher service, and returns the response
 */
export const chatController = {
  
  /**
   * POST /api/chat/match
   * Receives: { message: "user input text" }
   * Returns: matched response
   */
  async match(req, res) {
    try {
      // Get message from frontend
      const { message } = req.body;
      
      // Validate
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Message is required'
        });
      }
      
      // Call the service (no logic here - just calling)
      const result = await aiMatcherService.matchUserInput(message.trim());
      console.log('Controller received result:', result);
      
      // Return response in format frontend expects
      return res.json({
        success: true,
        data: {
          intent: result.intent,
          response: result.response,
          score: result.score,
          matchedKeyword: result.matchedText,
          links: result.links,
          requiresEscalation: result.requiresEscalation
        }
      });
      
    } catch (error) {
      console.error('Controller error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
};