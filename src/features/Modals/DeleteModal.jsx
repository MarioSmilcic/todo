import "./modals.style.css";
import Button from "../..//components/Button/Button";
import { useTasksStore } from "../../store/tasks/tasks.store";
import Card from "./components/Card";

const DeleteModal = ({ task, onClose, isSuccessDeleted }) => {
  const { removeTask } = useTasksStore();

  const handleDelete = () => {
    isSuccessDeleted();
    removeTask(task.id);
  };

  return (
    <Card>
      <div className="modal">
        <h3 className="modal_title">Delete Task</h3>
        <h3 className="modal_question">Are you sure?</h3>
        <div className="buttons">
          <Button text="Confirm" handleClick={handleDelete} />
          <Button text="Dismiss" handleClick={() => onClose()} />
        </div>
      </div>
    </Card>
  );
};

export default DeleteModal;
