import { FC } from "react";
import { useLocation } from "react-router-dom";

import SocialMediaItem from "./components/SocialMediaItem";
import InfoItem from "./components/InfoItem";
import Download from "./components/Download";

import { ProfilePicture } from "../../assets";
import { infoItemData, socialMediaData } from "./constants";

const Profile: FC = () => {
	const { pathname } = useLocation();

	if (pathname !== "/" && window.screen.width < 768) {
		return <div className="mt-10" />;
	}

	return (
		<div className="mt-52 md:mt-40 w-full md:block">
			<div className="flex flex-col bg-white text-center p-8 rounded-3xl">
				<img
					src={ProfilePicture}
					alt="Profile picture"
					className="w-60 h-60 m-auto rounded-3xl relative -top-40"
				/>
				<div className="flex flex-col -mt-40">
					<h1 className="mt-4 mb-2 font-semibold text-3xl">
						Erick Llerenas
					</h1>
					<h2 className="text-gray-1000 font-light">
						Software Engineer
					</h2>
					<div className="flex flex-row gap-3 justify-center my-8">
						{socialMediaData.map(({ icon, path, color }) => (
							<SocialMediaItem
								icon={icon}
								path={path}
								color={color}
							/>
						))}
					</div>
					<div className="flex flex-col bg-gray-100 p-7 rounded-2xl">
						{infoItemData.map(
							({ title, icon, description, color }) => (
								<InfoItem
									title={title}
									icon={icon}
									description={description}
									color={color}
								/>
							)
						)}
						<Download />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
