import "./modals.style.css";

const Backdrop = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel}></div>;
};

export default Backdrop;
