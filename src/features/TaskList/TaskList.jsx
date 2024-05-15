import Task from "./components/Task";
import { useTasksStore } from "../../store/tasks/tasks.store";
import "./taskList.style.css";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { useState } from "react";

const TaskList = () => {
  const [isSuccessDeleted, setIsSuccessDeleted] = useState(false);

  const { tasks } = useTasksStore();

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const handleClose = () => {
    setIsSuccessDeleted(false);
  };

  return (
    <>
      <div className="task_list">
        <div className="tasks_outer">
          <div className="task_about">
            <h2>Gotovi taskovi!</h2>
            <h3 className={tasks.length === 0 ? "task_KeepGoing" : null}>
              Nastavi tako!
            </h3>
          </div>
          <div className="tasks_number">
            {completedTasks}/{tasks.length}
          </div>
        </div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task.task}
            id={task.id}
            isCompleted={task.isCompleted}
            // isSuccessDeleted={isSuccessDeleted}
            isSuccessDeleted={() => setIsSuccessDeleted(true)}
          />
        ))}
      </div>
      <Snackbar
        open={isSuccessDeleted}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task successfully deleted!
        </Alert>
      </Snackbar>
    </>
  );
};

export default TaskList;
