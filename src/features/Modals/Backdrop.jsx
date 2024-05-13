import "./modals.style.css";

const Backdrop = ({ onCancel }) => {
  return <div className="backdrop" onClick={onCancel}></div>;
  //   return <div className="backdrop"></div>;
};

export default Backdrop;
