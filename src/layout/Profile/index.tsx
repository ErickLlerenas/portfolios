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

import SocialMediaItem from "./components/SocialMediaItem";
import InfoItem from "./components/InfoItem";
import Download from "./components/Download";

import Picture from "../../assets/profile.jpg";

const Profile = (): JSX.Element => {
	return (
		<div className="mt-32">
			<div className="flex flex-col bg-white text-center w-96 p-8 rounded-3xl">
				<img
					src={Picture}
					alt="Profile picture"
					className="w-60 h-60 m-auto rounded-3xl relative -top-40"
				/>
				<div className="flex flex-col relative -mt-40">
					<h1 className="mt-4 mb-2 font-semibold text-3xl">
						Marco Vilchis
					</h1>
					<h2 className="text-gray-500 font-light">
						Lic en Admin :c
					</h2>
					<div className="flex flex-row gap-3 justify-center my-8">
						<SocialMediaItem
							icon={faInstagram}
							path="https://www.instagram.com/"
							color="text-pink-600"
						/>
						<SocialMediaItem
							icon={faLinkedinIn}
							path="https://www.linkedin.com/"
							color="text-blue-600"
						/>
						<SocialMediaItem
							icon={faWhatsapp}
							path="https://www.whatsapp.com/"
							color="text-teal-600"
						/>
					</div>
					<div className="flex flex-col bg-gray-100 p-7 rounded-2xl">
						<InfoItem
							title="Phone"
							icon={faMobileScreenButton}
							description="+55 314 109 7185"
							color="text-pink-500"
						/>
						<InfoItem
							title="Location"
							icon={faLocationDot}
							description="Colima, México"
							color="text-green-400"
						/>
						<InfoItem
							title="Email"
							icon={faEnvelopeOpenText}
							description="mhernandez24@ucol.mx"
							color="text-red-400"
						/>
						<InfoItem
							title="Birthday"
							icon={faCalendarDays}
							description="May 20, 2000"
							color="text-purple-400"
						/>
						<Download />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
