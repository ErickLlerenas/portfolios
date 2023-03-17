import React from "react";
import profile from "../../assets/profile.png";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SlScreenSmartphone } from "react-icons/sl";
import SocialMediaItem from "./components/SocialMediaItem";
import { BsDownload } from "react-icons/bs";
import Cv from "./components/Cv";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Profile = (): JSX.Element => {
	return (
		<div className="flex flex-col bg-white text-center w-96 p-8 rounded-3xl mt-32 ">
			<img
				src={profile}
				alt=""
				className="w-60 h-60 m-auto rounded-3xl relative -top-40"
			/>
			<div className="flex flex-col relative -mt-40">
				<h1 className="mt-4 mb-3 font-semibold text-3xl">
					Marco Vilchis
				</h1>
				<h2 className="text-gray-500 font-light">Lic en Admin :c</h2>
				<div className="flex flex-row gap-3 justify-center mt-8 mb-8">
					<SocialMediaItem
						icon={<CiInstagram className="text-2xl " />}
						path="https://www.instagram.com/"
					/>
					<SocialMediaItem
						icon={<CiLinkedin className="text-2xl" />}
						path="https://www.linkedin.com/"
					/>
				</div>
				<div className="flex flex-col bg-gray-100 p-7 rounded-2xl">
					<div className="flex py-2.5 border-b border-gray-300 dark:border-l-gray-700">
						<span className="flex-shrink-0 bg-white dark:bg-black text-pink-600 text-3xl shadow-md rounded-md p-1.5">
							<SlScreenSmartphone className=" " />
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-gray-500 dark:text-gray-600">
								Phone
							</p>
							<p className="dark-text-white break-all">
								+52 314 109 7185
							</p>
						</div>
					</div>
					<div className="flex py-2.5 border-b border-gray-300 dark:border-l-gray-700">
						<span className="flex-shrink-0 bg-white dark:bg-black text-pink-600 text-3xl shadow-md rounded-md p-1.5">
							<SlLocationPin className=" " />
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-gray-500 dark:text-gray-600">
								Location
							</p>
							<p className="dark-text-white break-all">
								Colima, México
							</p>
						</div>
					</div>
					<div className="flex py-2.5 border-b border-gray-300 dark:border-l-gray-700">
						<span className="flex-shrink-0 bg-white dark:bg-black text-pink-600 text-3xl shadow-md rounded-md p-1.5">
							<MdOutlineEmail className=" " />
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-gray-500 dark:text-gray-600">
								E-mail
							</p>
							<p className="dark-text-white break-all">
								jorgemarcohernandezvilchis@gmail.com
							</p>
						</div>
					</div>
					<div className="flex py-2.5 border-b border-gray-300 dark:border-l-gray-700">
						<span className="flex-shrink-0 bg-white dark:bg-black text-pink-600 text-3xl shadow-md rounded-md p-1.5">
							<HiOutlineCake className=" " />
						</span>
						<div className="text-left ml-2.5">
							<p className="text-xs text-gray-500 dark:text-gray-600">
								Birthday
							</p>
							<p className="dark-text-white break-all">
								May 20,2000
							</p>
						</div>
					</div>
				</div>
				<Cv
					icon={<BsDownload className="text-2xl" />}
					path="https://cdn-files-occ.s3.amazonaws.com/documents/_n/_NVEHPH0tKxSY8aWDnk6tQ2/resumefile/Marco-Raziel-Hernandez-Vilchis-2.pdf?AWSAccessKeyId=AKIAITM5FJ4VJNPOAEOA&Expires=1679079777&Signature=V35oJK5bmV5otq7c2eBhesLdi7Q%3D"
				/>
			</div>
		</div>
	);
};

export default Profile;

/*flex row para contactos*/
