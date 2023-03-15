import React, { ReactNode } from "react";
import Menu from "./Menu";
import Profile from "./Profile";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className="grid grid-cols-3 m-auto w-3/5">
			<div className="col-span-1">
				<Profile />
			</div>
			<div className="col-span-2">
				<Menu />
				<div className="">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
