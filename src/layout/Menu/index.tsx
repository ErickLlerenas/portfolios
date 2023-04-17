import { FC } from "react";

import {
	faBriefcase,
	faAddressBook,
	faUser,
	faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import MenuItem from "./components/MenuItem";

const Menu: FC = () => {
	return (
		<nav className="gap-6 flex flex-row bg-white p-2 md:p-7 w-full top-0 md:w-fit md:rounded-2xl rounded-b-2xl absolute md:relative self-center md:self-end justify-center">
			<MenuItem icon={faUser} label="About" path="/" />
			<MenuItem icon={faFileLines} label="Resume" path="/resume" />
			<MenuItem icon={faBriefcase} label="Works" path="/works" />
			<MenuItem icon={faAddressBook} label="Contact" path="/contact" />
		</nav>
	);
};

export default Menu;
