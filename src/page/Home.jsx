import Header from "../component/header/Header";
import { Link, useLocation } from "react-router-dom";
import men from "../assets/img/men.png";
import woman from "../assets/img/woman.png";
import USER_MAIN_DATA from "../mock/dataMock";

function Home({ logo, alt }) {
  return (
    <>
      <Header logo={logo} alt={alt} />
      <main>
        <div className="navigation">
          <p>Copiryght, SportSee 2023</p>
        </div>
        <div className="container container-error">
          <img src={logo} alt={alt} />
          <h2 className="Error-main">Veuillez choisir un utilisateur</h2>
          <div className="box-user">
            <Link to={`/user/12`} className="Error-button">
              <img src={men} alt="Homme" />
              <h1>
                {USER_MAIN_DATA[0].userInfos.firstName +
                  " " +
                  USER_MAIN_DATA[0].userInfos.lastName}
              </h1>
              <span>{USER_MAIN_DATA[0].userInfos.age + " ans"}</span>
            </Link>
            <Link to={`/user/18`} className="Error-button">
              <img src={woman} alt="Femme" />
              <h1>
                {USER_MAIN_DATA[1].userInfos.firstName +
                  " " +
                  USER_MAIN_DATA[1].userInfos.lastName}
              </h1>
              <span>{USER_MAIN_DATA[1].userInfos.age + " ans"}</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
