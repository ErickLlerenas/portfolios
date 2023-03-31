import { useState } from "react";
import WorkModal from "./WorkModal";

interface WorkProps {
	title: string;
	position: string;
	color: string;
	image: string;
	description: string;
}

const Work = ({
	title,
	position,
	color,
	image,
	description,
}: WorkProps): JSX.Element => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		if (!open) {
			setOpen(true);
		}
	};

	return (
		<div className={"p-6 rounded-lg " + color} onClick={handleOpen}>
			<img src={image} alt={title} />
			<p className="text-gray-600">{position}</p>
			<h3 className="text-2xl">{title}</h3>
			{open && (
				<WorkModal
					setOpen={setOpen}
					title={title}
					description={description}
				/>
			)}
		</div>
	);
};

export default Work;
