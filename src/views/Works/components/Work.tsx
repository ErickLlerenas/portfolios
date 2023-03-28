interface WorkProps {
  title: string;
  position: string;
  color: string;
  image: string;
}

const Work = ({ title, position, color, image }: WorkProps): JSX.Element => {
  return (
    <div className={"p-6 rounded-lg " + color}>
      <img src={image} alt={title} />
      <p className="text-gray-600">{position}</p>
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

export default Work;
