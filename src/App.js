import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import logo from "./assets/img/logo-sportsee.png";
import Home from "./page/Home";
const alt = "Logo SportSee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home logo={logo} alt={alt} />}
          />
          <Route
            path="/user/:id"
            element={<MainPage logo={logo} alt={alt} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
