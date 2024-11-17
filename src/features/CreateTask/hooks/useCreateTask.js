import { useState } from "react";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useNotificationStore } from "../../../store/notification/notification.store";

export const useCreateTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const { addTask } = useTasksStore();
  const setNotifcation = useNotificationStore((state) => state.setNotification);

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      task: enteredTask,
      id: Math.random(),
      isCompleted: false,
    };

    if (enteredTask.length > 0) {
      addTask(newTask);
      setEnteredTask("");
      setNotifcation(true, "The task was successfully created!", "success");
    }
  };

  return {
    enteredTask,
    handleEnteredTask,
    taskSubmitHandler,
  };
};
