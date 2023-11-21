import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Navbar from "./components/navbar/Navbar";
import { isLogin } from "./functionComponent/authentication/CookiesFunction";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "../src/style.css";
import MyList from "./pages/mylist/MyList";
import Community from "./pages/community/Community";
import Profile from "./pages/profile/Profile";
import AllMovies from "./pages/movies/AllMovies";
import DetailMovies from "./pages/movies/DetailMovies";
import AllActors from "./pages/movies/AllActors";
import MovieDiscussion from "./pages/community/MovieDiscussion";
import ReviewsMoviesForm from "./pages/reviews/ReviewsMoviesForm";
import ReviewsMoviesDetails from "./pages/reviews/ReviewsMoviesDetails";
import Create from "./pages/authentication/Create";
import ViewList from "./pages/mylist/ViewList";
import ViewProfile from "./pages/profile/ViewProfile";
import Friends from "./pages/friends/Friends";

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
              <Route path="/create" element={<Create />} />
              <Route path="/community" element={<Community />} />
              <Route
                path="/community/Movie Discussion"
                element={<MovieDiscussion />}
              />
              <Route
                path="/community/Movie Discussion/:id/:movie_id/:title"
                element={<ReviewsMoviesDetails />}
              />
              <Route path="/movies" element={<AllMovies />} />
              <Route path="/movies/:id/:title" element={<DetailMovies />} />
              <Route
                path="/movies/:id/:title/all-actors"
                element={<AllActors />}
              />
              <Route
                path="/reviews/:id/:title"
                element={<ReviewsMoviesForm />}
              />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/mylist/view/user/:id" element={<ViewList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/view/:id" element={<ViewProfile />} />
              <Route path="/friends" element={<Friends />} />
            </Routes>
          </div>
        </body>
      </Router>
    </>
  );
}

export default App;
