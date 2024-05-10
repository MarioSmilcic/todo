import "../taskList.style.css";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useState } from "react";

const Task = ({ task, id, isCompleted }) => {
  const [isChecked, setisChecked] = useState(isCompleted);
  const { removeTask, markAsCompleted } = useTasksStore();

  const handleMarkTask = () => {
    markAsCompleted(id);
    setisChecked(!isChecked);
  };

  return (
    <div className="task">
      <div className="task_info">
        <input
          type="checkbox"
          id={id}
          value="isChecked"
          checked={isChecked}
          onChange={handleMarkTask}
        />
        <label htmlFor="task"></label>
        <p>{task}</p>
      </div>

      <div className="task_images">
        <img
          src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Edit"
          onClick={() => console.log(task)}
        />
        <img
          src="https://cdn-icons-png.freepik.com/256/7092/7092142.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Delete"
          onClick={() => removeTask(id)}
        />
      </div>
    </div>
  );
};

export default Task;
