import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>
    </div>
  );
};

export default Header;
