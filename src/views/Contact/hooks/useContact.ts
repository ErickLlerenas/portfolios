import { SubmitHandler } from "react-hook-form";

import { generateURL } from "../../../helpers/urlHelper";

import { Inputs } from "../types";

const useContact = () => {
	const onSubmit: SubmitHandler<Inputs> = ({ subject, body }) => {
		const url = generateURL({ subject, body });
		window.open(url, "_blank");
	};

	return {
		onSubmit,
	};
};
export default useContact;
