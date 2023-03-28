import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import Experience from "./components/Experience";

const Resume = () => {
	return (
		<div className="w-full p-16">
			<h2 className="text-4xl font-bold">Resume</h2>

			<div className="grid grid-cols-2 gap-8 mt-8">
				<div className="flex flex-row items-center gap-2">
					<FontAwesomeIcon
						icon={faGraduationCap}
						className="text-3xl text-red-500"
					/>
					<h3 className="text-3xl font-semibold">Education</h3>
				</div>
				<div className="flex flex-row items-center gap-2">
					<FontAwesomeIcon
						icon={faBriefcase}
						className="text-3xl text-red-500"
					/>
					<h3 className="text-3xl font-semibold">Experience</h3>
				</div>
				<Experience
					color="bg-red-50"
					title="Enroute"
					description="Frontend software engineer"
					date="2021 - current"
				/>
				<Experience
					color="bg-blue-50"
					title="Freelance"
					description="Worked as a freelancer for local customers"
					date="2020 - 2021"
				/>
				<Experience
					color="bg-blue-50"
					title="Universidad de Colima"
					description="Software Engineer"
					date="2018-2022"
				/>
				<Experience
					color="bg-teal-50"
					title="Tailwind Css"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
	  explicabo sint perspiciatis provident recusandae."
					date="12893721s"
				/>
				<Experience
					color="bg-gray-50"
					title="Universidad de Colima"
					description="Technical Analyst Programmer"
					date="2015-2018"
				/>
				<Experience
					color="bg-purple-50"
					title="Scrum"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
	  explicabo sint perspiciatis provident recusandae."
					date="12893721s"
				/>
			</div>
		</div>
	);
};

export default Resume;
