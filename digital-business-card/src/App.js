import "./App.css";
import NameTag from "./components/NameTag";
import Info from "./components/Info";
import Footer from "./components/Footer";
import profileIcon from "./assets/profile-icon.png";
function App() {
  return (
    <div className="App">
      <img className="App--img" src={profileIcon} />
      <div className="App--card">
        <NameTag />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
