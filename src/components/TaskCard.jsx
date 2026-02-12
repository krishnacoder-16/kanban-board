import { useState } from "react";

function TaskCard({ task, deleteTask, moveTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);

  return (
    <div
      className={`p-4 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300 border-l-4 ${
        task.priority === "high"
          ? "border-red-500"
          : task.priority === "medium"
          ? "border-yellow-400"
          : "border-green-500"
      } bg-white/30 backdrop-blur-md`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={() => {
            updateTask(task.id, editedText);
            setIsEditing(false);
          }}
          className="w-full p-2 rounded border focus:outline-none"
          autoFocus
        />
      ) : (
        <p
          className="mb-1 font-medium cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {task.title}
        </p>
      )}

      <p className="text-sm opacity-70 capitalize mb-2">
        Priority: {task.priority}
      </p>

      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2">
          {task.status !== "todo" && (
            <button
              onClick={() => moveTask(task.id, "todo")}
              className="text-blue-600 hover:underline"
            >
              To Do
            </button>
          )}

          {task.status !== "progress" && (
            <button
              onClick={() => moveTask(task.id, "progress")}
              className="text-yellow-600 hover:underline"
            >
              Progress
            </button>
          )}

          {task.status !== "done" && (
            <button
              onClick={() => moveTask(task.id, "done")}
              className="text-green-600 hover:underline"
            >
              Done
            </button>
          )}
        </div>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
