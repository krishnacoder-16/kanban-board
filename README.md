# 📋 Kanban Task Board – React.js

## 📸 Project Preview
![Project Preview](./assets/ui.png)

## 🔗 Live Demo:
👉 [https://react-kanban-board-phi.vercel.app/](https://react-kanban-board-phi.vercel.app/)

A modern, responsive Kanban Task Management Board built using React.js and Tailwind CSS.

This project focuses on component-based architecture, state management, UI design, and localStorage persistence, following modern frontend development practices.

## 🚀 Features

### ✅ Level 1 – Core Functionality
- Add new tasks
- Move tasks between:
  - To Do
  - In Progress
  - Done
- Delete tasks
- Responsive 3-column layout
- Clean glassmorphism-inspired UI

### ✅ Level 2 – Enhanced Functionality
- ✏️ **Inline Editing** (Click → Edit → Auto Save)
- 🎯 **Priority System** (High / Medium / Low)
- 🎨 **Color-Coded Priority Borders:**
  - 🔴 High – Red
  - 🟡 Medium – Yellow
  - 🟢 Low – Green
- 💾 **localStorage Persistence**
  - Tasks remain saved even after page refresh.

## 🧠 Key Design Decisions

- **Component-Based Structure**
  - Modular components: `App`, `Column`, `TaskCard`, `AddTask`.
- **State Lifting**
  - All task logic is handled in `App.jsx` for centralized state control.
- **Immutability Principles**
  - State updates use `map()` and `filter()` for safe data handling.
- **Persistent Storage**
  - Lazy state initialization from localStorage to prevent overwrite issues.
- **Modern UI Approach**
  - Glassmorphism design with blurred background and soft gradients.

## 📂 Project Structure
```
kanban-board/
│
├── assets/
│   └── ui.png               # Screenshot for README
│
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── Column.jsx
│   │   └── TaskCard.jsx
│   │
│   ├── App.jsx              # Main state & logic
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── vite.config.js
├── package.json
├── README.md
└── Prompts.md
```

## 🛠️ Technologies Used
- ⚛️ **React.js** (Functional Components + Hooks)
- 🎨 **Tailwind CSS** (Utility-first styling)
- ⚡ **Vite** (Fast build tool)
- 🌐 **Vercel** (Deployment)

## 🧪 How to Run Locally

1️⃣ **Clone the repository:**
```bash
git clone <your-repo-link>
cd kanban-board
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Start development server:**
```bash
npm run dev
```

4️⃣ **Open:**
[http://localhost:5173](http://localhost:5173)

## 🌍 Deployment
The project is deployed on Vercel:
👉 [https://react-kanban-board-phi.vercel.app/](https://react-kanban-board-phi.vercel.app/)

Every push to main automatically redeploys the project.

## 🤖 AI Assistance Disclaimer
AI tools were used for:
- Debugging React state issues
- Resolving Tailwind configuration errors
- Fixing localStorage persistence edge cases
- Improving component structure and logic clarity

All code was manually implemented, tested, and optimized.
Detailed prompts are documented in `Prompts.md`.

## 👨💻 Author
**Krishna Kumar**
Frontend Developer Intern – Prodesk IT
