interface SkillProps {
  title: string;
  description: string;
  color: string;
}

const Skill = ({ title, description, color }: SkillProps): JSX.Element => {
  return (
    <div className={"p-6 rounded-lg " + color}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-lg font-normal text-gray-600">{description}</p>
    </div>
  );
};

export default Skill;
