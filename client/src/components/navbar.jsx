import bg from "../assets/hero.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={bg} alt="background" className="hero-img" />
      <h1>if-tomorrow</h1>
    </div>
  );
};

export default Navbar;
