# GenAI - Groq Terminal Chatbot

A simple, streaming terminal-based AI chat application built with **Node.js**, **LangChain**, and **Groq Cloud**.

---

## 📋 Table of Contents
1. [Prerequisites](#-prerequisites)
2. [Packages Needed](#-packages-needed)
3. [Installation](#-installation)
4. [How to Get a Groq API Key](#-how-to-get-a-groq-api-key)
5. [Setting Up the `.env` File](#-setting-up-the-env-file)
6. [Running the App](#-running-the-app)
7. [Project Structure](#-project-structure)

---

## 📌 Prerequisites

Before you start, make sure you have:
- [Node.js](https://nodejs.org/) installed (v18 or higher recommended).
  - Verify with: `node -v`

---

## 📦 Packages Needed

This project uses the following packages:

| Package | Type | Why is it needed? |
| :--- | :--- | :--- |
| **`@langchain/groq`** | Dependency | Connects your code to Groq's high-speed AI inference models. |
| **`langchain`** | Dependency | Core library providing standardized AI chat abstractions and tools. |
| **`dotenv`** | Dependency | Loads secret configuration variables (like your API key) from the `.env` file. |
| **`nodemon`** | Dev Dependency | (Optional) Automatically restarts the application whenever you make code changes. |

---

## 🚀 Installation

Open your terminal in this project folder and run:

```bash
npm install
```

> **Note:** If starting from a blank project without `package.json`, you would install them manually:
> ```bash
> npm install @langchain/groq langchain dotenv
> npm install --save-dev nodemon
> ```

---

## 🔑 How to Get a Groq API Key

Groq provides free, fast access to powerful open-source AI models.

1. Go to the [Groq Console](https://console.groq.com/).
2. Sign up or log in with your Google or GitHub account.
3. In the left navigation menu, click **API Keys** (or visit directly: [https://console.groq.com/keys](https://console.groq.com/keys)).
4. Click **Create API Key**.
5. Give your key a name (e.g., `genai-chat`) and click **Submit**.
6. **Copy the key immediately** (it starts with `gsk_...`). Store it somewhere safe because it won't be shown again!

---

## ⚙️ Setting Up the `.env` File

The `.env` file holds your private secret keys so they aren't hardcoded into your program.

### Step 1: Create a `.env` file
You will see a template file named `.env.example` in this project. 

Make a copy of `.env.example` and name the new file `.env`:
- **Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```
- **Mac/Linux:**
  ```bash
  cp .env.example .env
  ```
- *Or simply create a new file named `.env` in the root folder.*

### Step 2: Add your API key
Open the newly created `.env` file and replace `your_groq_api_key_here` with your actual Groq key:

```env
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
```

> ⚠️ **Important Security Tip:**
> Never share your `.env` file or commit it to GitHub. The `.gitignore` file is already set up to ignore `.env` and keep your secret key safe.

---

## 💬 Running the App

Once packages are installed and your `.env` file is ready, start the chatbot:

### Standard Start:
```bash
npm start
```
*(Runs `node index.js`)*

### Development Mode (auto-restarts on code edits):
```bash
npm run dev
```

### How to use:
- Type your prompt after `You: ` and press **Enter**.
- Groq will stream its response directly in your terminal.
- Press `Ctrl + C` at any time to exit.

---

## 📁 Project Structure

```text
GenAI/
├── .env                # Your private environment variables (DO NOT COMMIT)
├── .env.example        # Example template showing required env variables
├── .gitignore          # Ignores node_modules and .env
├── index.js            # Main chatbot logic and streaming implementation
├── package.json        # Project metadata and installed dependencies
└── README.md           # Project documentation and guide
```
