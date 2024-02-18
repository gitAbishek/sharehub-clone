import { useState } from "react";
import { Tab } from "@headlessui/react";
import Indices from "./Indices";
import SubIndices from "./SubIndices";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Top() {
  const [show, setShow] = useState<boolean>(false);  
  let [categories] = useState({
    TurnOver: [
      {
        id: 1,
        component: <Indices show={false} />,
      },
    ],
    TradedShares: [
      {
        id: 1,
        component: <SubIndices show={false} />,
      },
    ],
    Transactions: [
      {
        id: 1,
        component: <Indices show={false} />,
      },
    ],
  });

  return (
    <div className="w-full px-5 py-5 lg:py-[70px]">
      <Tab.Group>
        <Tab.List className="flex  rounded-xl bg-[#D2D2D2] ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg text-sm font-medium leading-5 py-4",
                  "",
                  selected
                    ? " text-white bg-black "
                    : "text-black "
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white ",
                ""
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md  "
                  >
                    {post.component}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
