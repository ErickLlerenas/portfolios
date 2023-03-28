import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import resume from "../../../assets/cv.pdf";

const Download = (): JSX.Element => {
	return (
		<div className="flex flex-row justify-center mt-8">
			<a
				href={resume}
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
