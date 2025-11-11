# 🧮 Simple Counter — React + Vite

A lightweight counter app built with **React** and **Vite**, demonstrating how **React batches state updates** and how to use the **functional update form** of `useState` correctly.

This isn’t just a counter — it’s a small but powerful example that helps you understand how React handles multiple state updates inside a single event.

---

## 🚀 Features

- ➕ Increment and ➖ Decrement buttons  
- 🚫 Prevents the counter from going below 0 or above 100  
- ⚡ Demonstrates **React state batching behavior**  
- 🧠 Shows correct use of **functional state updates**  
- 💅 Clean and minimal UI  
- ⚙️ Built with **Vite** for lightning-fast development  

---

## 🧠 What You’ll Learn

This project demonstrates an important React concept:

> When you call `setState` multiple times in the same function, React batches them together and only applies the final value — **unless you use the functional update form**.

### Example

```js
// ❌ Won’t work as expected — will only increase by 1
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// ✅ Correct way — increases by 5
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);

This happens because React batches updates for performance,
and the functional form ensures each call uses the latest state value.

🛠️ Tech Stack
| Technology           | Purpose                            |
| -------------------- | ---------------------------------- |
| ⚛️ React 18+         | UI library for building components |
| ⚡ Vite               | Fast build tool and dev server     |
| 💻 JavaScript (ES6+) | Core programming language          |
| 🎨 CSS3              | Styling and layout                 |

📦 Installation & Setup
1. Clone the repository
git clone https://github.com/lordChaitanya/React-mini-projects.git
cd "React-code-chai/Mini projects/SimpleCounter"

2. Install dependencies
npm install

3. Start the development server
npm run dev

4. Open in your browser
http://localhost:5173/

📁 Folder Structure
SimpleCounter/
├── src/
│   ├── App.jsx          # Main component with counter logic
│   ├── App.css          # Styling
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
└── README.md            # Documentation

🧩 How It Works

The count state starts at 0

Clicking ADD increases it by 5 (using functional updates)

Clicking SUB decreases it by 1

Alerts prevent values below 0 or above 100

🧑‍💻 Author

Chaitanya Bharadwaj

Learning in public → Web Dev, DevOps, AI & Web3.
Documenting my journey to becoming a better builder.

🪪 License

This project is open-source and available under the MIT License.



