import { Link } from "react-router-dom";
import "./Navbar.css";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import TitlePage from "../universal/TitlePage";
import Navigation from "./Navigation";
import NavbarDropdown from "./dropdown/NavbarDropdown";
import logOut from "../../functionComponent/authentication/logOut";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex flex-start">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Movie List
            </Link>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Sign Up</button>
            <button className="btn btn-danger" onClick={() => logOut()}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <NavbarDropdown />
      <div className="container py-2">
        <TitlePage />
      </div>
    </>
  );
}

export default Navbar;
