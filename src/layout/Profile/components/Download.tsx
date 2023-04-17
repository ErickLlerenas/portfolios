import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { CV } from "../../../assets";

const Download: FC = () => {
	return (
		<div className="flex flex-row justify-center mt-8">
			<a
				href={CV}
				target="_blank"
				className="my-background my-hover py-3 px-10 w-fit flex flex-row items-center rounded-full"
			>
				<FontAwesomeIcon icon={faDownload} />
				<span className="ml-3">Download</span>
			</a>
		</div>
	);
};
export default Download;
