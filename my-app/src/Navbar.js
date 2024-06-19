import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  
  return (
    <nav className="nav">
        <Link to="/" className="site-title">Lens on the Music</Link>
        <ul>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/Reviews">Reviews</CustomLink>
          <CustomLink to="/Queued">Queued</CustomLink>
          <CustomLink to="/Favorites">Favorites</CustomLink>
        </ul>
    </nav>
  );
}

function CustomLink({to, children,...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return(
  <li className={isActive ? "active" : "`"}>
    <Link to={to} {...props}>{children}</Link>
  </li>
  )
  
}