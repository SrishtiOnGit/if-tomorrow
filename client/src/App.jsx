import "./App.css";
import Navbar from "./components/navbar";
import bg from "./assets/main.mp4";
import Hero from "./components/hero";
import Features from "./components/features";

function App() {
  return (
    <div className="App">
      <video src={bg} autoPlay muted loop className="video-bg"></video>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
