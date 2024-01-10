import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMeMain from "./components/aboutMe/MainAboutMe";
import MainPage from "./components/main-section/MainPage";
import WorkExperience from "./components/workExperience/WorkExperience";
import MyProjects from "./components/myProjects/MyProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMeMain />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
