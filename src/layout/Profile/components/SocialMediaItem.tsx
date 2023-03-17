import React, { ReactNode } from "react";

interface SocialMediaItemPros {
	path: string;
	icon: ReactNode;
}
const SocialMediaItem = ({ path, icon }: SocialMediaItemPros): JSX.Element => {
	return (
		<a
			href={path}
			target="_blank"
			className="bg-gray-100 rounded-xl p-2 from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-pink-500  "
		>
			{icon}
		</a>
	);
};

export default SocialMediaItem;
