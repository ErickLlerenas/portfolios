import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getMenuItemClassNames } from "../../../helpers/classNamesHelper";

interface MenuItemProps {
	path: string;
	icon: IconProp;
	label: string;
}

const MenuItem: FC<MenuItemProps> = ({ path, icon, label }) => {
	const { pathname } = useLocation();

	return (
		<Link to={path} className={getMenuItemClassNames(pathname === path)}>
			<FontAwesomeIcon icon={icon} className="text-md md:text-lg" />
			<span>{label}</span>
		</Link>
	);
};

export default MenuItem;
