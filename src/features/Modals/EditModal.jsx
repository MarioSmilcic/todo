import "./modals.style.css";
import { useState } from "react";
import { useTasksStore } from "../../store/tasks/tasks.store";

const EditModal = ({ task, onClose }) => {
  const [enteredTask, setEnteredTask] = useState(task.task);

  const { updateTask } = useTasksStore();

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      task: enteredTask,
      id: task.id,
      isCompleted: task.isCompleted,
    };

    enteredTask.trim().length > 0 ? updateTask(updatedTask, onClose()) : null;
  };

  return (
    <div>
      <div className="modal">
        <div>
          <h3 className="update_title">Update Task</h3>
        </div>
        <form onSubmit={handleUpdate} name="update">
          <input
            type="text"
            value={enteredTask}
            id={task.id}
            onChange={handleEnteredTask}
            autoFocus
            className="modal_input"
          />
        </form>
      </div>
    </div>
  );
};

export default EditModal;
