function TaskCard({ task, deleteTask, moveTask }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
      <p className="mb-3">{task.title}</p>

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
