import { Link } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../pages/authentication/Logout";

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
                <button onClick={() => Logout()}>Log out</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
