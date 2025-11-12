# 🔐 Password Generator — React + Vite

A sleek, minimal password generator built with **React**, featuring options to customize password **length**, include **numbers** and **special characters**, and **copy passwords to clipboard** with a single click.

---

## 🚀 Features
- 🎚️ Adjustable password length (8–20 characters)  
- 🔢 Option to include **numbers**  
- ✴️ Option to include **special characters**  
- 📋 One-click **copy to clipboard**  
- ⚡ Auto-regenerates password when options change  
- 💅 Built with **React Hooks** (`useState`, `useEffect`, `useCallback`, `useRef`)  
- 🌙 Simple, modern UI with Tailwind CSS  

---

## 🧠 How It Works
1. The app maintains states for:
   - `length`: Password length (default `8`)
   - `numberAllowed`: Whether to include numbers
   - `splCharAllowed`: Whether to include special characters
   - `password`: The generated password

2. The `passwordGenerator` function:
   - Builds a **reservoir string** (A–Z, a–z, and optionally 0–9 + symbols)
   - Randomly picks characters based on the selected length
   - Updates the password state

3. `useEffect` ensures the password automatically regenerates when any option changes.  
4. Clicking the **Copy** button copies the generated password to clipboard.

---

## 🧩 Code Overview

### Key Hooks Used

| Hook | Purpose |
|------|----------|
| `useState` | Manages state of password options |
| `useCallback` | Memoizes password generation and copy functions |
| `useRef` | Accesses the password input for copying |
| `useEffect` | Automatically regenerates password when options change |

---

## 🛠️ Installation & Setup

Make sure you have **Node.js** and **npm** or **yarn** installed.

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/password-generator.git

# 2️⃣ Navigate into the project
cd password-generator

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
