import React, { ReactNode } from "react";

interface Cv {
  path: string;
  icon: ReactNode;
}
const Cv = ({ path, icon }: Cv): JSX.Element => {
  return (
    <a
      href={path}
      target="_blank"
      className="inline-flex items-center mx-auto bg-gradient-to-r duration-200 transition ease-linear hover:bg-gradient-to-l from-orange-500 to-pink-500 px-8 py-3 text-lg text-white rounded-3xl mt-6"
    >
      {icon}
      <span className="ml-3">Download</span>
    </a>
  );
};

export default Cv;
