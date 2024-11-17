import { useState } from "react";
import { motion } from "framer-motion";
import EditIcon from "../../../components/icons/EditIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useModalsStore } from "../../../store/modals/modals.store";
import "../taskList.style.css";
import { taskVariants } from "../../../utils/animations/variants";

const Task = ({ task, id, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const { markAsCompleted } = useTasksStore();
  const { showModal } = useModalsStore();

  const handleMarkTask = () => {
    markAsCompleted(id);
    setIsChecked(!isChecked);
  };

  const taskData = { task, id, isCompleted };

  return (
    <motion.div
      className="task"
      variants={taskVariants}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(166, 166, 166, 0.3)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="task_info">
        <motion.input
          type="checkbox"
          className="task_info__input"
          id={id}
          checked={isChecked}
          onChange={handleMarkTask}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.p
          className={isChecked ? "task_checked" : ""}
          initial={{ color: "rgba(255, 255, 255, 1)" }}
          animate={{
            color: isChecked
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(255, 255, 255, 1)",
          }}
          transition={{ duration: 0.2 }}
        >
          {task}
        </motion.p>
      </div>

      <div className="task_images">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <EditIcon onClick={() => showModal("edit", taskData)} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <DeleteIcon onClick={() => showModal("delete", taskData)} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Task;
