import React, { ReactNode } from "react";
import { SlScreenSmartphone } from "react-icons/sl";

interface InfoProps {
	icon: ReactNode;
	label: string;
}

const Info = ({ icon, label }: InfoProps): JSX.Element => {
	return <div className="flex col"></div>;
};

export default Info;
