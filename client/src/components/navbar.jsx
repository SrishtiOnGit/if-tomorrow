import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <h1 className="logo">IT</h1>
        <p className="title">If-tomorrow</p>
      </div>

      <nav>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
