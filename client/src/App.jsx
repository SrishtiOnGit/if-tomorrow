import "./App.css";
import Navbar from "./components/navbar";
import bg from "./assets/main.mp4";

function App() {
  return (
    <div className="App">
      <video src={bg} autoPlay muted loop className="video-bg"></video>
      <Navbar />
    </div>
  );
}

export default App;
