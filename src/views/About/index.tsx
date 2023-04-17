import { FC } from "react";

import Card from "../../components/Card";
import Skill from "./components/Skill";
import { skillsData } from "./constants";

const About: FC = () => {
	return (
		<Card title="About Me">
			<p className="text-lg font-normal text-gray-600 text-justify">
				I'm Susan xd and UI/UX Designer from Sydney, Australia, working
				in web development and print media. I enjoy turning complex
				problems into simple, beautiful and intuitive designs.
			</p>
			<p className="mt-2 text-lg font-normal text-gray-600 text-justify">
				My aim is to bring across your message and identity in the most
				creative way. I created web design for many famous brand
				companies.
			</p>
			<h2 className="text-4xl font-bold mt-16">What I do!</h2>
			<div className="grid md:grid-cols-2 gap-8 mt-8 sm:grid-cols-1">
				{skillsData.map((skill) => (
					<Skill key={skill.title} {...skill} />
				))}
			</div>
		</Card>
	);
};

export default About;
