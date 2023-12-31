import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import logOut from "../../functionComponent/authentication/logOut";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import useUsersData from "../../functionComponent/users/useUsersData";
import { Image } from "primereact/image";

function Navbar() {
  const { GetUser } = useUsersData();
  const { user } = GetUser();
  const location = useLocation();
  const path = location.pathname;

  const developmentToastRef = useRef(null);
  const show = (toast) => {
    toast.current.show({
      severity: "error",
      summary: "Info",
      detail: "Under Development",
    });
  };

  const selectedLink = () => {
    const text = " font-semibold  border-r-4 border-r-red-600";
    return text;
  };

  const selectedIcon = () => {
    const text = " fill-red-600";
    return text;
  };
  return (
    <>
      <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
        <div className=" font-bold text-lg flex items-center gap-x-3">
          <Image src="/icon.jpg" alt="icon" width="50" />
          <div className="tracking-wide dark:text-white">MovieList</div>
        </div>
        <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
          <div className="text-gray-400/70  font-medium uppercase">Menu</div>
          <Link
            className={
              "flex items-center space-x-2 py-1 dark:text-white pr-20 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" +
              (path === "/" ? selectedLink() : null)
            }
            to="/"
            style={{ textDecoration: "none" }}
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600" +
                (path === "/" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z"></path>
            </svg>
            <span>Home</span>
          </Link>
          <Link
            className={
              "flex items-center space-x-2 py-1 dark:text-white pr-20 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" +
              (path === "/community" ? selectedLink() : null)
            }
            to="/community"
            style={{ textDecoration: "none" }}
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600" +
                (path === "/community" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M19 2H9c-1.11 0-2 .89-2 2v5.586l-4.707 4.7v0c-.4.39-.4 1.02 0 1.41 .18.18.44.29.7.29v5 0c0 .55.44 1 1 1h16v0c.55 0 1-.45 1-1v-17c0-1.11-.9-2-2-2Zm-8 18H5v-5.586l3-3 3 3V20Zm8 0h-6v-4 0c.55 0 .99-.45 1-1 0-.27-.11-.53-.3-.72L8.99 9.57V3.984h10v16Z"></path>
                <path d="M11 6h2v2h-2Zm4 0h2v2h-2Zm0 4.03h2v1.96h-2Zm0 3.96h2v2h-2Zm-8 1h2v2H7Z"></path>
              </g>
            </svg>
            <span>Community</span>
          </Link>
          <Link
            className={
              "flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white " +
              (path === "/movies" ? selectedLink() : null)
            }
            to="/movies"
            style={{ textDecoration: "none" }}
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600 " +
                (path === "/movies" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10Zm0 18c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8 0 4.41-3.59 8-8 8Z"></path>
                <path d="M8 16l5.991-2 2-6 -6 2Z"></path>
              </g>
            </svg>
            <span>Movies</span>
          </Link>
          <Link
            className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
            href="#"
            onClick={() => {
              show(developmentToastRef);
            }}
          >
            <div className="d-flex gap-2 align-items-center">
              <Toast ref={developmentToastRef} />
              <i
                className="pi pi-wrench
"
              ></i>
              <span>Actors</span>
            </div>
          </Link>

          <div className="mt-8 text-gray-400/70  font-medium uppercase">
            Social
          </div>
          <Link
            className={
              "flex items-center space-x-2 py-1 dark:text-white pr-20 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" +
              (path === "/profile" ? selectedLink() : null)
            }
            to="/profile"
            p
            style={{ textDecoration: "none" }}
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600" +
                (path === "/profile" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2v0C9.23 2 7 4.23 7 7c0 2.76 2.23 5 5 5 2.76 0 5-2.24 5-5v0c0-2.77-2.24-5-5-5Zm0 8v0c-1.66 0-3-1.35-3-3 0-1.66 1.34-3 3-3 1.65 0 3 1.34 3 3v0c0 1.65-1.35 3-3 3Zm9 11v-1 0c0-3.87-3.14-7-7-7h-4v0c-3.87 0-7 3.13-7 7v1h2v-1 0c0-2.77 2.23-5 5-5h4v0c2.76 0 5 2.23 5 5v1Z"></path>
            </svg>
            <span>{user.username}</span>
          </Link>
          <a
            className={
              "flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white " +
              (path === "/profile" ? selectedLink() : null)
            }
            href="#"
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600" +
                (path === "/friends" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M16.6 11.04v-.001c.6-1.04.87-2.25.75-3.44 -.18-1.79-1.18-3.37-2.81-4.44l-1.11 1.66c1.11.742 1.8 1.79 1.91 2.974l-.001 0c.11 1.1-.29 2.2-1.08 2.98l-1.2 1.19 1.61.47c4.23 1.24 4.28 5.49 4.28 5.53h2c0-1.79-.96-5.285-4.4-6.952Z"></path>
                <path d="M9.5 12c2.2 0 4-1.8 4-4 0-2.21-1.8-4-4-4 -2.21 0-4 1.79-4 4 0 2.2 1.79 4 4 4Zm0-6c1.1 0 2 .89 2 2 0 1.1-.9 2-2 2 -1.11 0-2-.9-2-2 0-1.11.89-2 2-2Zm1.5 7H8c-3.31 0-6 2.69-6 6v1h2v-1c0-2.21 1.79-4 4-4h3c2.2 0 4 1.79 4 4v1h2v-1c0-3.31-2.7-6-6-6Z"></path>
              </g>
            </svg>
            <Link to={"/friends"}>
              <span>Friends</span>
            </Link>
          </a>
          <Link
            className={
              "flex items-center space-x-2 py-1 dark:text-white pr-20 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white" +
              (path === "/mylist" ? selectedLink() : null)
            }
            to="/mylist"
            style={{ textDecoration: "none" }}
            p
          >
            <svg
              className={
                "h-5 w-5 group-hover:fill-red-600" +
                (path === "/mylist" ? selectedIcon() : null)
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M12 2v0C6.47 2 2 6.47 2 12c0 5.52 4.47 10 10 10 5.52 0 10-4.48 10-10v-.001c0-5.53-4.48-10-10-10Zm0 18v0c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8v0c0 4.41-3.59 8-8 8Z"></path>
                <path d="M12 8v0c-2.21 0-4 1.79-4 4 0 2.2 1.79 4 4 4 2.2 0 4-1.8 4-4v0c0-2.21-1.8-4-4-4Zm0 6v0c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2v0c0 1.1-.9 2-2 2Z"></path>
              </g>
            </svg>
            <span>MyList</span>
          </Link>

          <div className="mt-8 text-gray-400/70  font-medium uppercase">
            Authentication
          </div>

          <a
            className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
            href="#"
          >
            <svg
              className="h-5 w-5 group-hover:fill-red-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M16 13v-2H7V8l-5 4 5 4v-3Z"></path>
                <path d="M20 3h-9c-1.11 0-2 .89-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.89 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2Z"></path>
              </g>
            </svg>
            <span onClick={() => logOut()}>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
