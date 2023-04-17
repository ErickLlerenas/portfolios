import { GMAIL_URL, MAIL } from "../views/Contact/constants";
import { Inputs } from "../views/Contact/types";

export const generateURL = ({ subject, body }: Inputs): string => {
	return `${GMAIL_URL}?view=cm&fs=1&to=${MAIL}&su=${subject}&body=${encodeURIComponent(
		body
	)}`;
};
