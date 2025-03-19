import React from "react";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="bg-white w-[70%] h-100vh m-auto border rounded ">
      <h1 className="text-center text-pink-700 text-4xl m-6">To-DO-List-App</h1>
      <div className="text-center space-x-1 mb-20">
        <input
          className="w-90 p-2 border-2 rounded-3xl"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter New Tasks"
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 p-2 border rounded-2xl hover:scale-110"
        >
          Add Task
        </button>
      </div>
      <ul className="text-white w-[90%] m-auto">
        {tasks.map((task, index) => (
          <li
            className="bg-gray-700 flex justify-between border-2 rounded-3xl m-2 p-4 text-2xl hover:bg-black"
            key={index}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />

            {task.text}
            <button onClick={() => deleteTask(index)}>
              <span>
                <MdDelete />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
