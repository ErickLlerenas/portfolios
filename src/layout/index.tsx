import { FC, ReactNode } from "react";

import Menu from "./Menu";
import Profile from "./Profile";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="layout">
			<div className="side">
				<Profile />
			</div>
			<div className="content">
				<Menu />
				<div className="bg-white rounded-3xl mt-10">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
