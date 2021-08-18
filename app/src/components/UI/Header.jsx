import "./Header.css";
import logo from "../../img/icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-icon">
        <img src={logo} alt="icon" className="header-logo" />
      </div>
      <h1 className="header-heading">
        <span className="outline">expense</span>tracker
      </h1>
    </header>
  );
};

export default Header;
