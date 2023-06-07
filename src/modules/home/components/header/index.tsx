import { useLocation } from "react-router-dom";

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsOpen }: HeaderProps) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <h1 className="w-full fixed top-0 shadow-slate-500 text-2xl flex justify-center content-center text-white bg-p-navy-blue font-bold px-4 py-4 z-50">
      {currentRoute === "/stats" ? "Charts and Maps" : "Contact Page"}
      <div className="text-white fixed left-5">
        <button
          onClick={handleToggle}
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </h1>
  );
};

export default Header;
