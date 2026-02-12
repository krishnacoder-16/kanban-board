function TaskCard({ task, deleteTask, moveTask }) {
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

      <p className="mb-3">{task.title}</p>
      
      <p className="text-sm opacity-70 capitalize">
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
