import "../taskList.style.css";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useState } from "react";
import Backdrop from "../../Modals/Backdrop";
import EditModal from "../../Modals/EditModal";
import DeleteModal from "../../Modals/DeleteModal";

const Task = ({ task, id, isCompleted }) => {
  const [isChecked, setisChecked] = useState(isCompleted);

  const [backdrop, setBackdrop] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const { markAsCompleted } = useTasksStore();

  const handleMarkTask = () => {
    markAsCompleted(id);
    setisChecked(!isChecked);
  };

  const handleModal = () => {
    setBackdrop(true);
    setEditModal(true);
  };

  const handleCloseModal = () => {
    setBackdrop(false);
    setEditModal(false);
    setDeleteModal(false);
  };

  const handleDeleteModal = () => {
    setBackdrop(true);
    setDeleteModal(true);
  };

  const editTask = { task, id, isCompleted };

  return (
    <>
      <div className="task">
        <div className="task_info">
          <input
            type="checkbox"
            className="task_info__input"
            id={id}
            value="isChecked"
            checked={isChecked}
            onChange={handleMarkTask}
          />

          <p className={`${isChecked && "task_checked"}`}>{task}</p>
        </div>

        <div className="task_images">
          <img
            src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
            alt="Edit"
            onClick={handleModal}
          />
          <img
            src="https://cdn-icons-png.freepik.com/256/7092/7092142.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
            alt="Delete"
            onClick={handleDeleteModal}
          />
        </div>
      </div>
      {backdrop && <Backdrop onCancel={handleCloseModal} />}
      {editModal && <EditModal task={editTask} onClose={handleCloseModal} />}
      {deleteModal && (
        <DeleteModal onClose={handleCloseModal} task={editTask} />
      )}
    </>
  );
};

export default Task;
