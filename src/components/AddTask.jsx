import { useState } from "react";

function AddTask({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex justify-center gap-4">
      <input
        type="text"
        placeholder="Enter a new task..."
        className="w-80 p-3 rounded-lg border shadow-sm focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
