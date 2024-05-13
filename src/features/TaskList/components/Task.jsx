import "../taskList.style.css";
import { useTasksStore } from "../../../store/tasks/tasks.store";
import { useState } from "react";

const Task = ({ task, id, isCompleted }) => {
  const [isChecked, setisChecked] = useState(isCompleted);
  const [isEditing, setisEditing] = useState(false);
  const [enteredTask, setEnteredTask] = useState(task);

  const { removeTask, markAsCompleted, updateTask } = useTasksStore();

  const handleMarkTask = () => {
    markAsCompleted(id);
    setisChecked(!isChecked);
  };

  const handleEnteredTask = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleUpdateClick = () => {
    setisEditing(!isEditing);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = {
      task: enteredTask,
      id: id,
      isCompleted: isCompleted,
    };

    if (enteredTask.trim().length > 0) {
      updateTask(updatedTask);
      setisEditing(!isEditing);
    } else {
      setisEditing(true);
    }
  };

  return (
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

        {isEditing ? (
          <div>
            <form onSubmit={handleUpdate} name="update">
              <input
                type="text"
                className="edit_input"
                value={enteredTask}
                id={id}
                onChange={handleEnteredTask}
                autoFocus
              />
            </form>
          </div>
        ) : (
          <p>{task}</p>
        )}
      </div>

      <div className="task_images">
        <img
          src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Edit"
          onClick={handleUpdateClick}
        />
        <img
          src="https://cdn-icons-png.freepik.com/256/7092/7092142.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Delete"
          onClick={() => removeTask(id)}
        />
      </div>
    </div>
  );
};

export default Task;

///SECOND SOLUTION////////

// import "../taskList.style.css";
// import { useTasksStore } from "../../../store/tasks/tasks.store";
// import { useState } from "react";
// import Backdrop from "../../Modals/Backdrop";
// import EditModal from "../../Modals/EditModal";

// const Task = ({ task, id, isCompleted }) => {
//   const [isChecked, setisChecked] = useState(isCompleted);

//   const [backdrop, setBackdrop] = useState(null);
//   const [editModal, setEditModal] = useState(null);

//   const { removeTask, markAsCompleted, updateTask } = useTasksStore();

//   const handleMarkTask = () => {
//     markAsCompleted(id);
//     setisChecked(!isChecked);
//   };

//   const handleModal = () => {
//     setBackdrop(true);
//     setEditModal(true);
//   };

//   const handleCloseModal = () => {
//     setBackdrop(false);
//     setEditModal(false);
//   };

//   const editTask = { task, id, isCompleted };

//   return (
//     <>
//       <div className="task">
//         <div className="task_info">
//           <input
//             type="checkbox"
//             className="task_info__input"
//             id={id}
//             value="isChecked"
//             checked={isChecked}
//             onChange={handleMarkTask}
//           />

//           <p>{task}</p>
//         </div>

//         <div className="task_images">
//           <img
//             src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
//             alt="Edit"
//             onClick={handleModal}
//           />
//           <img
//             src="https://cdn-icons-png.freepik.com/256/7092/7092142.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
//             alt="Delete"
//             onClick={() => removeTask(id)}
//           />
//         </div>
//       </div>
//       {backdrop && <Backdrop onCancel={handleCloseModal} />}
//       {editModal && <EditModal task={editTask} onClose={handleCloseModal} />}
//     </>
//   );
// };

// export default Task;
