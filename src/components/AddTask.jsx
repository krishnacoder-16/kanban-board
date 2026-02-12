import { useState } from "react";

function AddTask({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    addTask(input, priority);
    setInput("");
  };
  const [priority, setPriority] = useState("low");

  return (
    <div className="flex justify-center gap-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
      <input
    type="text"
    placeholder="Enter a new task..."
    className="w-72 p-3 rounded-lg border shadow-sm focus:outline-none"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />

  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    className="p-3 rounded-lg border shadow-sm focus:outline-none"
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>

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
