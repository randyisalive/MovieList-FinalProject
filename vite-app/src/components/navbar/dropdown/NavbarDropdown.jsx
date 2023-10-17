import MovieDropdown from "./MoviedDropdown";
import TvShowsDropdown from "./TvShowsDropdown";

function NavbarDropdown() {
  return (
    <nav className="d-flex navbar-expand-lg bg-body gap-3 p-3">
      <MovieDropdown />
      <TvShowsDropdown />
    </nav>
  );
}

export default NavbarDropdown;
