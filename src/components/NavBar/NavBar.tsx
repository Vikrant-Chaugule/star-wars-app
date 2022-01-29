import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  const toggleNavMenu = () => {
    setShowNavlinks(!showNavlinks);
  };

  const isNavLinksShown = showNavlinks
    ? "nav-links nav-links-active"
    : "nav-links";

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h3>STAR WARS</h3>
      </Link>

      <ul className={isNavLinksShown}>
        <NavLinkItem path={"/films"} label="Films" onClick={toggleNavMenu} />
        <NavLinkItem
          path={"/characters"}
          label="Characters"
          onClick={toggleNavMenu}
        />
        <NavLinkItem
          path={"/planets"}
          label="Planets"
          onClick={toggleNavMenu}
        />
        <NavLinkItem
          path={"/starships"}
          label="Starships"
          onClick={toggleNavMenu}
        />
        <NavLinkItem
          path={"/species"}
          label="Species"
          onClick={toggleNavMenu}
        />
        <NavLinkItem
          path={"/vehicles"}
          label="Vehicles"
          onClick={toggleNavMenu}
        />
      </ul>
      <div className="ham-burger" onClick={toggleNavMenu}>
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </nav>
  );
};

interface INavLinkItemProps {
  path: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavLinkItem = ({ path, label, onClick }: INavLinkItemProps) => {
  return (
    <Link to={path} className="nav-links-item" onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavBar;
