import React from "react";
import { useState } from "react";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="bg-white w-[70%] h-100vh m-auto border rounded ">
      <h1 className="text-center text-pink-700 text-4xl m-6">To-DO-List-App</h1>
      <div className="text-center space-x-1">
        <input
          className="w-90 p-2 border-2 rounded-3xl"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter New Tasks"
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 p-2 border rounded-2xl"
        >
          Add Task
        </button>
      </div>
      <div className="text-center m-4 text-white ">
        <button className="bg-green-700 text-2xl p-2 border rounded-2xl">
          Save to the local storage
        </button>
      </div>
      <ul className="text-white w-[90%] m-auto">
        {tasks.map((task, index) => (
          <li
            className="bg-gray-700 flex justify-between border-2 rounded-3xl m-2 p-4 text-2xl hover:bg-black"
            key={index}
          >
            {task.text}
            <button onClick={() => deleteTask(index)}>
              <span className="bg-red-600 text-3xl border rounded">Delete</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
