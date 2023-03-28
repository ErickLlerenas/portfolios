import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItemProps {
	path: string;
	icon: ReactNode;
	label: string;
}

const MenuItem = ({ path, icon, label }: MenuItemProps): JSX.Element => {
	const { pathname } = useLocation();

	return (
		<Link
			to={path}
			className={`bg-gray-100 flex flex-col justify-center rounded-xl items-center text-gray-700 text-xs font-medium cursor-pointer my-hover w-16 h-16 ${
				path === pathname && "my-background"
			}`}
		>
			{icon}
			<span>{label}</span>
		</Link>
	);
};

export default MenuItem;
