import TaskCard from "./TaskCard";

function Column({ title, status, tasks, deleteTask, moveTask }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
