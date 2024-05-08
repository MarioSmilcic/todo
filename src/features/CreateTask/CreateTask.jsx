import Button from "../../components/Button/Button";
import "./createTask.style.css";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useState } from "react";

const CreateTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const { addTask } = useTasksStore();

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task: enteredTask,
      id: Math.random(),
    };

    enteredTask.trim().length > 0 && addTask(newTask);
    setEnteredTask("");
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
          />
        </div>
        <Button text="Sačuvaj" />
      </form>
    </div>
  );
};

export default CreateTask;
