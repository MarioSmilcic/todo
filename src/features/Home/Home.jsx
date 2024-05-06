import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./home.style.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/createTask");
  };

  return (
    <div className="home">
      <div className="home_text">
        <h2>Šta planiraš danas?</h2>
        <h2>Kreiraj svoj novi task!</h2>
      </div>
      <Button text="Kreiraj" onNavigate={() => handleNavigate()} />
      {/* <button onClick={() => handleNavigate()}>Otvori</button> */}
    </div>
  );
};

export default Home;
