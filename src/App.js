import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMeMain from "./components/aboutMe/MainAboutMe";
import MainPage from "./components/main-section/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMeMain />} />
      </Routes>
    </Router>
  );
}

export default App;
