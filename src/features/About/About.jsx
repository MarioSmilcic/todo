import "./about.style.css";
import Profile from "../../assets/profile.png";

const About = () => {
  return (
    <div className="about">
      <h1 className="about_title">O nama</h1>
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
      <div className="about_text">
        <p>
          Aplikacija Todo je napravljena u programskom jeziku JavaScript i
          biblioteci React. Za promjenu stranica koristena je bibilioteka React
          Router. Aplikacija je responzivna, a za styling je koristen Vanilla
          Css.
        </p>
        <p>
          Radi se o CRUD aplikaciji koja moze dodavati nove taskove, ucitati ih,
          mijenjati i brisati. Ako na pocetnoj stranici kliknemo "Kreiraj"
          bicemo proslijedjeni na stranicu "Kreiraj Task". Kada u polju "Upisi"
          unesemo novi task i kliknemo "Sacuvaj" pojavice se modal sa porukom
          "Task je uspjesno kreiran". Na stranici "Lista taskova" mozemo vidjeti
          sve unesene taskove. Pored svakog unesenog taska nalazi se krug, cijim
          klikom oznacavamo da je task zavrsen. Ako kliknemo ikonu "edit" ili
          'delete' otvorice se modal u kojem mozemo mijenjati, odnosno brisati
          task, a dugmetom za potvrdu, task ce biti editovan, odnosno obrisan.
        </p>
      </div>
    </div>
  );
};

export default About;
