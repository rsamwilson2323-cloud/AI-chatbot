# 🤖 AI Chatbot

A lightweight **AI-powered chatbot** built using **Node.js, Express, and the Groq API**.
This project provides a friendly conversational AI that responds in a natural and casual way through a simple web interface.

The chatbot runs locally and communicates with the **Groq LLM API** to generate intelligent responses.

---

## 🚀 Features

* 💬 Real-time AI conversation
* ⚡ Fast responses using Groq API
* 🌐 Simple web-based chat interface
* 🧠 Friendly conversational personality
* 🖥️ Runs locally with Node.js
* 📦 Lightweight project structure

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **Groq API**
* **HTML / CSS / JavaScript**
* **CORS**
* **node-fetch**

---

## 📂 Project Structure

```
AI-chatbot
│
├── index.html
├── server.js
├── package.json
├── package-lock.json
├── node_modules
├── run_ai_chatbot.bat
├── README.md
└── LICENSE
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/rsamwilson2323-cloud/AI-chatbot.git
```

Move into the project folder:

```
cd AI-chatbot
```

Install dependencies:

```
npm install
```

---

## ▶️ Run the Chatbot

Start the server:

```
node server.js
```

You will see:

```
AI Server running at http://localhost:3000
```

Open your browser and go to:

```
http://localhost:3000
```

---

## 🔑 API Setup (Groq)

1. Create an account at
   https://console.groq.com

2. Generate your **API Key**

3. Open `server.js`

4. Replace the placeholder:

```
const GROQ_API_KEY = "api key";
```

with your real key:

```
const GROQ_API_KEY = "your_groq_api_key_here";
```

---

## 🧠 AI Personality

The chatbot is designed to behave like a **friendly human conversation partner**:

* Warm and casual responses
* Short and natural replies
* Handles small talk like *hi, ok, hmm, gk*
* Avoids unsafe or restricted topics

---

## 📌 Example Conversation

User:

```
hi
```

Bot:

```
Heyyy 👋 what’s up?
```

User:

```
gk
```

Bot:

```
Oh 😄 general knowledge ah? Want quiz, facts, or questions?
```

---

## 💻 Run with One Click (Windows)

You can also start the chatbot using:

```
run_ai_chatbot.bat
```

This will:

* Start the Node server
* Automatically open the chatbot interface.

---

## 📜 License

This project is released under the **MIT License**.

---

## 👨‍💻 Author

**Sam Wilson**

GitHub:
https://github.com/rsamwilson2323-cloud
