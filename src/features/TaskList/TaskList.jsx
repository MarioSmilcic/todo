import Task from "./components/Task";
import { useTasksStore } from "../../store/tasks/tasks.store";
import "./taskList.style.css";

const TaskList = () => {
  const { tasks } = useTasksStore();

  return (
    <div className="task_list">
      <div className="tasks_outer">
        <div className="task_about">
          <h2>Gotovi taskovi!</h2>
          <h3>Nastavi tako!</h3>
        </div>
        <div className="tasks_number">0/{tasks.length}</div>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task.task} />
      ))}
    </div>
  );
};

export default TaskList;
