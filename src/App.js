import "./App.css";
import MainFooter from "./components/main-section/FooterInfo";
import Header from "./components/main-section/Header";
import MainIndex from "./components/main-section/MainIndex";
import NavigationBar from "./components/main-section/NavigationBar";

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <MainIndex />
      <MainFooter />
    </div>
  )
}

export default App;
