// services/chatService.ts
import api from '../utils/api';

export interface ChatResponse {
  intent: string;
  response: string;
  score: number;
  matchedKeyword: string;
  links?: Array<{ name: string; path?: string; description?: string }>;
  requiresEscalation?: boolean;
}

class ChatService {
  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await api.post('/api/chat/match', { message });
      console.log('Chat API response:', response.data);
      // Handle different response structures
      if (response.data?.success && response.data?.data) {
        return response.data.data;
      }

      return response.data;
    } catch (error) {
      console.error('Chat API error:', error);

      // Fallback response when backend is down
      return {
        intent: 'general',
        response:
          "I'm here to help. Please contact our support team if you need assistance.",
        score: 0,
        matchedKeyword: 'fallback',
        requiresEscalation: false,
        links: [
          {
            name: 'Contact Support',
            path: '/contact/contact-us',
            description: 'Get help from our team',
          },
        ],
      };
    }
  }
}

export default new ChatService();
