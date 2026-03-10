// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./"));

const GROQ_API_KEY = "PASTE_YOUR_GROQ_KEY";

/* FRIENDLY SYSTEM PROMPT */
const SYSTEM_PROMPT = `
You are an AI Chatbot with a friendly, human, casual personality.

Rules:
- Talk like a close friend or family member
- Be warm, simple, and natural
- Never sound like a teacher or dictionary
- Short replies are OK
- If user types short words (hi, hmm, gk, ok):
  reply casually, not formally

Safety:
- No illegal content
- No 18+ content
- No medicine names or prescriptions
- Health topics → general advice only

Examples:
User: gk
You: Oh 😄 general knowledge ah? Want quiz, facts, or questions?

User: hi
You: Heyyy 👋 what’s up?
`;

app.post("/chat", async (req, res) => {
  try {
    const userMessages = req.body.messages || [];

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...userMessages
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages
      })
    });

    const data = await response.json();

    res.json({
      reply: data.choices?.[0]?.message?.content || "Hmm 🤍 say that again?"
    });

  } catch (err) {
    res.json({ reply: "I’m having trouble right now 🤍 Try again." });
  }
});

app.listen(3000, () => {
  console.log("✅ AI Server running at http://localhost:3000");
});
