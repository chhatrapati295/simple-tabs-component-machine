import { useState } from "react";

const TABS_DATA = [
  { id: 1, title: "Tab 1", desc: "lorem ipsum 1" },
  { id: 2, title: "Tab 2", desc: "lorem ipsum 2" },
  { id: 3, title: "Tab 3", desc: "lorem ipsum 3" },
];

export default function App() {
  const [active, setActive] = useState(1);

  const handleChangeTab = (id: number) => {
    setActive(id);
  };

  const activeTab = TABS_DATA.find((tab) => tab.id === active);

  return (
    <div className="p-4">
      <ul role="tablist" className="flex gap-2 border-b border-black w-fit">
        {TABS_DATA.map((item) => (
          <li
            key={item.id}
            role="tab"
            aria-selected={item.id === active}
            className={`cursor-pointer ${
              item.id === active
                ? "bg-orange-300 font-bold border-b-2 border-orange-500"
                : ""
            }`}
          >
            <button
              onClick={() => handleChangeTab(item.id)}
              className="p-2 text-xs"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div role="tabpanel" className="mt-4 text-sm">
        {activeTab?.desc}
      </div>
    </div>
  );
}
