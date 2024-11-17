import { Link } from "react-router-dom";
import "./navigation.style.css";
import Logo from "../../components/Logo/Logo";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../components/Hamburger/Hamburger";
import NavModal from "./components/NavModal";
import { useState } from "react";
import { navigationLinks } from "../../data/app-data";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { tasks } = useTasksStore();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleNavigate = () => {
    navigate("/");
    setShowModal(false);
  };

  return (
    <div className="navigation">
      <div className="nav_svg">
        <Logo color="#002332" width="54px" onNavigate={handleNavigate} />
        <div className="links">
          {navigationLinks.map((link) => (
            <Link key={link.id} to={link.to}>
              {link.text}
              {link.showStatus && (
                <span className={tasks.length > 0 ? "tasks_status" : null}>
                  {tasks.length > 0 && tasks.length}
                </span>
              )}
            </Link>
          ))}
        </div>
        {!showModal && <Hamburger onModal={handleModal} />}
      </div>
      {showModal && <NavModal onNavModal={handleModal} />}
    </div>
  );
};

export default Navigation;
