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
import ViewProfile from "./pages/profile/ViewProfile";
import Friends from "./pages/friends/Friends";
import RequestFriends from "./pages/friends/RequestFriends";

// _app.js
import { PrimeReactProvider } from "primereact/api";
import ForgotPassword from "./pages/authentication/ForgotPassword";

function App() {
  return (
    <>
      <PrimeReactProvider value={{ unstyled: false }}>
        <Router>
          <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
            <div className="d-flex">
              {isLogin() ? <Navbar /> : null}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
                <Route path="/forgot" element={<ForgotPassword />} />
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
                <Route path="/profile" element={<Profile />} />
                <Route path="/view/:id" element={<ViewProfile />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/friends/request" element={<RequestFriends />} />
              </Routes>
            </div>
          </body>
        </Router>
      </PrimeReactProvider>
    </>
  );
}

export default App;
