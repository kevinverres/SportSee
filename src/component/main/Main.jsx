import CardIcon from "./CardIcon";
import "../../assets/css/Main.css";
import PersonBiking from "../../assets/img/picto-cycling.png";
import Dumbbell from "../../assets/img/picto-bodybuilding.png";
import PersonSwimming from "../../assets/img/picto-swimming.png";
import PersonMeditation from "../../assets/img/picto-meditation.png";
import { useEffect, useState } from "react";
import { getUserInfos } from "../../service/service";
import Activities from "./Activities";
import CardDataCorps from "./CardDataCorps";
import imgCalories from "../../assets/img/icon-calorie.png";
import imgCarbohydrate from "../../assets/img/icon-carbohydrate.png";
import imgLipid from "../../assets/img/icon-lipid.png";
import imgProtein from "../../assets/img/icon-protein.png";
import Average from "./Average";
import Performance from "./Performance";
import Score from "./Score";

function Main({ id }) {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [key, setKey] = useState([]);
  const [mock, setMock] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await getUserInfos(id);

        setData(response);
        setFirstName(response.userInfos.firstName);
        setKey(response.keyData);
        setMock(response.mock);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, [id]);
  // console.log(data);
  if (loading) {
    return (
      <main>
        <div className="navigation">
          <p>Copiryght, SportSee 2023</p>
        </div>
        <div className="container container-error">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="navigation">
          <CardIcon icon={PersonMeditation} />
          <CardIcon icon={PersonSwimming} />
          <CardIcon icon={PersonBiking} />
          <CardIcon icon={Dumbbell} />
          <p>Copiryght, SportSee 2023</p>
        </div>
        <div className="container">
          <div className="container-welcome">
            <h1>
              Bonjour <span>{firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            {mock && (
              <small className="errorMsg">
                Erreur serveur 404 les données sont affichées via le mock
              </small>
            )}
          </div>
          <div className="container-all">
            <div className="box-charts">
              <Activities id={id} />
              <div className="flex-charts">
                <Average id={id} />
                <Performance id={id} />
                <Score score={data} />
              </div>
            </div>
            <div className="flex-card">
              <CardDataCorps
                img={imgCalories}
                data={key.calorieCount + "kCal"}
                label={"Calories"}
              />
              <CardDataCorps
                img={imgProtein}
                data={key.proteinCount + "g"}
                label={"Proteines"}
              />
              <CardDataCorps
                img={imgCarbohydrate}
                data={key.carbohydrateCount + "g"}
                label={"Glucides"}
              />
              <CardDataCorps
                img={imgLipid}
                data={key.lipidCount + "g"}
                label={"Lipides"}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
