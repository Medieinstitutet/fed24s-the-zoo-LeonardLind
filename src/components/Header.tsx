import { Link } from "react-router"; 

const Header = () => {
  return (
    <header className="bg-[#cc7683] p-4">
      <nav className="flex gap-4">
        <Link to="/" >🐾 Träffa oss</Link>
        <Link to="/animals">👨‍🍳 Mata oss</Link>
      </nav>
    </header>
  );
};

export default Header;
