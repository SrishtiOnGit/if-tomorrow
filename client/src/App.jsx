import "./App.css";
import Navbar from "./components/navbar";
import bg from "./assets/main.mp4";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <video src={bg} autoPlay muted loop className="video-bg"></video>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
