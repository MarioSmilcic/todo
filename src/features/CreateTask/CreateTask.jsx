import Button from "../../components/Button/Button";
import "./createTask.style.css";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useState } from "react";
import { useNotificationStore } from "../../store/notification/notification.store";

const CreateTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const { addTask } = useTasksStore();
  const setNotifcation = useNotificationStore((state) => state.setNotification);

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task: enteredTask,
      id: Math.random(),
      isCompleted: false,
    };

    enteredTask.trim().length > 0 && addTask(newTask);
    setEnteredTask("");

    setNotifcation(true, "Task je uspješno kreiran!", "success");
  };

  return (
    <div className="create_task">
      <h2>Koji je tvoj sledeći task?</h2>
      <form onSubmit={submitHandler} className="form">
        <div>
          <input
            type="text"
            className="input"
            placeholder="Upiši..."
            value={enteredTask}
            onChange={handleEnteredTask}
            id={Math.random()}
            autoFocus
            maxLength={30}
          />
        </div>
        <Button text="Sačuvaj" />
      </form>
    </div>
  );
};

export default CreateTask;
