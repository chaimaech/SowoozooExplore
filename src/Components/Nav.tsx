import React from "react";
import { Link } from "react-router-dom";
import { NavRoutes } from "../Layout/Routes";

const linkStyle: React.CSSProperties = {
  margin: "10px",
  padding: "10px",
  border: "1px solid white",
  color: "white",
};

export const Nav = (): React.ReactElement => {
  const links = [
    { title: "Home", route: NavRoutes.Home },
    { title: "Timeline demo", route: NavRoutes.Timeline },
  ];

  return (
    <div style={{ display: "flex" }}>
      {links.map((link) => (
        <Link key={link.route} style={linkStyle} to={link.route}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
