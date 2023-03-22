import React, { ReactNode } from "react";
import Menu from "./Menu";
import Profile from "./Profile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
   

    <div className="layout">
      <Profile />
      <div className="content">
        <Menu />
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
