import Work from "./components/Work";

import workExampleImage from "../../assets/work_image_example.jpg";

const Works = () => {
  return (
    <div className="w-full p-16">
      <h2 className="text-4xl font-bold">Works</h2>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <Work
          color="bg-pink-50"
          title="Uber clone"
          position="Freelance"
          image={workExampleImage}
        />
        <Work
          color="bg-blue-50"
          title="Migration"
          position="Frontend software engineer"
          image={workExampleImage}
        />
        <Work
          color="bg-orange-50"
          title="Migration"
          position="Frontend software engineer"
          image={workExampleImage}
        />
      </div>
    </div>
  );
};

export default Works;
