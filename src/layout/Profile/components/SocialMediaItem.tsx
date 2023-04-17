import { FC } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaItemPros {
	path: string;
	icon: IconDefinition;
	color: string;
}

const SocialMediaItem: FC<SocialMediaItemPros> = ({ path, icon, color }) => {
	return (
		<a href={path} target="_blank" className="flex align-middle">
			<FontAwesomeIcon
				icon={icon}
				className={`${color} bg-gray-100 rounded-xl p-3 my-hover`}
			/>
		</a>
	);
};

export default SocialMediaItem;
