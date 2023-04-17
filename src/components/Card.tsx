import { FC, ReactNode } from "react";

interface CardProps {
	title: string;
	children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
	return (
		<div className="w-full p-8 lg:p-16">
			<h2 className="text-4xl font-bold mb-8">{title}</h2>
			{children}
		</div>
	);
};

export default Card;
