import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Digital Notes</h1>
      <nav>
        <NavLink to="/" end>My Notes</NavLink>
        <NavLink to="/add">Add Note</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
