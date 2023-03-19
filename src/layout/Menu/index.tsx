import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

import MenuItem from "./components/MenuItem";

const Menu = (): JSX.Element => {
  return (
    <nav>
      <div className="gap-6 flex flex-row bg-white px-10 py-8 w-fit float-right rounded-2xl">
        <MenuItem
          icon={<AiOutlineHome className="text-lg" />}
          label="Home"
          path="/"
        />
        <MenuItem
          icon={<HiOutlineDocumentText className="text-lg" />}
          label="Resume"
          path="/resume"
        />
        <MenuItem
          icon={<MdWorkOutline className="text-lg" />}
          label="Works"
          path="/works"
        />
        <MenuItem
          icon={<RiContactsBookLine className="text-lg" />}
          label="Contact"
          path="/contact"
        />
      </div>
    </nav>
  );
};

export default Menu;
