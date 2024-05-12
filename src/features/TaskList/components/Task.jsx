import "../taskList.style.css";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useState } from "react";

const Task = ({ task, id, isCompleted }) => {
  const [isChecked, setisChecked] = useState(isCompleted);
  const [isEditing, setisEditing] = useState(false);
  const [enteredTask, setEnteredTask] = useState(task);

  const { removeTask, markAsCompleted, updateTask } = useTasksStore();

  const handleMarkTask = () => {
    markAsCompleted(id);
    setisChecked(!isChecked);
  };

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleUpdateClick = () => {
    setisEditing(!isEditing);
  };

  ////UPDATE

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      task: enteredTask,
      id: id,
      isCompleted: isCompleted,
    };

    // enteredTask.trim().length > 0 && updateTask(updatedTask);

    // setisEditing(!isEditing);
    // setEnteredTask(e.target.value);

    if (enteredTask.trim().length > 0) {
      updateTask(updatedTask);
      setisEditing(!isEditing);
    } else {
      setisEditing(true);
    }
  };

  return (
    <div className="task">
      <div className="task_info">
        <input
          type="checkbox"
          className="task_info__input"
          id={id}
          value="isChecked"
          checked={isChecked}
          onChange={handleMarkTask}
        />
        {/* <p>{task}</p> */}

        {isEditing ? (
          <div>
            <form onSubmit={handleUpdate} name="update">
              <input
                type="text"
                className="edit_input"
                value={enteredTask}
                id={id}
                onChange={handleEnteredTask}
                autoFocus
              />
            </form>
          </div>
        ) : (
          <p>{task}</p>
        )}
      </div>

      <div className="task_images">
        <img
          src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Edit"
          onClick={handleUpdateClick}
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
