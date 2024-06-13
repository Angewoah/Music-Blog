export default function Navbar() {
  return (
    <nav className="nav">
        <a href="/" className="site-title">Viviane Reviews</a>
        <ul>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Reviews">Reviews</a>
            </li>
        </ul>
    </nav>
  );
}