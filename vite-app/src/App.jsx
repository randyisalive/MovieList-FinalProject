import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Navbar from "./components/navbar/Navbar";
import { isLogin } from "./functionComponent/authentication/CookiesFunction";
import Movies from "./pages/movies/Movies";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import MyList from "./pages/mylist/MyList";

function App() {
  return (
    <>
      <Router>
        {isLogin() ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/mylist/:id" element={<MyList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
