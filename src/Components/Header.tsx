import { navItems } from "../Constants";
import { Link } from "react-router-dom";
import { FC, useState } from "react";

// interface IHeaderProps {
//   active: string;
//   isLoggedIn: Boolean;
// }

interface INavItemProps {
  index: number;
  item: {
    link: string;
    name: string;
    dropdown: Boolean | undefined;
    dropdownOptions: object[] | undefined;
  };
  active: string;
}

const NavItem: FC<INavItemProps> = ({ item, index, active }) => {
  const [isDropdown, setIsDropdown] = useState<Boolean>(false);
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <>
      <div
        className="relative hover:text-green-400 transition-all duration-300 hover:pb-1 hover:border-b-2 border-green-400"
        onClick={item.dropdown ? toggleDropdown : () => {}}
      >
        <Link key={index} to={item.dropdown ? "#" : item.link}>
          <p className={active === item.name ? "font-bold" : ""}>{`${
            item.name
          }${item.dropdown ? (isDropdown ? " ▲" : " ▼") : ""}`}</p>
        </Link>
        {item.dropdown && (
          <>
            <div
              className={`absolute top-8 w-48 ${isDropdown ? " max-h-0 p-0 " : "p-4"}  bg-white text-black shadow-md shadow-green-400 transition-all duration-300 overflow-hidden`}
            >
              {item.dropdownOptions?.map((item: any, index) => (
                <div className="py-2 hover:text-green-400 transition-all duration-300 hover:pb-1 hover:border-b-2 border-green-400">
                  <Link key={index} to={item.link}>
                    <p
                      className={active === item.name ? "font-bold" : ""}
                    >{`${item.name}`}</p>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="absolute top-0 z-50 flex justify-center items-center h-16 w-full  shadow-md shadow-green-300">
      <div className="flex relative items-center px-6 w-full lg:w-4/5 h-16 justify-center">
        <div className="flex items-center absolute left-0">
          <img src="cabyum.png" className="w-12" alt="" />{" "}
          <span className="font-bold text-xl ">
            Cab<span className="text-green-400">Yum</span>
          </span>
        </div>
        <div className="flex justify-between w-[350px] text-gray-500 font-bold h-16 items-center">
          {navItems.map((item: any, index) => (
            <NavItem index={index} active={"active"} item={item} />
          ))}
        </div>
        <div className="absolute flex items-center right-0">
          <div>Sign In</div>
          <div className="ml-4 rounded-full relative flex overflow-hidden border-2 border-black h-12 w-12">
            <img src="cabyum.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
