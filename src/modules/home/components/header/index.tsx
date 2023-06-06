import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <h1 className="w-full fixed top-0 shadow-slate-500 text-2xl flex justify-center content-center text-white bg-p-navy-blue font-bold px-4 py-4 z-50">
      {currentRoute === "/stats" ? "Charts and Maps" : "Contact Page"}
    </h1>
  );
};

export default Header;
