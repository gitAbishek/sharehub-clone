import { useContextStore } from "@/context/context.consumer";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface MenuItem {
  id: number;
  listName: string;
  link: string;
}

interface CustomMenuProps {
  title: string;
  list: MenuItem[];
}

const MobileCustomMenu: React.FC<CustomMenuProps> = ({ title, list }) => {
  const [open, setOpen] = useState(false);
  const { setIsOpen } = useContextStore();

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickCloseMenu = () => {
    setOpen(false);
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex w-full text-xs uppercase justify-between " onClick={handleClickOpen}>
        {title}
        <FiChevronDown
          className="-mr-1 ml-2  text-violet-100 hover:text-violet-100 "
          aria-hidden="true"
        />
      </div>

      {open && (
        <ul className="flex flex-col gap-4 ">
          {list.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <div className="border-t border-gray-500 font-light" />}
              <li>

                <Link href={item.link} onClick={handleClickCloseMenu} className="text-gray-600">
                  {item.listName}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileCustomMenu;
