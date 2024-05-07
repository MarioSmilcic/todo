import "../taskList.style.css";

const Task = ({ task }) => {
  return (
    <div className="task">
      <div className="task_info">
        <input type="radio" name="radio" />
        {/* <input type="radio" /> */}
        <label htmlFor="task"></label>
        <p>{task}</p>
      </div>

      <div className="task_images">
        <img
          src="https://cdn-icons-png.freepik.com/256/4203/4203611.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Edit"
        />
        <img
          src="https://cdn-icons-png.freepik.com/256/7092/7092142.png?ga=GA1.1.175313777.1710781203&semt=ais_hybrid"
          alt="Delete"
        />
      </div>
    </div>
  );
};

export default Task;
