import { FC } from "react";

interface ExperienceProps {
	title: string;
	description: string;
	color: string;
	date: string;
}

const Experience: FC<ExperienceProps> = ({
	title,
	description,
	color,
	date,
}) => {
	return (
		<div className={"p-6 rounded-lg " + color}>
			<p className="text-gray-600">{date}</p>
			<h3 className="text-2xl">{title}</h3>
			<p className="mt-2 text-lg font-normal">{description}</p>
		</div>
	);
};

export default Experience;
