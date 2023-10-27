import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Navbar from "./components/navbar/Navbar";
import { isLogin } from "./functionComponent/authentication/CookiesFunction";
import Movies from "./pages/movies/Movies";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "../src/style.css";
import MyList from "./pages/mylist/MyList";
import Community from "./pages/community/Community";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
          <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
            {isLogin() ? <Navbar /> : null}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/community" element={<Community />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </body>
      </Router>
    </>
  );
}

export default App;
