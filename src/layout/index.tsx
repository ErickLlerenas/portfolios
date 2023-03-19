import React, { ReactNode } from "react";
import Menu from "./Menu";
import Profile from "./Profile";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
			<div className="flex flex-row ml-56 mr-56">
				<Profile />
				<div className="flex flex-col">
					<Menu />
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
