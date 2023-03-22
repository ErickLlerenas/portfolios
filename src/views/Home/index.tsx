import Skill from "./components/Skill";

const Home = () => {
  return (
    
    <div className="w-full p-16">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-6 text-lg font-normal text-gray-600">
        I'm Susan xd and UI/UX Designer from Sydney, Australia, working in web
        development and print media. I enjoy turning complex problems into
        simple, beautiful and intuitive designs.
      </p>
      <p className="mt-2 text-lg font-normal text-gray-600">
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
      </p>
      <h2 className="text-4xl font-bold mt-16">What I do!</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Skill
          color="bg-red-50"
          title="React Js"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
        <Skill
          color="bg-blue-50"
          title="Next Js"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
        <Skill
          color="bg-blue-50"
          title="SASS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
        <Skill
          color="bg-teal-50"
          title="Tailwind Css"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
        <Skill
          color="bg-gray-50"
          title="Git & Github"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
        <Skill
          color="bg-purple-50"
          title="Scrum"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
        explicabo sint perspiciatis provident recusandae."
        />
    </div>
  );
};

export default Home;
