import "./modals.style.css";
import Card from "./components/Card";
import { useState } from "react";
import { useTasksStore } from "../../store/tasks/tasks.store";
import Button from "../../components/Button/Button";
import { useNotificationStore } from "../../store/notification/notification.store";

const EditModal = ({ task, onClose }) => {
  const [enteredTask, setEnteredTask] = useState(task.task);

  const { updateTask } = useTasksStore();

  const setNotifcation = useNotificationStore((state) => state.setNotification);

  const handleModals = () => {
    onClose();
    setNotifcation(true, "Task je uspješno editovan!", "info");
  };

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
    };

    if ((enteredTask.length > 0) & (task.task !== enteredTask)) {
      updateTask(task.id, updatedTask);
      handleModals();
    }
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
            maxLength={30}
          />
          <div className="buttons">
            <Button text="Confirm" />
            <Button text="Dismiss" handleClick={handleCloseModal} />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditModal;
