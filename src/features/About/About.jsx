import "./about.style.css";
import Profile from "../../assets/profile2Cropped.png";

const About = () => {
  return (
    <div className="about">
      <div className="about_info">
        <div>
          <img src={Profile} alt="profilna" className="about_profile" />
          <h2>Mario Smilcic</h2>
        </div>
        <div>
          <div>
            <h3>Koristene tehnologije</h3>
            <ul>
              <li>React Js</li>
              <li>React Router</li>
              <li>Zustand</li>
              <li>MUI</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        Aplikacija Todo je napravljena u ReactJs biblioteci. Radi se o CRUD
        aplikaciji koja moze dodavati nove taskove, ucitati ih, mijenjati i
        brisati. Klikom na dugme novi task, dodajemo novi todo.
      </p>
    </div>
  );
};

export default About;
