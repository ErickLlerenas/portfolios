import { FC } from "react";

import Work from "./components/Work";
import Card from "../../components/Card";

import { WorkImageExample } from "../../assets";

const Works: FC = () => {
	return (
		<Card title="Works">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<Work
					color="bg-pink-50"
					title="Uber clone"
					position="Freelance"
					description="dfasdfasdfnweoi dfj oaisdjxfk jedsxf nasidfj ksdj"
					image={WorkImageExample}
				/>
				<Work
					color="bg-blue-50"
					title="Migration"
					position="Frontend software engineer"
					description="kwasdkfbjkasd fkjansdjkfbcljsdn k afisaudhf ksdjzfx bcskdzhxfc"
					image={WorkImageExample}
				/>
				<Work
					color="bg-orange-50"
					title="Migration"
					position="Frontend software engineer"
					description="asdfodifxjcoudfh dh fukshdfk asjhksad kdfhsakdfhhajajjaja  XD   XD X D XDX D"
					image={WorkImageExample}
				/>
			</div>
		</Card>
	);
};

export default Works;
