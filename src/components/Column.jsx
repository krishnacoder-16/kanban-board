import TaskCard from "./TaskCard";

function Column({ title, status, tasks, deleteTask, moveTask,updateTask }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-5">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            moveTask={moveTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
