import "./hamburger.style.css";

const Hamburger = ({ onModal }) => {
  return (
    <div className="hamburger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 50 50"
        fill="#2c3d50"
        onClick={onModal}
      >
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>
    </div>
  );
};

export default Hamburger;
