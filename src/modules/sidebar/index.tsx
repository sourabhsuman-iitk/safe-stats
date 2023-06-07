import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const items = [
  {
    name: "Contacts",
    url: "/",
  },
  {
    name: "Charts and Maps",
    url: "/stats",
  },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const handleToggle = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`left-0 z-20 h-full w-80 shadow-xl sm:flex ${
        isOpen ? "block fixed" : "hidden"
      }`}
    >
      <div className="flex pt-16 flex-col bg-white w-full h-full">
        <div className="space-y-3">
          <div className="flex items-center justify-center w-full">
            <h2 className="text-2xl text-center mt-4 font-bold text-p-navy-blue">
              Dashboard
            </h2>
          </div>
          <div className="flex-1 w-full">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {items.map((item) => {
                return (
                  <li
                    key={item.url + item.name}
                    className="hover:bg-p-beige"
                    onClick={handleToggle}
                  >
                    <Link
                      to={item.url}
                      className="flex text-xl text-p-light-blue items-center py-3 px-5 space-x-3 font-semibold rounded-md hover:text-p-navy-blue "
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
