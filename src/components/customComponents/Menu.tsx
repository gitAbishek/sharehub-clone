import React from "react";
import { Menu } from "@headlessui/react";
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

const CustomMenu: React.FC<CustomMenuProps> = ({ title, list }) => {
  return (
    <Menu>
      <div className="relative">
        <Menu.Button className="w-full flex justify-between items-center   font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 uppercase">
          {title}
          <FiChevronDown
            className="-mr-1 ml-2  text-violet-100 hover:text-violet-100 "
            aria-hidden="true"
          />
        </Menu.Button>

        <Menu.Items className="absolute left-0 mt-5 w-56 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="">
            {list.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && <div className="border-b border-gray-200" />}
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-black text-white" : "text-gray-900"
                      } group flex w-full items-center  px-2 py-2 text-sm`}
                    >
                      {item.listName}
                    </button>
                  )}
                </Menu.Item>
              </React.Fragment>
            ))}
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default CustomMenu;
