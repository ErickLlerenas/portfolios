import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItemProps {
  path: string;
  icon: ReactNode;
  label: string;
}

const MenuItem = ({ path, icon, label }: MenuItemProps): JSX.Element => {
  const { pathname } = useLocation();

  const SELECTED = "bg-gradient-to-r from-pink-500 to-orange-400 text-white";

  return (
    <Link
      to={path}
      className={`bg-gray-100 flex flex-col p-4 rounded-xl items-center text-gray-700 text-xs font-medium cursor-pointer hover:bg-gradient-to-r from-pink-500 to-orange-400 hover:text-white ${
        path === pathname && SELECTED
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
