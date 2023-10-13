import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="card" id="navbar-container">
        <nav className="navbar">
          <div className="container-fluid d-flex">
            <div className="right">
              <span className="navbar-brand mb-0 h1 text-white">MovieList</span>
            </div>
            <div className="left">
              <ul className="navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
