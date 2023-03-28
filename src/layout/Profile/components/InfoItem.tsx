import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InfoItemProps {
	title: string;
	description: string;
	icon: IconDefinition;
	color: string;
}
const InfoItem = ({ description, title, icon, color }: InfoItemProps) => {
	return (
		<div className="flex py-2.5 border-b border-gray-300 dark:border-l-gray-700">
			<FontAwesomeIcon
				icon={icon}
				className={`${color} bg-white text-lg shadow-md rounded-md p-3 w-4 h-4`}
			/>

			<div className="text-left ml-2.5">
				<p className="text-xs text-gray-500 dark:text-gray-600">
					{title}
				</p>
				<p className="dark-text-white break-all">{description}</p>
			</div>
		</div>
	);
};

export default InfoItem;
