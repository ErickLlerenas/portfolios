import {
	faInstagram,
	faLinkedinIn,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
	faCalendarDays,
	faLocationDot,
	faMobileScreenButton,
	faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

export const socialMediaData = [
	{
		icon: faInstagram,
		path: "https://www.instagram.com/",
		color: "text-pink-600",
	},
	{
		icon: faLinkedinIn,
		path: "https://www.linkedin.com/",
		color: "text-blue-600",
	},
	{
		icon: faWhatsapp,
		path: "https://www.whatsapp.com/",
		color: "text-teal-600",
	},
];

export const infoItemData = [
	{
		title: "Phone",
		icon: faMobileScreenButton,
		description: "+55 314 109 7185",
		color: "text-pink-500",
	},
	{
		title: "Location",
		icon: faLocationDot,
		description: "Colima, México",
		color: "text-green-400",
	},
	{
		title: "Email",
		icon: faEnvelopeOpenText,
		description: "mhernandez24@ucol.mx",
		color: "text-red-400",
	},
	{
		title: "Birthday",
		icon: faCalendarDays,
		description: "May 20, 2000",
		color: "text-purple-400",
	},
];
