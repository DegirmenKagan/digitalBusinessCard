import "./App.css";
import NameTag from "./components/NameTag";
import Info from "./components/Info";
import Footer from "./components/Footer";
import UploadAndDisplayImage from "./components/UploadAndDisplayImage";
function App() {
  function uploadImage() {}
  return (
    <div>
      <div className="App">
        <UploadAndDisplayImage />
        <div className="App--card">
          <NameTag />
          <Info />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
