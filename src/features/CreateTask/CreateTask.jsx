import Button from "../../components/Button/Button";
import "./createTask.style.css";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const CreateTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isSuccessAdded, setIsSuccessAdded] = useState(false);

  const { addTask } = useTasksStore();

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };
  const handleClose = () => {
    setIsSuccessAdded(false);
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
    setIsSuccessAdded(true);
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
          />
        </div>
        <Button text="Sačuvaj" />
      </form>

      <Snackbar
        open={isSuccessAdded}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task successfully added!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreateTask;
