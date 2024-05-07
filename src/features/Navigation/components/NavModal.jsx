import "../navigation.style.css";
import { Link } from "react-router-dom";
import { useTasksStore } from "../../../store/tasks/tasks.store";

const NavModal = ({ onNavModal }) => {
  const { tasks } = useTasksStore();

  return (
    <div className="nav_modal" onClick={onNavModal}>
      <Link to={{ pathname: "/" }}>Početna</Link>
      <Link to={{ pathname: "/createTask" }}>Kreiraj Task</Link>
      <Link to={{ pathname: "/taskList" }}>
        Lista taskova
        <span className={tasks.length > 0 ? "tasks_status" : null}>
          {tasks.length > 0 && tasks.length}
        </span>
      </Link>
      <Link to={{ pathname: "/about" }}>O nama</Link>
    </div>
  );
};

export default NavModal;
