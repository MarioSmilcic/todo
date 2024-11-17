import "../navigation.style.css";
import { Link } from "react-router-dom";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import Backdrop from "../../../components/modals/Backdrop";
import Close from "../../../components/Close/Close";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "../../../data/app-data";
import {
  sidebarVariants,
  linkVariants,
} from "../../../utils/animations/variants";

const NavModal = ({ onNavModal }) => {
  const { tasks } = useTasksStore();

  return (
    <AnimatePresence mode="wait">
      <>
        <Backdrop onCancel={onNavModal}>
          <motion.div
            className="nav_modal open"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav_modal_header">
              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Close onClose={onNavModal} />
              </motion.div>
            </div>

            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.id}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to={link.to} onClick={onNavModal}>
                  {link.text}
                  {link.showStatus && (
                    <span className={tasks.length > 0 ? "tasks_status" : null}>
                      {tasks.length > 0 && tasks.length}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Backdrop>
      </>
    </AnimatePresence>
  );
};

export default NavModal;
