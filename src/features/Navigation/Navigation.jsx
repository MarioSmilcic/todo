import { Link } from "react-router-dom";
import "./navigation.style.css";
import Logo from "../../components/Logo/Logo";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const { tasks } = useTasksStore();
  return (
    <div className="navigation">
      <div className="logo">
        <Logo
          color="#2c3d50"
          width="54px"
          onNavigate={() => handleNavigate()}
        />
      </div>
      <div className="links">
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
    </div>
  );
};

export default Navigation;
