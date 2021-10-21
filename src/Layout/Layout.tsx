import React from "react";
import { Nav } from "../Components/Nav";

export const Layout = ({ children }: React.PropsWithChildren<{}>): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
      }}
    >
      <header style={{ flex: "0", background: "hsl(300deg 44% 33%)" }}>
        <Nav />
      </header>
      <div style={{ flex: "1" }}>{children}</div>
      <footer style={{ flex: "0", background: "hsl(300deg 44% 33%)" }}>Footer</footer>
    </div>
  );
};
