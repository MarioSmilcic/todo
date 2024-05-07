import Button from "../../components/Button/Button";
import "./createTask.style.css";
import { useTasksStore } from "../../store/tasks/tasks.store";

const CreateTask = () => {
  const { addTasks } = useTasksStore();
  return (
    <div className="create_task">
      <h2>Koji je tvoj sledeći task?</h2>
      <div>
        <input type="text" className="input" placeholder="Upiši..." />
      </div>
      <Button text="Sačuvaj" />
    </div>
  );
};

export default CreateTask;
