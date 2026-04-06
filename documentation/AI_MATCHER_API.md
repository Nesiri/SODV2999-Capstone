# AI Chat API

## Overview

The AI Chat API uses a machine learning model to understand user messages and return intelligent responses. The model runs entirely on the backend server.

---

## The AI Model

**Model Name:** `Xenova/all-MiniLM-L6-v2`

**What it does:** Converts text into numerical representations (embeddings) to understand meaning, not just keywords.

**Size:** Approximately 330 MB

---

## How the Model is Built and Downloaded

### During Backend Deployment (One Time Only)

When the backend server starts for the first time:

1. The server automatically downloads the AI model from Hugging Face
2. The download happens once during deployment
3. The model is saved to the server's cache
4. Future server restarts load the model from cache (much faster)

### What Gets Downloaded

The server scans all predefined response rules and their keywords. For each keyword, the model generates an embedding (numerical representation). These embeddings are stored in memory for fast matching.

### When This Happens

- **First deployment:** 10-30 seconds (downloading model)
- **Subsequent restarts:** 2-5 seconds (loading from cache)
- **User requests:** 50-200ms (just matching, no downloading)

---

## What Users Experience

**Users never download anything.** Their browser only sends simple API requests and receives text responses. The 330 MB model stays on the server.

---

## How Matching Works

1. You define response rules with keywords (example: "anxious" → "Take a deep breath")
2. The server generates embeddings for all keywords during startup
3. When a user sends a message, the server converts it to an embedding
4. The server compares the message embedding against all keyword embeddings
5. The closest match above a confidence threshold is returned

---

## What You Send

A JSON with the user's message text.

---

## What You Receive

A JSON with:
- Success status
- Response text to show the user
- Confidence score

---

## Important Notes

- Model downloads once during backend deployment only
- Users never download or interact with the model directly
- The server automatically handles model caching
- No frontend dependencies or special libraries needed
- Works with any predefined response rules you create