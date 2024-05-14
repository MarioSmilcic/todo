import "./modals.style.css";
import Card from "./components/Card";
import { useState } from "react";
import { useTasksStore } from "../../store/tasks/tasks.store";
import Button from "../../components/Button/Button";

const EditModal = ({ task, onClose }) => {
  const [enteredTask, setEnteredTask] = useState(task.task);

  const { updateTask } = useTasksStore();

  const handleCloseModal = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      task: enteredTask,
      // id: task.id,
      // isCompleted: task.isCompleted,
    };

    enteredTask.trim().length > 0
      ? updateTask(task.id, updatedTask, onClose())
      : null;
  };

  return (
    <Card>
      <div className="modal">
        <form onSubmit={handleUpdate} name="update" className="modal">
          <h3 className="modal_title">Update Task</h3>

          <input
            type="text"
            value={enteredTask}
            id={task.id}
            onChange={handleEnteredTask}
            autoFocus
            className="modal_input"
          />
          <div className="buttons">
            <Button text="Confirm" />
            {/* <Button text="Dismiss" handleClick={() => onClose()} /> */}
            <Button text="Dismiss" handleClick={handleCloseModal} />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditModal;
