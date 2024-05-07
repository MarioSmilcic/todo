import { Link } from "react-router-dom";
import "./navigation.style.css";
import Logo from "../../components/Logo/Logo";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../components/Hamburger/Hamburger";
import NavModal from "./components/NavModal";
import { useState } from "react";
import Close from "../../components/Close/Close";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleNavigate = () => {
    navigate("/");
    setShowModal(false);
  };

  const { tasks } = useTasksStore();

  return (
    <div className="navigation">
      <div className="nav_svg">
        <Logo
          color="#2c3d50"
          width="54px"
          onNavigate={() => handleNavigate()}
        />
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
        {!showModal && <Hamburger onModal={handleModal} />}
        {showModal && <Close onClose={handleModal} />}
      </div>
      {/* {showModal && <NavModal onNavModal={handleModal} />} */}
      {showModal && <NavModal onNavModal={handleModal} />}
    </div>
  );
};

export default Navigation;
