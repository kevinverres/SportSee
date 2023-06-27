import { Link, useLocation } from "react-router-dom";
import "../../assets/css/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Header({ logo, alt, id }) {
  const location = useLocation();
  // console.log(location.pathname)
    if (location.pathname === "/") {
      return (
        <header>
          <img className="header-logo" src={logo} alt={alt} />
          <div className="header-navigation">
          </div>
        </header>
      )
    } else if (location.pathname === "/user/"+id) {
        return (
        <header>
          <img className="header-logo" src={logo} alt={alt} />
          <div className="header-navigation">
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
            <Link to={`/`}><FontAwesomeIcon className="icon-off" icon={faPowerOff} /></Link>
          </div>
        </header>
      )
    }
}

export default Header;
