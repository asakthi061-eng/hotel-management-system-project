
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/hotels" className="header-logo">
        <h2>
          Hotel<span>Hub</span>
        </h2>
      </Link>

      <div className="header-admin">
        <div className="admin-avatar">A</div>
        <span className="admin-name">Admin</span>
      </div>
    </header>
  );
}

export default Header;
