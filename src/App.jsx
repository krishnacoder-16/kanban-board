import { useState } from "react";
import Column from "./components/Column";
import AddTask from "./components/AddTask";
import bgImage from "./assets/bg.png";


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title,priority) => {
    const newTask = {
      id: Date.now(),
      title,
      status: "todo",
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
  <div
    className="min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

    <div className="relative z-10 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Kanban Task Board
      </h1>

      <AddTask addTask={addTask} />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Column
          title="To Do"
          status="todo"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
        <Column
          title="In Progress"
          status="progress"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
        <Column
          title="Done"
          status="done"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
      </div>
    </div>
  </div>
);
}
export default App;
