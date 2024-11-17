import { useState, useEffect } from "react";
import { useModalsStore } from "../../../store/modals/modals.store";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useNotificationStore } from "../../../store/notification/notification.store";

export const useModal = () => {
  const { modal, closeModal } = useModalsStore();
  const { updateTask, removeTask } = useTasksStore();
  const setNotification = useNotificationStore(
    (state) => state.setNotification
  );
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (modal.isOpen && modal.type === "edit") {
      setTaskText(modal.data.task);
    }
  }, [modal.isOpen, modal.type, modal.data]);

  const handleAction = (e) => {
    if (e) e.preventDefault();

    switch (modal.type) {
      case "edit":
        const trimmedTask = taskText.trim();
        if (trimmedTask.length > 0 && modal.data.task !== trimmedTask) {
          updateTask(modal.data.id, { task: trimmedTask });
          setNotification(
            true,
            "The task has been successfully edited!",
            "success"
          );
        }
        break;
      case "delete":
        removeTask(modal.data.id);
        setNotification(true, "The task was successfully deleted!", "error");
        break;
    }
    closeModal();
  };

  const getModalContent = () => {
    const configs = {
      edit: {
        title: "Update Task",
        content: (
          <form onSubmit={handleAction} className="modal_form">
            <input
              type="text"
              id="taskInput"
              name="taskInput"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="modal_input"
              autoFocus
              maxLength={30}
              placeholder="Enter your task..."
              aria-label="Task input field"
            />
          </form>
        ),
      },
      delete: {
        title: "Delete Task",
        content: (
          <h3 className="modal_question">
            Are you sure you want to delete this task?
          </h3>
        ),
      },
    };

    return configs[modal.type] || null;
  };

  return {
    modal,
    closeModal,
    handleAction,
    modalContent: getModalContent(),
  };
};
